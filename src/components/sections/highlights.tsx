"use client";
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { MapPin, Bed } from 'lucide-react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    nome: 'RYT JARDINS APARTMENTS',
    local: 'JARDINS - SÃO PAULO/SP',
    imagem: '/img/ap1.jpg',
    endereco: 'R. Oscar Freire, 124',
    dormitorios: '1 e 2 Dorms.',
    tab: 0,
  },
  {
    nome: 'ITAIM BIBI SMART STUDIOS',
    local: 'ITAIM BIBI - SÃO PAULO/SP',
    imagem: '/img/ap2.jpg',
    endereco: 'R. Dr. Penaforte Mendes, 42',
    dormitorios: 'Studios',
    tab: 0,
  },
  {
    nome: 'EVOKE',
    local: 'MORUMBI - SÃO PAULO/SP',
    imagem: '/img/ap3.jpg',
    endereco: 'Reserva do Paiva',
    dormitorios: '2 e 3 Dorms.',
    tab: 0,
  },
  // Breve Lançamento
  {
    nome: 'VILLA BELLA RESIDENCE',
    local: 'ALTO DE PINHEIROS - SÃO PAULO/SP',
    imagem: '/img/breve1.jpeg',
    endereco: 'Av. das Magnólias, 500',
    dormitorios: '4 Suítes',
    tab: 1,
  },
  {
    nome: 'SKYLINE TOWER',
    local: 'BROOKLIN - SÃO PAULO/SP',
    imagem: '/img/breve2.jpeg',
    endereco: 'Rua do Brooklin, 1000',
    dormitorios: '3 e 4 Dorms.',
    tab: 1,
  },
  {
    nome: 'PARK VIEW LUXURY',
    local: 'VILA NOVA CONCEIÇÃO - SÃO PAULO/SP',
    imagem: '/img/breve3.jpeg',
    endereco: 'Rua Domingos Leme, 900',
    dormitorios: '2 e 3 Suítes',
    tab: 1,
  },
  // Em Construção
  {
    nome: 'OCEAN VIEW RESIDENCE',
    local: 'VILA NOVA CONCEIÇÃO - SÃO PAULO/SP',
    imagem: '/img/construcao1.jpeg',
    endereco: 'Rua das Palmeiras, 200',
    dormitorios: '2 e 3 Suítes',
    tab: 2,
  },
  {
    nome: 'GARDEN PLACE',
    local: 'MOEMA - SÃO PAULO/SP',
    imagem: '/img/construcao2.jpeg',
    endereco: 'Alameda dos Jardins, 350',
    dormitorios: 'Studios e 2 Dorms.',
    tab: 2,
  },
  {
    nome: 'PINHEIROS PRIME',
    local: 'PINHEIROS - SÃO PAULO/SP',
    imagem: '/img/construcao3.jpeg',
    endereco: 'Rua dos Pinheiros, 800',
    dormitorios: '3 e 4 Dorms.',
    tab: 2,
  },
];

const tabs = [
  'LANÇAMENTOS',
  'BREVE LANÇAMENTO',
  'EM CONSTRUÇÃO',
];

export function Highlights() {
  const [tab, setTab] = React.useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Filtrar highlights por tab
  const highlightsFiltrados = highlights.filter((item) => item.tab === tab);

  return (
    <section ref={sectionRef} className="py-10 sm:py-20 bg-white">
      <Container>
        <h2 className="text-xs sm:text-lg font-sans tracking-[0.3em] sm:tracking-[0.5em] text-slate-600 mb-6 sm:mb-10 pl-1 sm:pl-2 text-center">OUTROS HIGHLIGHTS</h2>
        {/* Tabs responsivas: 2 linhas no mobile, 1 linha no desktop */}
        <div className="flex flex-wrap justify-center mb-6 sm:mb-10 border-b border-slate-200 gap-x-6 gap-y-2">
          <div className="flex w-full sm:w-auto justify-center gap-x-6 mb-2 sm:mb-0">
            {tabs.slice(0, 2).map((t, i) => (
              <button
                key={t}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wide border-b-2 transition-colors duration-200 ${tab === i ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                onClick={() => setTab(i)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex w-full sm:w-auto justify-center gap-x-6">
            {tabs.slice(2).map((t, i) => (
              <button
                key={t}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wide border-b-2 transition-colors duration-200 ${tab === i + 2 ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                onClick={() => setTab(i + 2)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {highlightsFiltrados.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col items-center transition-all hover:shadow-lg group"
            >
              <div className="w-full h-44 sm:h-72 relative">
                <Image src={item.imagem} alt={item.nome} fill style={{objectFit:'cover'}} className="w-full h-full" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.endereco}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Bed className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.dormitorios}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-8 w-full flex flex-col items-center">
                <h3 className="text-base sm:text-lg font-sans font-semibold text-slate-700 mb-1 sm:mb-2 text-center">
                  {item.nome.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="font-bold">{item.nome.split(' ').slice(-1)}</span>
                </h3>
                <p className="text-xs tracking-widest text-slate-500 text-center uppercase">{item.local}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full border-slate-200 shadow-sm hover:shadow-md transition-all">
            TODOS EMPREENDIMENTOS
          </Button>
        </div>
      </Container>
    </section>
  );
} 