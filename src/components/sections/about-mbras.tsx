import Image from 'next/image';
import React from 'react';

export function AboutMBRAS() {
  return (
    <section className="py-0 md:py-0 bg-slate-900 text-white w-full" id="about-mbras">
      <div className="flex flex-col md:flex-row w-full h-[500px] md:h-[400px] overflow-hidden shadow-lg">
        {/* Imagem do imóvel */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/img/imovel-about.jpeg"
            alt="Imóvel de alto padrão MBRAS"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Texto institucional */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 py-10 md:py-0 bg-slate-900">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 font-sans">Sobre a MBRAS Imóveis</h2>
          <p className="text-lg md:text-l mb-6 font-light">
            A <span className="font-bold">MBRAS Imóveis</span> é referência no mercado imobiliário de alto padrão em São Paulo, oferecendo atendimento personalizado, assessoria completa e as melhores oportunidades para quem busca exclusividade, segurança e valorização.
          </p>
          <p className="text-base md:text-l max-w-2xl mx-auto md:mx-0">
            Com uma equipe experiente e apaixonada pelo que faz, a MBRAS atua com ética, transparência e foco total na satisfação de seus clientes. Seja para comprar, vender ou investir, conte com a MBRAS para realizar o seu melhor negócio imobiliário.
          </p>
        </div>
      </div>
    </section>
  );
} 