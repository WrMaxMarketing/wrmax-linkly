// components/TmaxForm.tsx

type TmaxFormProps = {
  actionUrl: string; // URL para onde vai o POST (…/redirect)
};

export default function TmaxForm({ actionUrl }: TmaxFormProps) {
  const bgGradient =
    "radial-gradient(circle at top left, #f4ede1 0%, #ffffff 40%, #f9fafb 100%)";
  const gold = "#D1A24A"; // dourado aproximado do logo
  const dark = "#111827";

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundImage: bgGradient,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          borderRadius: 28,
          background: "#ffffff",
          boxShadow: "0 18px 50px rgba(15,23,42,0.22)",
          padding: "2rem 2.2rem 1.8rem",
          position: "relative",
          border: "1px solid rgba(209,162,74,0.35)",
        }}
      >
        {/* Badge superior */}
        <div
          style={{
            position: "absolute",
            top: -14,
            left: 24,
            backgroundColor: "#0f172a",
            color: "#f9fafb",
            padding: "0.25rem 0.85rem",
            borderRadius: 999,
            fontSize: "0.7rem",
            letterSpacing: 0.6,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "999px",
              backgroundColor: gold,
            }}
          />
          TMAX Imobiliária • Atendimento
        </div>

        {/* Título / texto principal */}
        <header style={{ marginBottom: "1.7rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: gold,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: "0.3rem",
            }}
          >
            Antes de te chamar no WhatsApp
          </p>
          <h1
            style={{
              fontSize: "1.35rem",
              lineHeight: 1.3,
              fontWeight: 700,
              color: dark,
              marginBottom: "0.5rem",
            }}
          >
            Conta pra gente qual é o imóvel ideal pra você.
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#4b5563",
            }}
          >
            Preencha rapidinho seus dados e suas preferências. A equipe TMAX
            analisa e te chama no WhatsApp com as melhores opções.
          </p>
        </header>

        {/* Formulário */}
        <form method="POST" action={actionUrl}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {/* Nome */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 4,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                Nome completo
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Seu nome"
                style={{
                  width: "100%",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#111827",
                }}
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 4,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(86) 9 9521-0900"
                style={{
                  width: "100%",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#111827",
                }}
              />
            </div>

            {/* Tipo de imóvel */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 4,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                Que tipo de imóvel você procura?
              </label>
              <input
                type="text"
                name="imovel_interesse"
                required
                placeholder="Casa, apartamento, terreno, sala comercial..."
                style={{
                  width: "100%",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#111827",
                }}
              />
            </div>

            {/* Bairros */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 4,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                Bairros de interesse
              </label>
              <input
                type="text"
                name="bairros"
                placeholder="Ex: Horto, Zoobotânico, Noivos..."
                style={{
                  width: "100%",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#111827",
                }}
              />
            </div>

            {/* Faixa de valor */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 4,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                Faixa de valor para investir (R$)
              </label>
              <input
                type="text"
                name="faixa_preco"
                placeholder="Ex: até 400.000"
                style={{
                  width: "100%",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#111827",
                }}
              />
              <p
                style={{
                  marginTop: 4,
                  fontSize: "0.75rem",
                  color: "#6b7280",
                }}
              >
                Não precisa ser exato, pode ser uma faixa aproximada para a gente
                entender seu perfil.
              </p>
            </div>
          </div>

          {/* Botão */}
          <button
            type="submit"
            style={{
              marginTop: "1.3rem",
              width: "100%",
              padding: "0.85rem",
              borderRadius: 999,
              border: "none",
              background:
                "linear-gradient(90deg, #D1A24A 0%, #F0C976 50%, #D1A24A 100%)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.98rem",
              cursor: "pointer",
              boxShadow: "0 10px 24px rgba(209,162,74,0.45)",
            }}
          >
            Enviar e falar com a TMAX
          </button>

          {/* Rodapé */}
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.76rem",
              color: "#6b7280",
              textAlign: "center",
            }}
          >
            Seus dados serão usados apenas para contato sobre imóveis da TMAX
            Imobiliária. Nada de spam. 🏡
          </p>
        </form>
      </div>
    </div>
  );
}
