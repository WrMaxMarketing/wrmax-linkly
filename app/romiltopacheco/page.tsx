"use client";

import {
  Loader2,
  Lock,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { useEffect, useState } from "react";

export default function StandardRedirectPage() {
  const TOTAL_SECONDS = 5;
  const WHATSAPP_URL = "https://wa.me/558698439969?text=Ol%C3%A1,%20vim%20da%20bio%20do%20instagram%20e%20gostaria%20de%20marcar%20uma%20consulta%20com%20o%20Dr.%20Romilto";
  
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    // Atualiza o cronômetro visual
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Executa o redirecionamento
    const redirectTimeout = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, TOTAL_SECONDS * 1000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(redirectTimeout);
    };
  }, []);

  const progressPercentage = ((TOTAL_SECONDS - timeLeft) / TOTAL_SECONDS) * 100;

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#f4f7f9", // Fundo claro e neutro padrão
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <style>{`
        * { box-sizing: border-box; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>

      {/* CAIXA CENTRAL DE REDIRECIONAMENTO */}
      <div style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "40px 32px",
        width: "100%",
        maxWidth: "440px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        border: "1px solid #eaeaea"
      }}>
        
        {/* ÍCONE DO WHATSAPP */}
        <div style={{
          width: "64px",
          height: "64px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          animation: "pulse 2s infinite ease-in-out",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)"
        }}>
          <MessageCircle size={32} color="#ffffff" fill="#ffffff" />
        </div>

        <h1 style={{ color: "#111827", fontSize: "20px", fontWeight: "700", margin: "0 0 12px" }}>
          Redirecionando para o WhatsApp...
        </h1>
        
        <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "1.5", margin: "0 0 32px" }}>
          Você está sendo conectado ao atendimento seguro do <strong>Dr. Romilto Pacheco</strong>.
        </p>

        {/* ÁREA DE PROGRESSO */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6B7280", fontSize: "14px" }}>
              <Loader2 size={16} style={{ animation: "spin 1.5s linear infinite" }} />
              <span>Aguarde um momento</span>
            </div>
            <span style={{ color: "#111827", fontWeight: "600", fontSize: "14px" }}>
              {timeLeft}s
            </span>
          </div>

          {/* BARRA DE PROGRESSO */}
          <div style={{ width: "100%", height: "8px", backgroundColor: "#E5E7EB", borderRadius: "999px", overflow: "hidden" }}>
            <div style={{ 
              height: "100%", 
              width: `${progressPercentage}%`, 
              backgroundColor: "#25D366", 
              borderRadius: "999px",
              transition: "width 1s linear" 
            }} />
          </div>
        </div>

        {/* BOTÃO DE PULAR ESPERA */}
        {/* <a 
          href={WHATSAPP_URL}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "14px",
            backgroundColor: "#F3F4F6",
            color: "#374151",
            textDecoration: "none",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "15px",
            transition: "background-color 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#E5E7EB"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#F3F4F6"}
        >
          Ir imediatamente
          <ExternalLink size={18} color="#6B7280" />
        </a> */}

        {/* MENSAGEM DE SEGURANÇA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "24px", color: "#16A34A" }}>
          <ShieldCheck size={16} />
          <span style={{ fontSize: "13px", fontWeight: "500" }}>
            Ambiente 100% Seguro e Criptografado
          </span>
        </div>
      </div>

      {/* RODAPÉ E WRMAX */}
      <div style={{ marginTop: "32px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", marginBottom: "8px", color: "#9CA3AF" }}>
          <Lock size={12} />
          <span style={{ fontSize: "12px" }}>Conexão protegida de ponta a ponta</span>
        </div>
        
        <a 
          href="https://www.instagram.com/wrmaxmarketing" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "#6B7280",
            fontSize: "12px",
            transition: "color 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#374151"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#6B7280"}
        >
          Desenvolvido por <strong style={{ color: "#073149", fontWeight: "700" }}>WRMAX Marketing</strong>
        </a>
      </div>
    </main>
  );
}