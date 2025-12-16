import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Topo */}
      <div className="w-full bg-[#fef5f1] px-4 py-2">
        <div className="max-w-[260px] mx-auto">
          <a
            href="https://www.instagram.com/icadomcentromedico/"
            className="block"
          >
            <Image
              src="/images/icadom/logo-icadom.png"
              alt="ICADOM Centro Médico"
              width={300}
              height={100}
              className="w-full h-auto"
              priority
            />
          </a>
        </div>
      </div>

      {/* Fundo */}
      <div className="relative flex-1 w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/icadom/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* overlay sutil (premium + legibilidade) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />
        </div>

        <div className="relative z-10 w-full px-4 py-5">
          <div className="max-w-sm mx-auto flex flex-col gap-3.5">
            {/* Texto */}
            <h1 className="text-white/90 text-[17px] text-center leading-relaxed font-normal px-4 pb-1">
              Referência em Gastroenterologia e tratamento clínico e cirúrgico da
              obesidade.
            </h1>

            {/* Botões (base mais “fina”) */}
            <a
              href="https://wa.me/5586988747984?text=Ol%C3%A1,%20gostaria%20de%20marcar%20uma%20consulta"
              className="w-full rounded-3xl px-4 py-2.5 flex items-center gap-3
                         bg-gradient-to-r from-[#751513] via-[#751513]/85 to-[#751513]/25
                         border border-white/10 shadow-[0_10px_22px_rgba(0,0,0,0.25)]
                         hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <Image
                src="/images/icadom/icon-wpp.png"
                alt="WhatsApp"
                width={48}
                height={48}
                className="w-10 h-10"
              />
              <span className="text-white text-[16px] text-left">
                Contato <span className="font-semibold">ICADOM</span>
              </span>
            </a>

            <a
              href="https://icadom.com.br"
              className="w-full rounded-3xl px-4 py-2.5 flex items-center gap-3
                         bg-gradient-to-r from-[#751513] via-[#751513]/85 to-[#751513]/25
                         border border-white/10 shadow-[0_10px_22px_rgba(0,0,0,0.25)]
                         hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <Image
                src="/images/icadom/icon-icadom.png"
                alt="ICADOM"
                width={48}
                height={48}
                className="w-10 h-10"
              />
              <span className="text-white text-[16px] text-left">
                Site <span className="font-semibold">ICADOM</span>
              </span>
            </a>

            <a
              href="https://maps.app.goo.gl/PMemrd7vnohUd8m26"
              className="w-full rounded-3xl px-4 py-3 flex items-center gap-3
                         bg-gradient-to-r from-[#f2ebe6] via-[#e5ddd5] to-[#e5ddd5]/35
                         border border-white/30 shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                         hover:brightness-105 active:scale-[0.99] transition-all"
            >
              <Image
                src="/images/icadom/icon-local.png"
                alt="Localização"
                width={48}
                height={48}
                className="w-10 h-10"
              />
              <div className="text-left">
                <p className="text-[#751513] text-[12px] font-semibold">
                  Localização:
                </p>
                <p className="text-black/90 text-[13px] mt-0.5">
                  R. das Tulípas, 325 – Jóquei
                </p>
              </div>
            </a>

            {/* Horários */}
            <div className="mt-1.5">
              <h2 className="text-white/90 text-[17px] text-center mb-3 font-normal">
                Horários de atendimento:
              </h2>

              <div className="flex flex-col gap-2.5">
                <div
                  className="w-full bg-white/5 border border-white/25 rounded-3xl px-4 py-2.5
                             backdrop-blur-[2px] shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
                >
                  <p className="text-white text-[14px] text-center">
                    Segunda à Quinta: 07:00 às 18:00
                  </p>
                </div>

                <div
                  className="w-full bg-white/5 border border-white/25 rounded-3xl px-4 py-2.5
                             backdrop-blur-[2px] shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
                >
                  <p className="text-white text-[14px] text-center">
                    Sexta-feira: 07:00 às 17:00
                  </p>
                </div>
              </div>
            </div>

            {/* WRMAX */}
            <div className="mt-1.5 flex justify-center">
              <a href="https://www.instagram.com/wrmaxmarketing/">
                <Image
                  src="/images/icadom/logo-wrmax.png"
                  alt="WRMAX Marketing"
                  width={100}
                  height={35}
                  className="w-[92px] h-auto opacity-85 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
