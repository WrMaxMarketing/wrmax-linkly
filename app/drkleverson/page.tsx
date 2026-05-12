"use client";

import TrackLink from "@/components/TrackLink";
import { motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  ChevronRight,
  Landmark,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";

const links = [
  {
    label: "whatsapp_contato",
    text: "Atendimento Especializado",
    subtitle: "Fale diretamente no WhatsApp",
    icon: <MessageCircle className="w-5 h-5 text-[#011C3A]" />,
    href: "https://wa.me/5589981372577?text=Ol%C3%A1,%20vim%20do%20link%20da%20bio%20do%20instagram%20do%20Dr.%20Kl%C3%A9verson%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es", // Substituir pelo número real
    isPrimary: true,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DrKleversonPage() {
  return (
    <main className="min-h-screen bg-[#011C3A] text-white relative overflow-hidden font-sans">

      {/* Background Refinado (Inspirado na estética da Dra. Ana Martins) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start px-5 py-16 min-h-screen max-w-md mx-auto">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-8"
        >
          {/* Perfil e Identidade */}
          <div className="text-center space-y-4">
            <motion.div variants={itemVariants} className="relative inline-block">
              <div className="w-32 h-32 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden relative border border-white/40">
                  <Image
                    src="/images/drkleverson/perfil.jpg" // Ajustar caminho
                    alt="Dr. Kleverson Folha Gois"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-xl">
                <BadgeCheck className="w-5 h-5 text-[#ffff]" fill="#268bff" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl font-serif font-semibold tracking-wide">
                Dr. Kléverson <br /> Folha Gois
              </h1>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Scale className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  Advogado Agrarista
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bio / Diferenciais (Estilo Card Clean) */}
          <motion.div
            variants={itemVariants}
            className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-[32px] p-6 space-y-5 shadow-2xl"
          >
            <div className="space-y-4 text-[13px] font-light text-white/90">
              {/* Item 1 */}
              <div className="flex items-start gap-3 leading-tight">
                <ShieldCheck className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <p>Especialista em Regularização Fundiária e Imobiliária</p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 leading-tight">
                <Landmark className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <p>Membro Consultor da Assoc. dos Agraristas do Piauí</p>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 text-white/50 text-[10px] uppercase tracking-wider leading-none pt-1">
                <MapPin className="w-3 h-3 shrink-0" />
                <span>Bom Jesus - PI | Atendimento Nacional</span>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
              <div className="text-center">
                <p className="text-lg font-serif font-bold italic leading-none">Rural</p>
                <p className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Especialidade</p>
              </div>
              <div className="w-px h-8 bg-white/10 self-center" />
              <div className="text-center">
                <p className="text-lg font-serif font-bold italic leading-none">Urbano</p>
                <p className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Regularização</p>
              </div>
            </div>
          </motion.div>

          {/* Links de Contato */}
          <div className="space-y-3">
            {links.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <TrackLink
                  href={link.href}
                  label={link.label}
                  className="group relative flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#011C3A]/10 flex items-center justify-center">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-[#011C3A] font-bold text-sm uppercase tracking-tight">{link.text}</p>
                      <p className="text-[#011C3A]/60 text-xs">{link.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#011C3A]/30 group-hover:text-[#011C3A] transition-colors" />
                </TrackLink>
              </motion.div>
            ))}
          </div>

          {/* Localização Card (Inspirado no design refinado) */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 px-2">
              <MapPin className="w-4 h-4 text-white/60" />
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">Endereço Profissional</span>
            </div>
            <div className="rounded-[32px] overflow-hidden  shadow-2xl">
              <div className="p-4 bg-white">
                <p className="text-[#011C3A] text-xs font-medium leading-relaxed">
                  Ed. THEMIS - R. Cel. Ferreira, 269 <br />
                  Centro, Bom Jesus - PI, 64900-000
                </p>
              </div>
              <div className="h-48 w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.914827455005!2d-44.357379699999996!3d-9.0708378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77c4d2f1b96e0a9%3A0xfdf3c30ed3435cf7!2sKL%C3%89VERSON%20FOLHA%20GOIS%20ADVOGADOS!5e1!3m2!1spt-BR!2sbr!4v1778608634515!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="pt-8 pb-4 text-center">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">
              Dr. Kléverson Folha Gois © 2026
            </p>
            <br />
            <p className="text-[10px] text-white/40 uppercase tracking-[0.1em]">
              Powered By WRMAX MARKETING & IA
            </p>
          </motion.footer>

        </motion.div>
      </div>
    </main>
  );
}