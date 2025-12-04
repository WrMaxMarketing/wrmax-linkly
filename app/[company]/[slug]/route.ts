import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ company: string; slug: string }> }
) {
    // 👇 AQUI está o pulo do gato: await no params
    const { company, slug } = await context.params;

    if (!company || !slug) {
        return new NextResponse("Parâmetros inválidos", { status: 400 });
    }

    // 1. Buscar empresa
    const { data: companyData, error: companyError } = await supabaseAdmin
        .from("companies")
        .select("id")
        .eq("name", company)
        .single();

    if (companyError || !companyData) {
        console.error("Empresa não encontrada:", companyError);
        return new NextResponse("Empresa não encontrada", { status: 404 });
    }

    // 2. Buscar link
    const { data: link, error: linkError } = await supabaseAdmin
        .from("links")
        .select("*")
        .eq("company_id", companyData.id)
        .eq("slug", slug)
        .single();

    if (linkError || !link) {
        console.error("Link não encontrado:", linkError);
        return new NextResponse("Link não encontrado", { status: 404 });
    }

    // 3. Incrementar contador
    await supabaseAdmin
        .from("links")
        .update({ clicks_total: (link.clicks_total ?? 0) + 1 })
        .eq("id", link.id);

    // 4. Registrar clique
    await supabaseAdmin.from("clicks").insert({
        link_id: link.id,
        company_id: companyData.id,
        user_agent: req.headers.get("user-agent") ?? null,
        referer: req.headers.get("referer") ?? null,
        ip_address: req.headers.get("x-forwarded-for") ?? null,
    });

    // 5. Redirecionar
    // Enviar evento para GA4
    await fetch(
        `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client_id: `${company}-${slug}-${Date.now()}`, // qualquer identificador funciona
                events: [
                    {
                        name: "link_redirect",
                        params: {
                            company: company,
                            slug: slug,
                            destination: link.destination_url
                        }
                    }
                ]
            })
        }
    );

    return NextResponse.redirect(link.destination_url, 302);
}
