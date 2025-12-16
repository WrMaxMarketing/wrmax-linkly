import Image from "next/image";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full bg-[#fef5f1] px-4">
                <div className="max-w-xs mx-auto">
                    <a href="https://www.instagram.com/icadomcentromedico/">
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

            <div className="relative flex-1 w-full">
                <div className="absolute inset-0">
                    <Image src="/images/icadom/background.png" alt="Background" fill className="object-cover" priority />
                </div>

                <div className="relative z-10 w-full px-4 py-6">
                    <div className="max-w-sm mx-auto flex flex-col gap-4">
                        <h1 className="text-white text-xl text-center leading-relaxed font-normal px-6 pb-2">
                            Referência em Gastroenterologia e tratamento clínico e cirúrgico da obesidade.
                        </h1>

                        <a
                            href="https://wa.me/5586988747984?text=Ol%C3%A1,%20gostaria%20de%20marcar%20uma%20consulta"
                            className="w-full bg-gradient-to-r from-[#751513] to-[#751513]/20 rounded-3xl px-5 py-3 flex items-center gap-3 border-2 border-[#a84444]/30 shadow-lg hover:from-[#8b1f1d] hover:to-[#8b1f1d]/20 transition-all"
                        >
                            <Image
                                src="/images/icadom/icon-wpp.png"
                                alt="WhatsApp"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                            <span className="text-white text-lg text-left">Contato
                                <span className="font-bold"> ICADOM</span>
                            </span>
                        </a>

                        <a
                            href="https://icadom.com.br"
                            className="w-full bg-gradient-to-r from-[#751513] to-[#751513]/20 rounded-3xl px-5 py-3 flex items-center gap-3 border-2 border-[#a84444]/30 shadow-lg hover:from-[#8b1f1d] hover:to-[#8b1f1d]/20 transition-all"
                        >
                            <Image src="/images/icadom/icon-icadom.png" alt="ICADOM" width={48} height={48} className="w-12 h-12" />
                            <span className="text-white text-lg text-left">Site
                                <span className="font-bold"> ICADOM</span>
                            </span>
                        </a>

                        <a href="https://maps.app.goo.gl/PMemrd7vnohUd8m26" className="w-full bg-gradient-to-r from-[#e5ddd5] to-[#e5ddd5]/20 rounded-3xl px-5 py-4 flex items-center gap-3 shadow-md">
                            <Image
                                src="/images/icadom/icon-local.png"
                                alt="Localização"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                            <div className="text-left">
                                <p className="text-[#751513] text-sm font-bold">Localização:</p>
                                <p className="text-[#000000] text-sm mt-0.5">R. das Tulípas, 325 – Jóquei</p>
                            </div>
                        </a>

                        <div className="mt-2">
                            <h2 className="text-white text-xl text-center mb-4 font-normal">Horários de atendimento:</h2>

                            <div className="flex flex-col gap-3">
                                <div className="w-full bg-transparent border-2 border-white rounded-3xl px-4 py-3">
                                    <p className="text-white text-base text-center">Segunda à Quinta: 07:00 às 18:00</p>
                                </div>

                                <div className="w-full bg-transparent border-2 border-white rounded-3xl px-4 py-3">
                                    <p className="text-white text-base text-center">Sexta-feira: 07:00 às 17:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-center">
                            <a href="https://www.instagram.com/wrmaxmarketing/">
                                <Image
                                    src="/images/icadom/logo-wrmax.png"
                                    alt="WRMAX Marketing"
                                    width={100}
                                    height={35}
                                    className="w-auto h-auto opacity-90"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
