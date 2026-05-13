"use client";

import {
  Activity,
  Calendar,
  ChevronRight,
  ExternalLink,
  Globe,
  GraduationCap,
  MapPin,
  MessageCircle,
  type LucideIcon
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   INTERFACES & TYPES
───────────────────────────────────────────── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
}

interface ActionCardProps {
  href: string;
  icon: LucideIcon;
  label: string;
  sub: string;
  accent?: boolean;
  delay?: number;
}

interface CredPillProps {
  icon: LucideIcon;
  text: string;
}

/* ─────────────────────────────────────────────
   NEURAL NETWORK BACKGROUND
───────────────────────────────────────────── */
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w: number, h: number;
    const nodes: Node[] = [];
    const NODE_COUNT = 28;

    function resize() {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(32, 158, 189, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        n.pulse += 0.025;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (1 + Math.sin(n.pulse) * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(32, 158, 189, ${0.5 + Math.sin(n.pulse) * 0.2})`;
        ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: "absolute", 
        inset: 0, 
        width: "100%", 
        height: "100%", 
        pointerEvents: "none", 
        opacity: 0.6 
      }} 
    />
  );
}

/* ─────────────────────────────────────────────
   CREDENTIAL PILL
───────────────────────────────────────────── */
function CredPill({ icon: Icon, text }: CredPillProps) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: 100,
      padding: "8px 16px",
      fontSize: 11,
      color: "rgba(255,255,255,0.9)",
      fontWeight: 500,
      backdropFilter: "blur(4px)"
    }}>
      <Icon size={14} color="#209EBD" />
      {text}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ACTION CARD
───────────────────────────────────────────── */
function ActionCard({ href, icon: Icon, label, sub, accent, delay = 0 }: ActionCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        borderRadius: 20,
        padding: "16px 20px",
        background: hovered ? "rgba(32,158,189,0.12)" : "rgba(255,255,255,0.04)",
        border: hovered ? "1px solid rgba(32,158,189,0.5)" : "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-2px) scale(1.01)" : "none",
        animation: `slideUp 0.6s ${delay}s both cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 14,
          background: accent ? "linear-gradient(135deg, #209EBD, #073149)" : "rgba(32,158,189,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
        }}>
          <Icon size={20} color={accent ? "#fff" : "#209EBD"} />
        </div>
        <div>
          <p style={{ color: accent ? "#fff" : "#fff", fontWeight: 700, fontSize: 13, textTransform: "uppercase", margin: 0 }}>{label}</p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: 2 }}>{sub}</p>
        </div>
      </div>
      <ChevronRight size={18} color={hovered ? "#209EBD" : "rgba(255,255,255,0.25)"} />
    </a>
  );
}

/* ─────────────────────────────────────────────
   PÁGINA PRINCIPAL
───────────────────────────────────────────── */
export default function DrRomiltonPage() {
  const actions: ActionCardProps[] = [
    {
      href: "https://wa.me/5586999999999",
      icon: Calendar,
      label: "Agendar Consulta",
      sub: "Consultas • Teresina - PI",
      accent: true,
      delay: 0.35,
    },
    {
      href: "https://wa.me/5586999999999",
      icon: MessageCircle,
      label: "WhatsApp",
      sub: "Fale diretamente com a equipe",
      accent: true,
      delay: 0.45,
    },
    {
      href: "https://www.linkedin.com/in/romilton-pacheco",
      icon: Globe,
      label: "SITE - CLÍNICA NEUROPLENO",
      sub: "Referência Nacional em Neurologia e Neurocirurgia",
      accent: true,
      delay: 0.55,
    }
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#073149",
      position: "relative",
      overflowX: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        * { box-sizing: border-box; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <NeuralCanvas />

      {/* HEADER IMAGE SECTION - AJUSTADO PARA SUBIR TEXTO E GRADIENTE */}
      <div style={{
        position: "relative", 
        width: "100%", 
        height: "40vh", // Diminuído de 45vh para subir o conteúdo
        minHeight: "340px",
        backgroundImage: "url('/images/romiltopacheco/profile.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center 15%", // Ajustado para focar mais no rosto ao subir
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-end",
        animation: "fadeIn 1.2s ease-out"
      }}>
        {/* Overlay - Gradiente iniciando mais alto para reduzir espaço da foto */}
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(to bottom, transparent 20%, #073149 95%)" // Começa gradiente aos 20% em vez de 40%
        }} />
        
        {/* Texto do Header - Com padding horizontal e espaçamento entre letras reduzido */}
        <div style={{ 
            position: "relative", 
            zIndex: 2, 
            textAlign: "center", 
            paddingBottom: "15px", 
            paddingLeft: "20px", // Padding horizontal
            paddingRight: "20px", // Padding horizontal
            animation: "slideUp 0.8s ease" 
        }}>
          <h1 style={{ 
              fontSize: "clamp(22px, 6.5vw, 28px)", 
              fontWeight: 800, 
              color: "#fff", 
              textTransform: "uppercase", 
              margin: "0 0 4px", 
              letterSpacing: "0.01em" // Espaçamento entre letras menor
          }}>
            Dr. Romilton Pacheco
          </h1>
          <p style={{ 
              fontSize: "clamp(11px, 3.8vw, 13px)", 
              fontWeight: 700, 
              color: "#fff", 
              textTransform: "uppercase", 
              opacity: 0.9, 
              letterSpacing: "0.02em" // Espaçamento entre letras menor
          }}>
            Neurocirurgião · Neurorradiologista
          </p>
        </div>
      </div>

      <div style={{ 
        position: "relative", 
        zIndex: 10, 
        maxWidth: 440, 
        margin: "-5px auto 0", // Subiu um pouco mais em relação ao header
        padding: "0 20px 48px", 
        display: "flex", 
        flexDirection: "column", 
        gap: 20 // Gap levemente reduzido para compactar o layout
      }}>
        
        <div style={{ display: "flex", justifyContent: "center", gap: 10, animation: "slideUp 0.8s 0.2s both" }}>
          <CredPill icon={GraduationCap} text="USP — São Paulo" />
          <CredPill icon={Activity} text="Preceptor HGV" />
        </div>

        <div style={{
          background: "rgba(255,255,255,0.03)", 
          border: "1px solid rgba(255,255,255,0.1)", 
          borderRadius: 32,
          padding: "16px 24px", // Padding levemente reduzido
          backdropFilter: "blur(20px)", 
          animation: "slideUp 0.8s 0.3s both"
        }}>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
            Especialista formado pela <strong style={{ color: "#fff" }}>USP</strong>. Preceptor da Residência Médica no <strong style={{ color: "#fff" }}>HGV</strong>. Atendimento focado em excelência diagnóstica e cirúrgica do sistema nervoso.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {actions.map((a, idx) => (
            <ActionCard key={idx} {...a} />
          ))}
        </div>

        {/* MAP SECTION */}
        <div style={{ animation: "slideUp 0.8s 0.7s both cubic-bezier(0.22,1,0.36,1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, paddingLeft: 4 }}>
            <MapPin size={13} color="#209EBD" />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
              Endereço Clínico
            </span>
          </div>
          <div style={{ borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 48px rgba(0,0,0,0.3)" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: 13, margin: 0 }}>Clínica Neuropleno</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, margin: "3px 0 0", fontWeight: 300 }}>R. Gov. Joca Píres, 2020 — Teresina, PI</p>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=R.+Gov.+Joca+Pires+2020+Teresina+PI" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} color="rgba(255, 255, 255, 0.7)" style={{ flexShrink: 0 }} />
              </a>
            </div>
            
            <div style={{ height: 180, filter: "saturate(0.4) brightness(0.7) hue-rotate(180deg)", transition: "filter 0.6s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "saturate(0.9) brightness(0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "saturate(0.4) brightness(0.7) hue-rotate(180deg)")}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4093.2686219025163!2d-42.7921419!3d-5.063476800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3900166e35df%3A0xdf1f22a8adfe7098!2sCl%C3%ADnica%20Neuropleno%20%7C%20Neurologia!5e1!3m2!1spt-BR!2sbr!4v1778677236878!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Clínica Neuropleno"
              />
            </div>
          </div>
        </div>
 
        {/* FOOTER */}
        <footer style={{ textAlign: "center", paddingTop: 8, animation: "fadeIn 1s 0.9s both" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 4px" }}>
            Dr. Romilton Pacheco © 2026
          </p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
            Powered by WRMAX Marketing & IA
          </p>
        </footer>
      </div>
    </main>
  );
}