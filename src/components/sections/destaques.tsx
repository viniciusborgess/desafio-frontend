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

const destaques = [
  {
    nome: 'RYT JARDINS APARTMENTS',
    local: 'JARDINS - SÃO PAULO/SP',
    imagem: '/img/ap1.jpg',
    endereco: 'R. Dr. Penaforte Mendes, 74',
    dormitorios: '1 e 2 Dorms.',
  },
  {
    nome: 'ITAIM BIBI SMART STUDIOS',
    local: 'ITAIM BIBI - SÃO PAULO/SP',
    imagem: '/img/ap2.jpg',
    endereco: 'R. Dr. Penaforte Mendes, 74',
    dormitorios: 'Studios',
  },
  {
    nome: 'EVOKE',
    local: 'MORUMBI - SÃO PAULO/SP',
    imagem: '/img/ap3.jpg',
    endereco: 'Reserva do Paiva',
    dormitorios: '2 e 3 Dorms.',
  },
];

const tabs = [
  'LANÇAMENTOS',
  'BREVE LANÇAMENTO',
  'EM CONSTRUÇÃO',
  'CONCLUÍDOS',
];

export function Destaques() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <Container>
        <h2 className="text-lg font-sans tracking-[0.5em] text-slate-600 mb-10 pl-2">OUTROS DESTAQUES</h2>
        <div className="flex flex-wrap justify-center mb-10 border-b border-slate-200 gap-2 sm:gap-0">
          {tabs.map((t, i) => (
            <button
              key={t}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wide border-b-2 transition-colors duration-200 ${tab === i ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {destaques.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col items-center transition-all hover:shadow-lg group p-4 sm:p-8"
            >
              <div className="w-full h-44 xs:h-56 sm:h-72 relative">
                <Image src={item.imagem} alt={item.nome} fill style={{objectFit:'cover'}} className="w-full h-full" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs sm:text-sm font-medium">{item.endereco}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Bed className="w-5 h-5" />
                    <span className="text-xs sm:text-sm font-medium">{item.dormitorios}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 sm:pt-8 w-full flex flex-col items-center">
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
          <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base font-medium rounded-full border-slate-200 shadow-sm hover:shadow-md transition-all">
            TODOS EMPREENDIMENTOS
          </Button>
        </div>
      </Container>
    </section>
  );
} 