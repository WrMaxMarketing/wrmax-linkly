"use client";

import TrackLink from "@/components/TrackLink";
import { BookOpen, Globe, Leaf, MessageCircle, MonitorPlay } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#2A1233]">
      {/* Fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/kellyane/background.jpg"
          alt="Dra. Kellyane Folha background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#2A1233]/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1233]/40 via-[#2A1233]/70 to-[#2A1233]" />
      </div>

      {/* Glow decorativo */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#B57AC8]/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#8D4AA8]/20 blur-[100px]" />

      {/* Conteúdo */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-[420px]">
          <div className="relative rounded-[32px] border border-white/10 bg-white/5 px-6 pb-10 pt-20 shadow-2xl backdrop-blur-xl">
            
            {/* Avatar / Logo */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-36 w-36 rounded-full bg-gradient-to-br from-[#C68BDA] via-[#9B59B6] to-[#5B2C6F] p-1 shadow-[0_0_30px_rgba(155,89,182,0.3)] transition-transform duration-500 hover:scale-105">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#2A1233]">
                  <Image
                    src="/images/kellyane/icon.jpg"
                    alt="Dra. Kellyane Folha"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Ícone de folha decorativa */}
                <div className="absolute -bottom-1 -right-1 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#C68BDA] to-[#7E3A96] border-[3px] border-[#3a1d45] shadow-lg">
                  <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="text-center">
              <h1 className="text-[28px] font-bold tracking-tight text-white">
                Dra. Kellyane Folha
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                Cuidado, acolhimento e informação para a sua saúde feminina.
              </p>
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-col gap-4">
              
              {/* WhatsApp */}
              <TrackLink
                href="https://wa.me/5586SEUNUMEROAQUI"
                label="whatsapp_agendar_consulta"
                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 pr-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(181,122,200,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="text-base font-medium text-white/90 transition-colors group-hover:text-white">
                  Agendar consulta
                </span>
              </TrackLink>

              {/* E-book */}
              <TrackLink
                href="https://seulinkdoebook.com"
                label="ebook"
                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 pr-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(181,122,200,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B86AD0]/20 text-[#B86AD0] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#B86AD0] group-hover:text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-base font-medium text-white/90 transition-colors group-hover:text-white">
                  Baixar e-book
                </span>
              </TrackLink>

              {/* YouTube (Corrigido para MonitorPlay) */}
              <TrackLink
                href="https://youtube.com/@SEUCANAL"
                label="youtube"
                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 pr-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(181,122,200,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF0000]/20 text-[#FF0000] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:text-white">
                  <MonitorPlay className="h-6 w-6" />
                </div>
                <span className="text-base font-medium text-white/90 transition-colors group-hover:text-white">
                  YouTube
                </span>
              </TrackLink>

              {/* Site */}
              <TrackLink
                href="https://seusite.com.br"
                label="site"
                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 pr-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(181,122,200,0.15)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <Globe className="h-6 w-6" />
                </div>
                <span className="text-base font-medium text-white/90 transition-colors group-hover:text-white">
                  Acessar site
                </span>
              </TrackLink>

            </div>

            {/* Rodapé opcional */}
            <div className="mt-10 text-center">
              <p className="text-[11px] font-medium tracking-[0.25em] text-white/40 uppercase">
                wrmax marketing & ia
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}