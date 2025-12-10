// app/[company]/[source]/[medium]/[action]/redirect/route.ts
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  company: string;
  source: string;
  medium: string;
  action: string;
};

async function doRedirect(
  req: NextRequest,
  params: RouteParams,
  formData?: FormData
) {
  const { company, source, medium, action } = params;

  // 1. Buscar empresa
  const { data: companyData, error: companyError } = await supabaseAdmin
    .from("companies")
    .select("id, name")
    .eq("name", company)
    .single();

  if (companyError || !companyData) {
    return new NextResponse("Empresa não encontrada", { status: 404 });
  }

  // 2. Buscar link correspondente
  const { data: link, error: linkError } = await supabaseAdmin
    .from("links")
    .select("*")
    .eq("company_id", companyData.id)
    .eq("source", source)
    .eq("medium", medium)
    .eq("action", action)
    .single();

  if (linkError || !link) {
    return new NextResponse("Link não encontrado", { status: 404 });
  }

  // 3. Se veio formulário (POST), salvar dados em form_submissions
  if (formData) {
    const name = (formData.get("name") as string | null) ?? null;
    const phone = (formData.get("phone") as string | null) ?? null;
    const energyStr = (formData.get("energy_kwh") as string | null) ?? null;
    const energy_kwh = energyStr ? Number(energyStr) : null;

    // 🔹 Campos opcionais (pensados pra TMAX, mas não quebram CP Solar)
    const imovel_interesse =
      (formData.get("imovel_interesse") as string | null) ?? null;
    const bairros = (formData.get("bairros") as string | null) ?? null;
    const faixa_preco =
      (formData.get("faixa_preco") as string | null) ?? null;

    await supabaseAdmin.from("form_submissions").insert({
      company_id: companyData.id,
      link_id: link.id,
      name,
      phone,
      energy_kwh, // para TMAX fica null, tudo bem
    });

    // 🔹 3.1. Enviar também para o Google Sheets (se a URL estiver configurada)
    const webhookUrl = process.env.FORMS_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // dados da empresa / link
            company: companyData.name,
            company_id: companyData.id,
            link_id: link.id,
            link_label: link.label,
            source,
            medium,
            action,

            // dados do formulário (comuns)
            name,
            phone,
            energy_kwh,

            // 🔹 dados extras (usados em TMAX, ignorados em CP Solar)
            imovel_interesse,
            bairros,
            faixa_preco,

            // timestamp
            submitted_at: new Date().toISOString(),
          }),
        });
      } catch (err) {
        // Não quebrar o fluxo por causa do Sheets
        console.error("Erro ao enviar para Google Sheets:", err);
      }
    }
  }

  // 4. Incrementar contador na tabela links
  const currentClicks = Number(link.clicks_total ?? 0);

  await supabaseAdmin
    .from("links")
    .update({ clicks_total: currentClicks + 1 })
    .eq("id", link.id);

  // 5. Registrar clique na tabela clicks
  await supabaseAdmin.from("clicks").insert({
    link_id: link.id,
    company_id: companyData.id,
    user_agent: req.headers.get("user-agent") ?? null,
    referer: req.headers.get("referer") ?? null,
    ip_address: req.headers.get("x-forwarded-for") ?? null,
  });

  // 6. Redirecionar para o destino final
  return NextResponse.redirect(link.destination_url, 302);
}

// 🔹 GET: usado para links sem formulário (ou acesso direto a /redirect)
export async function GET(
  req: NextRequest,
  context: { params: Promise<RouteParams> }
) {
  const params = await context.params; // ⬅️ continua igual
  return doRedirect(req, params);
}

// 🔹 POST: usado quando o formulário faz submit para /redirect
export async function POST(
  req: NextRequest,
  context: { params: Promise<RouteParams> }
) {
  const params = await context.params; // ⬅️ continua igual
  const formData = await req.formData();
  return doRedirect(req, params, formData);
}