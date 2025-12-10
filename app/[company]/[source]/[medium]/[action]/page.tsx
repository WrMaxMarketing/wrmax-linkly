import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import CpSolarForm from "@/components/CpSolarForm";
import TmaxForm from "@/components/TmaxForm"; // ⬅️ NOVO

type PageParams = {
  company: string;
  source: string;
  medium: string;
  action: string;
};

type PageProps = {
  params: Promise<PageParams>; // ✅ aqui é Promise MESMO
};

export default async function LinkEntryPage({ params }: PageProps) {
  // ✅ A PRIMEIRA COISA: DESENBRULHAR A PROMISE
  const { company, source, medium, action } = await params;

  if (!action) {
    redirect("/"); // proteção extra
  }

  const isFormRoute = action.toLowerCase().includes("formulario");
  const redirectUrl = `/${company}/${source}/${medium}/${action}/redirect`;

  // 1. Buscar empresa
  const { data: companyData } = await supabaseAdmin
    .from("companies")
    .select("id, name")
    .eq("name", company)
    .maybeSingle();

  if (!companyData) {
    redirect("/");
  }

  // 2. Buscar link
  const { data: link } = await supabaseAdmin
    .from("links")
    .select("*")
    .eq("company_id", companyData.id)
    .eq("source", source)
    .eq("medium", medium)
    .eq("action", action)
    .maybeSingle();

  if (!link) {
    redirect("/");
  }

  // 3. Se NÃO é rota de formulário → redireciona direto
  if (!isFormRoute) {
    redirect(redirectUrl);
  }

  // 4. Se for rota de formulário → escolhe o form pela empresa
  if (companyData.name === "cp-solar") {
    return <CpSolarForm actionUrl={redirectUrl} />;
  }

  if (companyData.name === "tmax-imobiliaria") {
    return <TmaxForm actionUrl={redirectUrl} />;
  }

  // fallback caso exista link com "formulario" mas sem form implementado
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui",
        background: "#020617",
        color: "#e5e7eb",
      }}
    >
      <h1 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
        Formulário ainda não configurado para {companyData.name}
      </h1>
      <p>O link está marcado como formulário, mas ainda não tem layout definido.</p>
    </div>
  );
}