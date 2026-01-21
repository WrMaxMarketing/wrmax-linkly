"use client";
import TrackLink from "@/components/TrackLinkTmax";
import Image from "next/image";

export default function Home() {
  return (
    // Removido overflow-hidden para permitir que o personagem saia do limite se necessário
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden">
      
      {/* Background - Usando object-cover para garantir que preencha a tela */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vipex/background.png" 
          alt="Vipex Viagens"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* Conteúdo */}
      {/* Ajustado o padding-top para alinhar os cards com a área escura do background */}
      <div className="relative z-10 mx-auto flex flex-col min-h-screen max-w-[390px] px-6 pt-[30vh] pb-8">
        
        {/* Cards */}
        <div className="flex flex-col gap-4">
          
          {/* Card Site */}
          <div className="relative">
            <TrackLink
              href="https://www.vipexviagens.com.br"
              label="site_vipex"
              // Adicionado flex e items-center para garantir que o conteúdo interno se alinhe
              className="relative flex items-center justify-between overflow-visible rounded-[12px] bg-white px-5 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                   <Image src="/images/vipex/icon-web.png" alt="Site" width={30} height={30} />
                </div>
                <div>
                  <p className="text-[17px] font-bold leading-tight text-black">Site Vipex</p>
                  <p className="text-[14px] text-gray-600">Assessoria de Viagens</p>
                </div>
              </div>

              {/* Espaçador invisível para o personagem não sobrepor o texto em telas pequenas */}
              <div className="w-[80px]" /> 

              {/* Personagem - Ajustado posicionamento para bater com o modelo */}
              <div className="absolute -right-2 bottom-0 w-[115px]">
                <Image
                  src="/images/vipex/felipe-apontando-site.png"
                  alt="Felipe"
                  width={115}
                  height={130}
                  className="pointer-events-none object-contain"
                />
              </div>
            </TrackLink>
          </div>

          {/* Card WhatsApp */}
          <div className="relative">
            <TrackLink
              href="https://wa.me/5511918743332?text=Ol%C3%A1,%20vim%20da%20bio%20do%20instagram%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Assessoria%20Vipex"
              label="contato_vipex"
              className="relative flex items-center justify-between overflow-visible rounded-[12px] bg-white px-5 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/vipex/icon-whatsapp.png" alt="WhatsApp" width={30} height={30} />
                </div>
                <div>
                  <p className="text-[17px] font-bold leading-tight text-black">Contato Vipex</p>
                  <p className="text-[14px] text-gray-600">Assessoria de Viagens</p>
                </div>
              </div>

              <div className="w-[80px]" />

              {/* Personagem - Ajustado posicionamento */}
              <div className="absolute -right-2 bottom-0 w-[115px]">
                <Image
                  src="/images/vipex/felipe-apontando-contato.png"
                  alt="Felipe"
                  width={115}
                  height={130}
                  className="pointer-events-none object-contain"
                />
              </div>
            </TrackLink>
          </div>
        </div>

        {/* Texto explicativo */}
        <div className="mt-10">
          <h2 className="text-[28px] font-medium text-white leading-tight">
            O que é a <span className="font-bold">Vipex</span>?
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-gray-200">
            A Vipex Viagens é uma assessoria premium que transforma gastos em
            milhas e milhas em viagens exclusivas, com atendimento personalizado
            e foco em conforto e vantagens reais.
          </p>
        </div>

        {/* Logo WRMAX - mt-auto empurra para o fim da tela */}
        <div className="mt-auto pt-10 flex justify-center">
          <Image
            src="/images/vipex/bottom-logo-wrmax.png"
            alt="WRMAX Marketing"
            width={140}
            height={35}
            className="opacity-80"
          />
        </div>
      </div>
    </main>
  );
}