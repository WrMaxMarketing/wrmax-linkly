"use client";
import TrackLink from "@/components/TrackLink";
import Image from "next/image";

export default function Home() {
  return (
    // Removi o bg-black do main para garantir que o fundo apareça corretamente
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#000]">

      {/* Background - Ajustado para cobrir sem sumir */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/wrmax/background.png"
          alt="WRMAX Marketing Background"
          fill
          className="object-cover object-top" // object-top garante que o rosto apareça
          priority
        />
        {/* Overlay opcional para garantir leitura se a imagem for clara */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Conteúdo - Z-20 para ficar acima do overlay */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[450px] flex-col px-6 pb-12 pt-10 pt-50">

        {/* Spacer para empurrar os cards para baixo como no modelo */}
        <div className="flex-grow" />

        {/* Cards - Ajustados para não sobrepor */}
        <div className="space-y-4 pt-20">
          {/* Site */}
          <TrackLink
            href="https://www.wrmaxmarketing.com.br"
            label="site"
            className="flex items-center gap-4 rounded-[30px] border border-white/20 bg-black/60 px-6 py-4 backdrop-blur-md transition hover:border-yellow-400"
          >
            <Image src="/images/wrmax/icon-web.png" alt="Site" width={32} height={32} />
            <p className="text-[18px] font-bold text-white">Site WRMAX</p>
          </TrackLink>

          {/* WhatsApp */}
          <TrackLink
            href="https://wa.me/558699188465?text=Ol%C3%A1,%20vim%20da%20bio%20do%20instagram%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20assessoria%20da%20Wrmax"
            label="contato"
            className="flex items-center gap-4 rounded-[30px] border border-white/20 bg-black/60 px-6 py-4 backdrop-blur-md transition hover:border-yellow-400"
          >
            <Image src="/images/wrmax/icon-whatsapp.png" alt="WhatsApp" width={32} height={32} />
            <p className="text-[18px] font-bold text-white">Contato WRMAX</p>
          </TrackLink>

          {/* Localização */}
          <TrackLink
            href="https://maps.app.goo.gl/6v95KPr6rJCuAHUL9"
            label="localizacao"
            className="flex items-start gap-4 rounded-[30px] border border-white/20 bg-black/60 px-6 py-4 backdrop-blur-md transition hover:border-yellow-400"
          >
            <Image src="/images/wrmax/icon-location.png" alt="Localização" width={40} height={40} className="mt-1" />
            <div>
              <p className="text-[18px] font-bold text-white">Localização WRMAX</p>
              <p className="text-[13px] leading-tight text-white/90">
                Av. Universitária, 750 – 16º Andar <br />
                Sala 1610 – Fátima
              </p>
            </div>
          </TrackLink>
        </div>

        {/* Texto institucional ajustado */}
        <div className="mt-10 text-center">
          <h2 className="text-[20px] font-black uppercase leading-tight text-white px-2">
            POSICIONE SUA MARCA NA INTERNET
            PARA <span className="bg-[#FFD700] px-1 text-black">VENDER MAIS!</span>
          </h2>

          <p className="mt-4 text-justify text-[18px] leading-snug text-white/90 px-4">
            A WRMax Marketing oferece soluções completas para empreendedores
            que desejam escalar seus resultados online sem perder tempo com
            estratégias que não funcionam.
          </p>
        </div>

        {/* Rodapé */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/images/wrmax/logo-footer.png"
            alt="WRMAX Marketing"
            width={140}
            height={35}
          />
        </div>
      </div>
    </main>
  );
}