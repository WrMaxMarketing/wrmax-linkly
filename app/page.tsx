// app/page.tsx
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type LinkRow = {
  id: number;
  label: string | null;
  source: string | null;
  medium: string | null;
  action: string | null;
  clicks_total: number | null;
  has_form: boolean | null;
};

type CompanyRow = {
  id: number;
  name: string;
  links: LinkRow[];
};

export default async function DashboardPage() {
  // 1) Buscar empresas + seus links
  const { data: companiesData, error: companiesError } =
    await supabaseAdmin
      .from("companies")
      .select(
        `
        id,
        name,
        links (
          id,
          label,
          source,
          medium,
          action,
          clicks_total,
          has_form
        )
      `
      )
      .order("name");

  if (companiesError || !companiesData) {
    console.error(companiesError);
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          color: "#e5e7eb",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <p>Erro ao carregar dados. Verifique o Supabase.</p>
      </main>
    );
  }

  const companies = companiesData as CompanyRow[];

  // 2) Buscar todas as submissões de formulário e contar por empresa
  const { data: formsData, error: formsError } = await supabaseAdmin
    .from("form_submissions")
    .select("company_id");

  const formsCountByCompany = new Map<number, number>();
  if (!formsError && formsData) {
    for (const row of formsData as { company_id: number }[]) {
      formsCountByCompany.set(
        row.company_id,
        (formsCountByCompany.get(row.company_id) ?? 0) + 1
      );
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2.5rem 1.5rem 3rem",
        background:
          "radial-gradient(circle at top, #0f172a 0, #020617 45%, #020617 100%)",
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
        }}
      >
        {/* Cabeçalho */}
        <header
          style={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "0.2rem 0.7rem",
              borderRadius: 999,
              backgroundColor: "rgba(15,23,42,0.7)",
              fontSize: "0.75rem",
              letterSpacing: 0.6,
              textTransform: "uppercase",
              color: "#38bdf8",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "999px",
                backgroundColor: "#22c55e",
              }}
            />
            Wrmax Linkly • Visão geral
          </span>

          <div>
            <h1
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "0.25rem",
              }}
            >
              Performance dos links por empresa
            </h1>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
                maxWidth: 520,
              }}
            >
              Veja os cliques de cada link e quantos formulários foram
              preenchidos em cada empresa. Use esses dados para otimizar suas
              campanhas.
            </p>
          </div>
        </header>

        {/* Grid de cards por empresa */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {companies.map((company) => {
            const totalForms = formsCountByCompany.get(company.id) ?? 0;

            // Ordena links por source/medium pra ficar organizado
            const linksOrdered = [...(company.links ?? [])].sort((a, b) => {
              const keyA = `${a.source ?? ""}-${a.medium ?? ""}-${a.action ?? ""}`;
              const keyB = `${b.source ?? ""}-${b.medium ?? ""}-${b.action ?? ""}`;
              return keyA.localeCompare(keyB);
            });

            return (
              <article
                key={company.id}
                style={{
                  borderRadius: 18,
                  padding: "1.4rem 1.5rem 1.2rem",
                  background:
                    "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.88))",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                  border: "1px solid rgba(148,163,184,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {/* Cabeçalho da empresa */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.4rem",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      {company.name.replace(/-/g, " ")}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#9ca3af",
                      }}
                    >
                      {linksOrdered.length} link
                      {linksOrdered.length === 1 ? "" : "s"} monitorado
                      {linksOrdered.length === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "0.35rem 0.7rem",
                      borderRadius: 999,
                      backgroundColor: "rgba(56,189,248,0.15)",
                      fontSize: "0.75rem",
                      color: "#7dd3fc",
                    }}
                  >
                    Formulários:{" "}
                    <span style={{ fontWeight: 600 }}>{totalForms}</span>
                  </div>
                </div>

                {/* Lista de links */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.55rem",
                  }}
                >
                  {linksOrdered.map((link) => {
                    const sourceLabel =
                      link.source === "insta"
                        ? "Instagram"
                        : link.source === "facebook"
                        ? "Facebook"
                        : link.source ?? "Outro";

                    const mediumLabel =
                      link.medium === "stories"
                        ? "Stories"
                        : link.medium === "bio"
                        ? "Bio"
                        : link.medium ?? "";

                    const isForm =
                      link.has_form ||
                      (link.action ?? "").toLowerCase().includes("formulario");

                    return (
                      <div
                        key={link.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.55rem 0.7rem",
                          borderRadius: 12,
                          backgroundColor: "rgba(15,23,42,0.9)",
                          border: "1px solid rgba(51,65,85,0.8)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.88rem",
                              fontWeight: 500,
                            }}
                          >
                            {link.label || `${sourceLabel} – ${mediumLabel}`}
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "#9ca3af",
                            }}
                          >
                            {sourceLabel}
                            {mediumLabel && ` • ${mediumLabel}`}
                            {isForm && " • Formulário"}
                          </span>
                        </div>

                        <div
                          style={{
                            textAlign: "right",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              color: "#f97316",
                            }}
                          >
                            {(link.clicks_total ?? 0).toLocaleString("pt-BR")}{" "}
                            cliques
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {linksOrdered.length === 0 && (
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#64748b",
                        fontStyle: "italic",
                      }}
                    >
                      Nenhum link cadastrado ainda para esta empresa.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}