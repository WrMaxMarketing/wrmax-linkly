"use client";

import TrackLink from "@/components/TrackLink";
import Image from "next/image";
import Script from "next/script";

export default function drgabrielbaiaoPage() {
    return (
        <>
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
            <main className="min-h-screen flex flex-col bg-[#0e3a4a]">

                {/* Background */}
                <div className="relative flex-1 w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/drgabrielbaiao/fundo.png"
                            alt="Background"
                            fill
                            className="object-contain object-top"
                            priority
                        />

                        {/* Overlay azul degradê */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0e3a4a]/20 via-[#0e3a4a]/55 to-[#0e3a4a]/95" />
                    </div>

                    {/* Conteúdo */}
                    <div className="relative z-10 w-full px-5 pt-38 pb-10">
                        <div className="max-w-sm mx-auto">

                            {/* Card principal */}
                            <div className="relative bg-white/90 backdrop-blur-md rounded-[32px] px-6 pt-16 pb-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">

                                {/* Foto circular sobreposta */}
                                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <Image
                                            src="/images/drgabrielbaiao/profile.png"
                                            alt="Dr. Gabriel Baião"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Nome */}
                                <div className="text-center">
                                    <h1 className="text-[24px] font-semibold text-[#111] mt-2">
                                        Dr. Gabriel Baião
                                    </h1>

                                    <p className="text-[17px] text-black/80 mt-1">
                                        Médico da dor
                                    </p>

                                    <div className="w-12 h-[2px] bg-black/70 mx-auto my-3 rounded-full" />

                                    <p className="text-[15px] text-black/70 leading-relaxed">
                                        Especializado no cuidado e no tratamento da dor.
                                    </p>
                                </div>

                                {/* Botões */}
                                <div className="mt-6 flex flex-col gap-4">

                                    {/* WhatsApp */}
                                    <TrackLink
                                        href="https://wa.me/5589981396444?text=Ol%C3%A1,%20vim%20da%20bio%20do%20instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Gabriel%20Bai%C3%A3o"
                                        label="whatsapp_drgabrielbaiao"
                                        className="w-full bg-[#2b2b2b] text-white rounded-3xl px-5 py-4
                             flex items-center gap-4 shadow-lg
                             active:scale-[0.98] transition-all"
                                    >
                                        <Image
                                            src="/images/drgabrielbaiao/icone-whatsapp.png"
                                            alt="WhatsApp"
                                            width={40}
                                            height={40}
                                            className="w-8 h-8"
                                        />
                                        <span className="text-[15px] tracking-wide">
                                            AGENDE UMA CONSULTA
                                        </span>
                                    </TrackLink>

                                    {/* Localização */}
                                    <TrackLink
                                        href="https://maps.app.goo.gl/YLL8b1kJnd3PrB4ZA"
                                        label="localizacao_drgabrielbaiao"
                                        className="w-full bg-[#2b2b2b] text-white rounded-3xl px-5 py-4
                             flex items-center gap-4 shadow-lg
                             active:scale-[0.98] transition-all"
                                    >
                                        <Image
                                            src="/images/drgabrielbaiao/icone-local.png"
                                            alt="Localização"
                                            width={40}
                                            height={40}
                                            className="w-8 h-8"
                                        />

                                        <div className="text-left">
                                            <p className="text-[13px] font-semibold tracking-wide">
                                                LOCALIZAÇÃO
                                            </p>
                                            <p className="text-[13px] text-white/80 leading-tight">
                                                Av. Getulio Vargas, 857 <br />
                                                Centro, Bom Jesus/PI
                                            </p>
                                        </div>
                                    </TrackLink>
                                </div>

                                {/* Atendimentos */}
                                <div className="mt-8 text-center">
                                    <h2 className="text-[18px] text-black/80 font-medium">
                                        Atendimentos em diversas
                                        <br />
                                        localidades do Piauí
                                    </h2>

                                    <div className="mt-5 grid grid-cols-2 gap-3">
                                        {[
                                            "Bom Jesus",
                                            "Floriano",
                                            "Bertolínia",
                                            "Corrente",
                                            "Curimatá",
                                            "Uruçuí",
                                        ].map((cidade) => (
                                            <div
                                                key={cidade}
                                                className="border border-black/40 text-black/80 
                                 rounded-2xl py-2 text-[14px]
                                 font-medium tracking-wide"
                                            >
                                                {cidade.toUpperCase()}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* WRMAX */}
                            <div className="mt-5 flex justify-center">
                                <TrackLink
                                    href="https://www.instagram.com/wrmaxmarketing/"
                                    label="instagram_wrmax"
                                >
                                    <Image
                                        src="/images/drgabrielbaiao/icone-wrmax.png"
                                        alt="WRMAX Marketing"
                                        width={120}
                                        height={40}
                                        className="w-[110px] h-auto opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </TrackLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}