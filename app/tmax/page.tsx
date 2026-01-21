"use client";
// NÃO TRACKEADO NO GA4 E GTM

import TrackLink from "@/components/TrackLink";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tmax/background.png"
          alt="TMAX Imobiliária"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-10 pt-30 mb-50">
        <div className="relative w-full max-w-[420px]">
          {/* Card Principal */}
          <div className="relative rounded-[34px] bg-white/90 px-6 pb-8 pt-20 shadow-2xl backdrop-blur-sm">
            {/* Logo TMAX (meio fora do card) */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div
                className="flex h-[170px] w-[170px] items-center justify-center rounded-full shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #38312a 0%, #0f0f0f 100%)",
                }}
              >
                <Image
                  src="/images/tmax/tmax-icon.png"
                  alt="Logo TMAX"
                  width={130}
                  height={130}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Texto */}
            <p
              className="mt-2 text-center text-[20px] font-semibold leading-snug"
              style={{ color: "#292929" }}
            >
              Encontre seu próximo <br />
              imóvel com <span className="font-extrabold">segurança</span> <br />
              e <span className="font-extrabold">praticidade</span>.
            </p>

            {/* Botões */}
            <div className="mt-7 space-y-4">
              {/* WhatsApp */}
              <TrackLink
                href="https://wa.me/558695642883?text=Ol%C3%A1,%20vim%20da%20bio%20do%20instagram%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20dispon%C3%ADveis"
                label="contato"
                className="flex w-full items-center gap-4 rounded-full bg-[#d4a657] px-6 py-4 transition-all hover:brightness-110"
              >
                <>
                  <Image
                    src="/images/tmax/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  <span
                    className="text-[18px] font-semibold"
                    style={{ color: "#292929" }}
                  >
                    Contato TMAX Imobiliária
                  </span>
                </>
              </TrackLink>

              {/* Site */}
              <TrackLink
                href="https://www.tmaximobiliaria.com.br/"
                label="site"
                className="flex w-full items-center gap-4 rounded-full bg-[#d4a657] px-6 py-4 transition-all hover:brightness-110"
              >
                <>
                  <Image
                    src="/images/tmax/site-icon.png"
                    alt="Site"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  <span
                    className="text-[18px] font-semibold"
                    style={{ color: "#292929" }}
                  >
                    Site TMAX Imobiliária
                  </span>
                </>
              </TrackLink>

              {/* Localização */}
              <TrackLink
                href="https://share.google/FCieLQkBRC7AZlbT6"
                label="localizacao"
                className="flex w-full items-start gap-4 rounded-[26px] bg-[#d4a657] px-6 py-4 transition-all hover:brightness-110"
              >
                <>
                  <Image
                    src="/images/tmax/local-icon.png"
                    alt="Localização"
                    width={30}
                    height={30}
                    className="mt-0.5 h-8 w-8"
                  />
                  <div className="text-left">
                    <p
                      className="text-[16px] font-extrabold leading-tight"
                      style={{ color: "#292929" }}
                    >
                      Localização
                    </p>
                    <p
                      className="mt-1 text-[13px] font-medium leading-tight"
                      style={{ color: "#292929" }}
                    >
                      Torre Office – Av. Universitária, 750 <br />
                      16º Andar, Sala 1610 – Fátima
                    </p>
                  </div>
                </>
              </TrackLink>
            </div>

            {/* WRMAX */}
            <div className="mt-5 flex justify-center mb-[-20]">
              <TrackLink
                href="https://www.instagram.com/wrmaxmarketing/"
                label="insta_wrmaxmarketing"
              >
                <Image
                  src="/images/tmax/wrmax-icon.png"
                  alt="WRMAX Marketing"
                  width={160}
                  height={60}
                  className="opacity-90 transition-opacity hover:opacity-100"
                />
              </TrackLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}