"use client";

import TrackLink from "@/components/TrackLink";
import { AtSign, BookOpen, Flower, Leaf, MessageCircle, MonitorPlay, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#1A0B1F] pt-10">
            {/* Fundo - Mais escuro e profundo para dar contraste premium */}
            <div className="absolute inset-0">
                <Image
                    src="/images/kellyane/background.JPG"
                    alt="Dra. Kellyane Folha background"
                    fill
                    priority
                    className="object-cover opacity-100 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-[#1A0B1F]/80 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A1233]/30 via-[#1A0B1F]/80 to-[#120616]" />
            </div>

            {/* Glow decorativo - Tons de champagne e rose gold sutis */}
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4B5C7]/10 blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#9B7A9B]/10 blur-[120px]" />

            {/* Conteúdo */}
            <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
                <div className="w-full max-w-[420px]">
                    {/* Card Glassmorphism Refinado */}
                    <div className="relative rounded-[32px] border border-white/10 border-t-white/20 bg-white/[0.03] px-6 pb-10 pt-20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl">

                        {/* Avatar / Logo */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative h-36 w-36 rounded-full bg-gradient-to-br from-[#E0C3D3] via-[#A8829C] to-[#4A2655] p-[2px] shadow-[0_0_40px_rgba(168,130,156,0.2)] transition-all duration-700 hover:scale-105 hover:shadow-[0_0_50px_rgba(224,195,211,0.3)]">
                                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#1A0B1F]">
                                    <Image
                                        src="/images/kellyane/icone.JPG"
                                        alt="Dra. Kellyane Folha"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Ícone de folha - Mais metálico e elegante */}
                                <div className="absolute -bottom-1 -right-1 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4A2655] to-[#2A1233] border border-[#E0C3D3]/50 shadow-xl">
                                    <Leaf className="h-5 w-5 text-[#E0C3D3]" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="text-center">
                            <h1 className="text-[26px] font-medium tracking-wide text-white/95">
                                Dra. Kellyane Folha
                            </h1>

                            {/* Instagram @ usando AtSign */}
                            <a
                                href="https://www.instagram.com/drakellyanefolha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1.5 flex items-center justify-center gap-1 text-sm font-light text-[#D4B5C7] transition-colors duration-300 hover:text-white"
                            >
                                <AtSign className="h-3.5 w-3.5" strokeWidth={1.5} />
                                <span>drakellyanefolha</span>
                            </a>

                            <p className="mt-5 text-[14px] font-light leading-relaxed text-white/60">
                                Cuidado, acolhimento e informação para a sua saúde feminina.
                            </p>
                        </div>

                        {/* Links - Estilo Minimalista e Unificado */}
                        <div className="mt-10 flex flex-col gap-3.5">

                            {/* WhatsApp */}
                            <TrackLink
                                href="https://wa.me/558681448407?text=Ol%C3%A1,%20vim%20do%20link%20da%20bio%20e%20gostaria%20de%20agendar%20uma%20consulta"
                                label="whatsapp_agendar_consulta"
                                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-500 hover:border-[#E0C3D3]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(224,195,211,0.05)]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-500 group-hover:bg-[#E0C3D3]/20 group-hover:text-[#E0C3D3]">
                                    <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                                </div>
                                <span className="text-[15px] font-light tracking-wide text-white/80 transition-colors duration-500 group-hover:text-white">
                                    Agendar consulta
                                </span>
                            </TrackLink>

                            {/* E-book */}
                            <TrackLink
                                href="https://l.instagram.com/?u=https%3A%2F%2Fchk.eduzz.com%2Fdnzgrkwj%3Ffbclid%3DPARlRTSARWuLpleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacfk6Se7ck1-3E9fXqOevUw_jKhLKWkWI5ZX5IsRVQUuqmr2Yn79FUEpGVEaA_aem_oZhDQJCdbCerjhNeLE7QFg%26utm_id%3D97760_v0_s00_e0_tv4&e=AT4CSwSDaoBFtroU1FYPUxuGZOt5A259I8si0HfM8rDmouQz4k_nbvlK7ay6kq33QZnULAbcbBCi6tFHQDKoUbMNRZZp1EFdQWYNcV2xqwcc_g9gyouLIFU4EjlDZmUi_UP6WeDAjwq6"
                                label="ebook"
                                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-500 hover:border-[#E0C3D3]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(224,195,211,0.05)]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-500 group-hover:bg-[#E0C3D3]/20 group-hover:text-[#E0C3D3]">
                                    <BookOpen className="h-5 w-5" strokeWidth={1.5} />
                                </div>
                                <span className="text-[15px] font-light tracking-wide text-white/80 transition-colors duration-500 group-hover:text-white">
                                    Baixar e-book
                                </span>
                            </TrackLink>

                            {/* Ginecologia Natural */}
                            <TrackLink
                                href="https://expert-ginecologia-natural.vercel.app/"
                                label="ginecologia_natural"
                                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-500 hover:border-[#E0C3D3]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(224,195,211,0.05)]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-500 group-hover:bg-[#E0C3D3]/20 group-hover:text-[#E0C3D3]">
                                    <Flower className="h-5 w-5" strokeWidth={1.5} />
                                </div>
                                <span className="text-[14px] leading-tight font-light tracking-wide text-white/80 transition-colors duration-500 group-hover:text-white text-left">
                                    Ginecologia Natural – do básico ao avançado
                                </span>
                            </TrackLink>

                            {/* Mentoria 3M */}
                            <TrackLink
                                href="https://kellyanefolha.com/"
                                label="mentoria_3m"
                                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-500 hover:border-[#E0C3D3]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(224,195,211,0.05)]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-500 group-hover:bg-[#E0C3D3]/20 group-hover:text-[#E0C3D3]">
                                    <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                                </div>
                                <span className="text-[14px] leading-tight font-light tracking-wide text-white/80 transition-colors duration-500 group-hover:text-white text-left">
                                    Mentoria 3M – Método, Marketing & Mentalidade
                                </span>
                            </TrackLink>

                            {/* YouTube */}
                            <TrackLink
                                href="https://www.youtube.com/@kellyanefolhasaudedamulher"
                                label="youtube"
                                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-500 hover:border-[#E0C3D3]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(224,195,211,0.05)]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-500 group-hover:bg-[#E0C3D3]/20 group-hover:text-[#E0C3D3]">
                                    <MonitorPlay className="h-5 w-5" strokeWidth={1.5} />
                                </div>
                                <span className="text-[15px] font-light tracking-wide text-white/80 transition-colors duration-500 group-hover:text-white">
                                    YouTube
                                </span>
                            </TrackLink>

                            {/* Site */}
                            {/* <TrackLink
                                href="https://seusite.com.br"
                                label="site"
                                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 transition-all duration-500 hover:border-[#E0C3D3]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(224,195,211,0.05)]"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-500 group-hover:bg-[#E0C3D3]/20 group-hover:text-[#E0C3D3]">
                                    <Globe className="h-5 w-5" strokeWidth={1.5} />
                                </div>
                                <span className="text-[15px] font-light tracking-wide text-white/80 transition-colors duration-500 group-hover:text-white">
                                    Acessar site
                                </span>
                            </TrackLink> */}

                        </div>

                        {/* Rodapé opcional */}
                        <div className="mt-12 text-center">
                            <p className="text-[10px] font-light tracking-[0.3em] text-white/30 uppercase">
                                wrmax marketing & ia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}