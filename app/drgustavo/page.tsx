"use client";

import TrackLink from "@/components/TrackLink";
import Image from "next/image";

const links = [
  {
    label: "clinica_icadom",
    text: "Clínica ICADOM",
    icon: "/images/drgustavo/icadom-logo.png",
    href: "http://linktr.ee/Dr.Gustavo.icadom",
  },
  {
    label: "clinica_ortomed",
    text: "Clínica OrtoMed",
    icon: "/images/drgustavo/ortomed-logo.png",
    href: "https://linktr.ee/Dr.Gustavo.Ortomed",
  },
  {
    label: "med_imagem",
    text: "Med Imagem",
    icon: "/images/drgustavo/medimagem-logo.png",
    href: "https://linktr.ee/Dr.Gustavo.Medimagem",
  },
  {
    label: "sbot",
    text: "Sociedade Brasileira de Ortopedia",
    icon: "/images/drgustavo/sbot-logo.png",
    href: "http://ortopedista.sbot.org.br/dr.gustavo.ortopedista",
  },
  {
    label: "lattes",
    text: "Currículo Lattes",
    icon: "/images/drgustavo/lattes-logo.png",
    href: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4231936Y6",
  },
];

export default function DrGustavoPage() {
  return (
    <main className="min-h-screen bg-[#03102B] text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-[25%] left-[-20%] w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse delay-2000" />
        <div className="absolute top-[40%] right-[-15%] w-[350px] h-[350px] bg-cyan-400/10 blur-3xl rounded-full animate-pulse delay-1000" />

        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm">

          {/* Card */}
          <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl px-6 pt-20 pb-8">

            {/* Avatar */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/80">
                  <Image
                    src="/images/drgustavo/icone.jpeg"
                    alt="Dr. Gustavo"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center">
              <h1 className="text-xl font-bold">Dr. Gustavo</h1>

              <p className="text-xs uppercase tracking-widest text-blue-200/70 mt-1">
                Ortopedista e Traumatologista
              </p>

              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-4" />

              <p className="text-sm text-white/60">
                Especialista em ombro e cotovelo.
              </p>
            </div>

            {/* Links */}
            <div className="mt-6 space-y-3">
              {links.map((item) => (
                <TrackLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:border-blue-400/40 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={24}
                      height={24}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  <span className="text-sm text-white/80">
                    {item.text}
                  </span>

                  <span className="ml-auto text-white/30">›</span>
                </TrackLink>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <TrackLink
              href="https://www.instagram.com/wrmaxmarketing/"
              label="instagram_wrmax"
              className="inline-block opacity-60 hover:opacity-100 transition"
            >
              <Image
                src="/images/logo-wrmax.png"
                alt="WRMAX Marketing"
                width={110}
                height={40}
                className="w-[90px] h-auto invert"
              />
            </TrackLink>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}