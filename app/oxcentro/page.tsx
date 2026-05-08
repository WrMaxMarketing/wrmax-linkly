"use client";
import TrackLink from "@/components/TrackLink";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Configuração dos Cards
// ---------------------------------------------------------------------------
const CARDS = [
  {
    id: "whatsapp",
    variant: "simple",
    gradient: "linear-gradient(135deg, #0b1b2e 0%, #0a284c 100%)",
    content: <>Agende sua <b>consulta</b> pelo Whatsapp</>,
    icon: "/images/oxcentro/whatsapp-icon.png",
    href: "https://wa.me/558699970998?text=Ol%C3%A1,%20vim%20da%20bio%20do%20instagram%20e%20gostaria%20de%20marcar%20uma%20consulta",
    side: "right",
  },
  {
    id: "site",
    variant: "simple",
    gradient: "linear-gradient(135deg, #1d3756 0%, #0b1b2e 100%)",
    content: <>Conheça nosso <b>Site</b> Oxcentro Oficial</>,
    icon: "/images/oxcentro/site-icon.png",
    href: "oxcentro.vercel.app",
    side: "left",
  },
  {
    id: "doctoralia",
    variant: "simple",
    gradient: "linear-gradient(135deg, #0b1b2e 0%, #1d3756 100%)",
    content: <>Agendamento <b>Online</b> via Doctoralia</>,
    icon: "/images/oxcentro/doctoralia-icon.png",
    href: "https://www.doctoralia.com.br/clinicas/oxcentro?utm_campaign=facility-127707&utm_medium=instagram&utm_source=widget&utm_term=profile-link",
    side: "right",
  },
  {
    id: "localizacao",
    variant: "split",
    gradient: "linear-gradient(135deg, #b70208 0%, #ff131a 100%)",
    title: <>Nossa <b>Localização</b></>,
    subtitle: <>Rua São Pedro 1504<br></br>Teresina-PI</>,
    icon: "/images/oxcentro/localizacao-icon.png",
    href: "https://maps.app.goo.gl/PJBvP5ijkPQqwK599",
    side: "left",
  },
  {
    id: "funcionamento",
    variant: "split",
    gradient: "linear-gradient(135deg, #b70208 0%, #ff131a 100%)",
    title: <>Horário de <b>Funcionamento</b></>,
    subtitle: "Segunda a sexta: 7h às 17h",
    icon: "/images/oxcentro/funcionamento-icon.png",
    side: "right",
  },
  {
    id: "convenios",
    variant: "split",
    gradient: "linear-gradient(135deg, #b70208 0%, #ff131a 100%)",
    title: <>Convênios</>,
    subtitle: "Cassi • Fusex • Geap • Ipmt • Iaspi • Capitania dos Portos • Select",
    icon: "/images/oxcentro/convenios-icon.png",
    side: "left",
  },
];

// ---------------------------------------------------------------------------
// Componente de Card
// ---------------------------------------------------------------------------
function InfoCard({ card }: { card: typeof CARDS[0] }) {
  const iconLeft = card.side === "left";

  const CardContent = (
    <div
      className="relative flex overflow-hidden rounded-[22px] shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      style={{ background: card.gradient, height: 100 }}
    >
      {/* Texto */}
      <div
        className={`relative z-10 flex h-full w-full flex-col justify-center px-8 ${iconLeft ? "items-end pl-32 text-right" : "items-start pr-32"
          }`}
      >
        {card.variant === "simple" ? (
          <div className="text-[1.1rem] leading-tight text-white antialiased [&>b]:font-bold">
            {card.content}
          </div>
        ) : (
          <div className="text-white">
            <div className="text-[16px] font-semibold leading-tight">
              {card.title}
            </div>
            <div className="text-[13px] opacity-80 leading-tight mt-1">
              {card.subtitle}
            </div>
          </div>
        )}
      </div>

      {/* Ícone */}
      <div
        className={`absolute top-0 bottom-0 z-0 flex h-full items-center justify-center opacity-90 mix-blend-screen ${iconLeft ? "left-2" : "right-2"
          }`}
        style={{ width: 110 }}
      >
        <div className="relative h-full w-full p-2">
          <Image
            src={card.icon}
            alt=""
            fill
            className="select-none object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );

  if (card.href) {
    return (
      <TrackLink href={card.href} label={card.id} className="block w-full">
        {CardContent}
      </TrackLink>
    );
  }

  return <div className="block w-full">{CardContent}</div>;
}

// ---------------------------------------------------------------------------
// Página Principal
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center px-6 py-12">

      {/* Header */}
      <header className="mb-10 flex flex-col items-center">
        <div className="mb-4 overflow-hidden rounded-full bg-[#1d3756] p-1 shadow-xl">
          <Image
            src="/images/oxcentro/logo-oxcentro.png"
            alt="Logo"
            width={110}
            height={110}
            className="rounded-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-black text-[#0b1b2e] tracking-tight">
          @oxcentro
        </h1>
        <br />
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">
          Referência em tratamento vascular
        </p>
        <p className="text-gray-400">
          Exames • Curativos • Atendimento completo
        </p>
      </header>

      {/* Cards */}
      <div className="flex w-full max-w-md flex-col gap-4">
        {CARDS.map((card) => (
          <InfoCard key={card.id} card={card} />
        ))}
      </div>

      {/* Rodapé */}
      <footer className="mt-12">
        <Image
          src="/images/logo-wrmax.png"
          alt="WRMAX"
          width={120}
          height={40}
          className="grayscale brightness-0 opacity-40"
        />
      </footer>
    </main>
  );
}