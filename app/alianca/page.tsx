"use client";

import TrackLink from "@/components/TrackLink";
import MetaPixel from "@/components/MetaPixel";
import Image from "next/image";
import Script from "next/script";

export default function HomePage() {

  return (
    <>
      <MetaPixel pixelId="1061220366201984" />
      <Script id="leaper-script" strategy="afterInteractive">
        {`
      (function(window, document, script) {
        if (!window.lp) {
            window.lp = window.lp || {};

            var c = document.getElementsByTagName('head')[0];
            var k = document.createElement('script');
            k.async = 1;
            k.src = script;
            c.appendChild(k);
        }

        window.lp.accountCode = 'WIR1761952657';

      })(window, document, 'https://leaper.nyc3.cdn.digitaloceanspaces.com/leapertk-1.0.js');
    `}
      </Script>
      <main className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* BACKGROUND PURO (SEM OVERLAY) */}
        <Image
          src="/images/alianca/background.png"
          alt="Aliança Auto Centro"
          fill
          className="object-cover"
          priority
        />

        {/* CONTEÚDO */}
        <div className="relative z-10 flex flex-col items-center px-6">
          {/* Espaço para aparecer o logo azul do background */}
          <div className="h-[230px]" />


          {/* TEXTO */}
          <p className="max-w-[360px] text-center text-white text-[16px] leading-relaxed">
            <span className="bg-[#EED93E] text-black px-2 py-1 rounded-md font-semibold">
              Há mais de 14 anos
            </span>{" "}
            cuidando do seu carro com confiança. Mecânica automotiva completa,{" "}
            <span className="bg-[#EED93E] text-black px-2 py-1 rounded-md font-semibold">
              qualidade e transparência.
            </span>
          </p>

          {/* LINHA DIVISÓRIA COM GRADIENTE */}
          <div className="w-full max-w-[320px] h-px my-8 bg-gradient-to-r from-[#EED93E]/45 to-[#EED93E]/0" />

          {/* BOTÕES */}
          <div className="w-full max-w-[380px] flex flex-col gap-4">
            {/* WhatsApp Teresina */}
            <TrackLink
              href="https://weare.leaper.com.br/flow/IGR1770731665"
              label="whatsapp-teresina"
              className="
              flex items-center gap-4
              rounded-[70px]
              px-6 py-4
              bg-gradient-to-r
              from-[#EED93E]/45 via-[#EED93E]/25 to-[#EED93E]/0
              border border-[#EED93E]/35
              shadow-[0_8px_18px_rgba(0,0,0,0.25)]
              active:scale-[0.99] transition
            "
            >
              <Image
                src="/images/alianca/whatsapp-icon.png"
                alt="WhatsApp"
                width={40}
                height={40}
                className="w-9 h-9"
              />
              <div className="leading-tight">
                <p className="text-white text-[15px]">Whatsapp de</p>
                <p className="text-white text-[17px] font-semibold">
                  Atendimento Teresina
                </p>
              </div>
            </TrackLink>

            {/* WhatsApp Timon */}
            <TrackLink
              href="https://weare.leaper.com.br/flow/MFH1770731404"
              label="whatsapp-timon"
              className="
              flex items-center gap-4
              rounded-[70px]
              px-6 py-4
              bg-gradient-to-r
              from-[#EED93E]/45 via-[#EED93E]/25 to-[#EED93E]/0
              border border-[#EED93E]/35
              shadow-[0_8px_18px_rgba(0,0,0,0.25)]
              active:scale-[0.99] transition
            "
            >
              <Image
                src="/images/alianca/whatsapp-icon.png"
                alt="WhatsApp"
                width={40}
                height={40}
                className="w-9 h-9"
              />
              <div className="leading-tight">
                <p className="text-white text-[15px]">Whatsapp de</p>
                <p className="text-white text-[17px] font-semibold">
                  Atendimento Timon
                </p>
              </div>
            </TrackLink>

            {/* Localização Teresina */}
            <TrackLink
              href="https://maps.app.goo.gl/EdQ93HusjAsSmi1f8"
              label="localizacao-teresina"
              className="
              flex items-center gap-4
              rounded-[70px]
              px-6 py-4
              bg-gradient-to-r
              from-[#022f77]/45 via-[#022f77]/25 to-[#022f77]/0
              border border-[#022f77]/40
              shadow-[0_8px_18px_rgba(0,0,0,0.25)]
              active:scale-[0.99] transition
            "
            >
              <Image
                src="/images/alianca/localizacao-icon.png"
                alt="Localização"
                width={48}
                height={48}
                className="w-11 h-11"
              />
              <div className="leading-tight">
                <p className="text-white text-[15px] font-semibold">
                  Localização Teresina
                </p>
                <p className="text-white/90 text-[13px]">
                  Av. Miguel Rosa, 6305 - Macaúba
                </p>
                <p className="text-white/90 text-[13px]">
                  Teresina - PI, 64016-010
                </p>
              </div>
            </TrackLink>

            {/* Localização Timon */}
            <TrackLink
              href="https://maps.app.goo.gl/3Yd9cPd1xWqR4fJz8"
              label="localizacao-timon"
              className="
              flex items-center gap-4
              rounded-[70px]
              px-6 py-4
              bg-gradient-to-r
              from-[#022f77]/45 via-[#022f77]/25 to-[#022f77]/0
              border border-[#022f77]/40
              shadow-[0_8px_18px_rgba(0,0,0,0.25)]
              active:scale-[0.99] transition
            "
            >
              <Image
                src="/images/alianca/localizacao-icon.png"
                alt="Localização"
                width={48}
                height={48}
                className="w-11 h-11"
              />
              <div className="leading-tight">
                <p className="text-white text-[15px] font-semibold">
                  Localização Timon
                </p>
                <p className="text-white/90 text-[13px]">
                  Av. Piauí, 2140 - Centro
                </p>
                <p className="text-white/90 text-[13px]">
                  Timon - MA, 65630-030
                </p>
              </div>
            </TrackLink>
          </div>

          {/* WRMAX */}
          <div className="mt-2 mb-6 opacity-90">
            <TrackLink
              href="https://www.instagram.com/wrmaxmarketing/"
              label="footer_wrmax"
              className="inline-block"
            >
              <Image
                src="/images/alianca/wrmax-footer-icon.png"
                alt="WRMAX Marketing"
                width={160}
                height={40}
              />
            </TrackLink>
          </div>
        </div>
      </main>
    </>
  );
}
