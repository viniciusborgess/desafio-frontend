'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { itacema366Data } from './data/imovel';
import { HeroShowcase } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Neighborhood } from "@/components/sections/neighborhood";
import { Contact } from "@/components/sections/contact";
import { useState } from 'react';
import { Destaques } from '@/components/sections/destaques';
import { AboutMBRAS } from '@/components/sections/about-mbras';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Showcase Section */}
        <HeroShowcase
          image="/img/foto-header.jpg"
          tag="EM DESTAQUE"
          title={itacema366Data.name}
          subtitle={itacema366Data.tagline}
          location={itacema366Data.location}
          buttonText="Ver Propriedade"
        />

        {/* Seção Destaques */}
        <Destaques />

        {/* Seção de Destaque */}
        <section className="py-16 bg-slate-900">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Texto à esquerda */}
              {/* Changed this to md:w-1/2 to ensure both halves are explicit */}
              <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left justify-center ">
                <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-widest mb-6 text-white uppercase">O CONCEITO DOS MELHORES HOTÉIS DO MUNDO NA SUA CASA</h2>
                <p className="text-base md:text-lg text-slate-200 max-w-xl mb-8 tracking-wide leading-relaxed">
                  {itacema366Data.about.description}
                </p>
              </div>
              {/* Slider de imagens à direita */}
              {/* This remains md:w-1/2 */}
              <div className="md:w-1/2 w-full max-w-xl">
                <ImageSlider images={itacema366Data.images} />
              </div>
            </div>
          </Container>
        </section>

        {/* Detalhes do imóvel, vizinhança e contato */}
        <About property={itacema366Data} />
        <Neighborhood />
        <AboutMBRAS />
        <Contact property={itacema366Data} />
      </main>
      <Footer />
    </>
  );
}

function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goToPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goToNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="w-full">
      <div className="relative aspect-[16/9] overflow-hidden shadow-2xl border border-gray-700">
        <Image
          src={images[current]}
          alt={`Imagem ${current + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
        {/* Botões de navegação */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Imagem anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Próxima imagem"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Indicador de página */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-5 py-2 rounded-full text-white text-sm font-medium tracking-wide">
          {current + 1} / {total}
        </div>
      </div>
    </div>
  );
}