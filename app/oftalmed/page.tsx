import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image without Overlay */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/fundo.png" alt="Hospital Oftalmed" fill className="object-cover" priority />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-8">
                <div className="mb-6 overflow-hidden rounded-full bg-white p-2">
                    <Image
                        src="/images/icone-topo-oftalmed.png"
                        alt="Oftalmed Icon"
                        width={128}
                        height={128}
                        className="h-32 w-32 rounded-full object-contain"
                    />
                </div>

                {/* Instagram Handle */}
                <Link
                    href="https://www.instagram.com/hospitaloftalmed"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h1 className="mb-3 cursor-pointer text-center text-3xl font-bold text-white transition-opacity hover:opacity-80">
                        @hospitaloftalmed
                    </h1>
                </Link>

                {/* Description */}
                <p className="mb-8 max-w-md text-center text-base leading-relaxed text-white">
                    Referência em diagnóstico e tratamento
                    <br />
                    especializado em Oftalmologia
                </p>

                {/* Divider */}
                <div className="mb-8 h-px w-64 bg-white/30" />

                {/* WhatsApp Contact Buttons */}
                <div className="mb-4 w-full max-w-md space-y-3">
                    {/* Centro Button */}
                    <a
                        href="https://wa.me/558633037000?text=Ol%C3%A1!%20Vim%20do%20instagram%20e%20gostaria%20de%20agendar%20uma%20consulta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-full border-2 border-white/80 bg-transparent px-5 py-4 text-white transition-all hover:bg-white/10"
                    >
                        <Image
                            src="/images/icone-whatsapp.png"
                            alt="WhatsApp"
                            width={32}
                            height={32}
                            className="h-8 w-8 flex-shrink-0"
                        />
                        <span className="text-left text-lg">
                            Contato Oftalmed <strong>Centro</strong>
                        </span>
                    </a>

                    {/* Jockey Button */}
                    <a
                        href="https://wa.me/5586994571267?text=Ol%C3%A1!%20Vim%20do%20instagram%20e%20gostaria%20de%20agendar%20uma%20consulta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-full border-2 border-white/80 bg-transparent px-5 py-4 text-white transition-all hover:bg-white/10"
                    >
                        <Image
                            src="/images/icone-whatsapp.png"
                            alt="WhatsApp"
                            width={32}
                            height={32}
                            className="h-8 w-8 flex-shrink-0"
                        />
                        <span className="text-left text-lg">
                            Contato Oftalmed <strong>Jockey</strong>
                        </span>
                    </a>

                    {/* SUS Button */}
                    <a
                        href="https://wa.me/5586994474744?text=Ol%C3%A1!%20Vim%20do%20instagram%20e%20gostaria%20de%20agendar%20uma%20consulta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-full border-2 border-white/80 bg-transparent px-5 py-4 text-white transition-all hover:bg-white/10"
                    >
                        <Image
                            src="/images/icone-whatsapp.png"
                            alt="WhatsApp"
                            width={32}
                            height={32}
                            className="h-8 w-8 flex-shrink-0"
                        />
                        <span className="text-left text-lg">
                            Contato Oftalmed <strong>SUS</strong>
                        </span>
                    </a>
                </div>

                {/* Site Button */}
                <a
                    href="https://www.hospitaloftalmed.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 flex w-full max-w-md items-center gap-4 rounded-full bg-[#2d5966] px-5 py-4 text-white transition-all hover:bg-[#3d6976]"
                >
                    <Image
                        src="/images/icone-oftalmed.png"
                        alt="Site Icon"
                        width={32}
                        height={32}
                        className="h-8 w-8 flex-shrink-0"
                    />
                    <span className="text-left text-lg font-medium">Site Oftalmed</span>
                </a>

                {/* Location Cards */}
                <div className="w-full max-w-md space-y-3">
                    {/* Sede Location */}
                    <a
                        href="https://maps.app.goo.gl/E8tMUxLz2drR7xAm9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-full bg-white/90 px-5 py-4 transition-all hover:bg-white"
                    >
                        <Image
                            src="/images/icone-localizacao.png"
                            alt="Localização"
                            width={40}
                            height={40}
                            className="h-10 w-10 flex-shrink-0"
                        />
                        <div className="text-left">
                            <p className="text-sm font-bold text-[#2d5966]">Localização Sede:</p>
                            <p className="text-sm text-[#2d5966]">Av. Frei Serafim, 1989</p>
                        </div>
                    </a>

                    {/* Jockey Location */}
                    <a
                        href="https://maps.app.goo.gl/ZnvrGbJT4PwJonZC7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-full bg-white/90 px-5 py-4 transition-all hover:bg-white"
                    >
                        <Image
                            src="/images/icone-localizacao.png"
                            alt="Localização"
                            width={40}
                            height={40}
                            className="h-10 w-10 flex-shrink-0"
                        />
                        <div className="text-left">
                            <p className="text-sm font-bold text-[#2d5966]">Localização Jockey:</p>
                            <p className="text-sm text-[#2d5966]">R. Aviador Irapuã Rocha, 1320</p>
                        </div>
                    </a>
                </div>

                {/* WRMAX Logo */}
                <div className="mt-8">
                    <Link
                        href="https://www.instagram.com/wrmaxmarketing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Image
                            src="/images/logo-wrmax.png"
                            alt="WRMAX Marketing"
                            width={160}
                            height={53}
                            className="h-auto w-40 object-contain opacity-90 transition-opacity hover:opacity-100"
                        />
                    </Link>
                </div>
            </div>
        </main>
    )
}