// components/CpSolarForm.tsx

type CpSolarFormProps = {
  actionUrl: string; // URL para onde vai o POST (…/redirect)
};

export default function CpSolarForm({ actionUrl }: CpSolarFormProps) {
  const blueBg =
    "linear-gradient(145deg, #0055A4 0%, #0091D5 50%, #00B9F1 100%)";
  const orange = "#FF7A00";
  const darkText = "#1f2933";

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
        backgroundImage: blueBg,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 440,
          borderRadius: 28,
          background: "#ffffff",
          boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          padding: "2rem 2.2rem 1.8rem",
          position: "relative",
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
            padding: "0.25rem 0.8rem",
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
              backgroundColor: orange,
            }}
          />
          CP Solar • Simulação de economia
        </div>

        {/* Título / texto principal */}
        <header style={{ marginBottom: "1.7rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: orange,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: "0.3rem",
            }}
          >
            Quer elevar o nível do seu negócio?
          </p>
          <h1
            style={{
              fontSize: "1.35rem",
              lineHeight: 1.3,
              fontWeight: 700,
              color: darkText,
              marginBottom: "0.5rem",
            }}
          >
            Descubra quanto você pode economizar na sua conta de luz.
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#4b5563",
            }}
          >
            Preencha seus dados e o consumo médio de energia. Nossa equipe faz a
            simulação e te chama no WhatsApp com um orçamento personalizado.
          </p>
        </header>

        {/* Formulário */}
        <form method="POST" action={actionUrl}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
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
                placeholder="(86) 9 8888-7777"
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
                Consumo médio de energia (kWh/mês)
              </label>
              <input
                type="number"
                name="energy_kwh"
                min={0}
                required
                placeholder="Ex: 450"
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
                Pode olhar na sua última conta de energia. Se tiver dúvida, chute
                um valor aproximado.
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
                "linear-gradient(90deg, #FF8A00 0%, #FF6A00 50%, #FF8A00 100%)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.98rem",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(249,115,22,0.45)",
            }}
          >
            Enviar e falar com a CP Solar
          </button>

          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.76rem",
              color: "#6b7280",
              textAlign: "center",
            }}
          >
            Seus dados serão usados apenas para contato sobre o orçamento em
            energia solar. Nada de spam. ☀️
          </p>
        </form>
      </div>
    </div>
  );
}