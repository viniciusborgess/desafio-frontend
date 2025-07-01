"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { PropertyData } from '@/types/special';
import { Shield, School, Hospital, Trees } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

interface NeighborhoodProps {
  property: PropertyData;
}

// @ts-ignore
const iconMap: Record<string, any> = { Shield, School, Hospital, Trees };

export function Neighborhood({ property }: NeighborhoodProps) {
  const [tab, setTab] = useState<'terreo' | 'pav2' | 'pav6'>('terreo');
  const [imgKey, setImgKey] = useState(0); // Forçando re-render da imagem

  const plantaImg =
    tab === 'terreo'
      ? '/img/planta.png'
      : tab === 'pav2'
      ? '/img/planta2.png'
      : '/img/planta3.png';

  const plantaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!plantaRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        plantaRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: plantaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, plantaRef);
    return () => ctx.revert();
  }, []);

  // Efeito GSAP na troca de imagem
  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    );
  }, [imgKey]);

  // Troca de tab com animação
  const handleTab = (novoTab: 'terreo' | 'pav2' | 'pav6') => {
    if (novoTab === tab) return;
    if (!imgRef.current) {
      setTab(novoTab);
      setImgKey((k) => k + 1);
      return;
    }
    gsap.to(imgRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        setTab(novoTab);
        setImgKey((k) => k + 1);
      },
    });
  };

  // Listas de cada pavimento
  const listaTerreo = [
    'Entrada Residencial',
    'Entrada Serviço',
    'Portaria',
    'Hall Social',
    'Delivery Room',
    'Entrada Veículos',
    'Loja',
    'Entrada Itacema 366*',
  ];
  const listaPav2 = [
    'Academia*',
    'Brinquedoteca*',
    'Unidades Home Studio',
  ];
  const listaPav6 = [
    'Piscina',
    'Lounge',
    'Espaço Gourmet',
    'Sauna',
    'Ducha',
    'WC',
  ];

  let listaAtual = listaTerreo;
  if (tab === 'pav2') listaAtual = listaPav2;
  if (tab === 'pav6') listaAtual = listaPav6;

  return (
    <section className="py-8 sm:py-16 bg-white" id="neighborhood">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-start gap-6 sm:gap-12">
        {/* Imagem da planta */}
        <div className="flex-1 w-full flex justify-center items-center mb-6 md:mb-0" ref={plantaRef}>
          <Image
            key={imgKey}
            ref={imgRef}
            src={plantaImg}
            alt={`Planta do ${tab === 'terreo' ? 'térreo' : tab === 'pav2' ? '2º pavimento' : '6º pavimento'}`}
            width={320} // mobile
            height={320} // mobile
            className="object-contain bg-white w-full max-w-xs sm:max-w-md md:max-w-lg"
            priority
          />
        </div>
        {/* Conteúdo textual */}
        <div className="flex-1 w-full flex flex-col gap-4 sm:gap-6">
          <div className="mb-2 sm:mb-4">
            <span className="uppercase tracking-widest text-gray-500 font-bold text-xs sm:text-sm block text-center md:text-left">Plantas | Áreas Comuns</span>
            <h2 className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight font-sans text-center md:text-left">
              Um terreno de esquina:<br />
              <span className="text-gray-400 font-semibold">valorizado e exclusivo.</span>
            </h2>
          </div>
          {/* Tabs interativas */}
          <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center md:justify-start">
            <button
              className={`px-3 sm:px-4 py-1 sm:py-2 font-bold rounded shadow text-xs sm:text-base ${tab === 'terreo' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTab('terreo')}
            >
              TÉRREO
            </button>
            <button
              className={`px-3 sm:px-4 py-1 sm:py-2 font-bold rounded shadow text-xs sm:text-base ${tab === 'pav2' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTab('pav2')}
            >
              2º PAVIMENTO
            </button>
            <button
              className={`px-3 sm:px-4 py-1 sm:py-2 font-bold rounded shadow text-xs sm:text-base ${tab === 'pav6' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTab('pav6')}
            >
              6º PAVIMENTO
            </button>
          </div>
          {/* Lista dinâmica */}
          <ol className="list-decimal list-inside text-gray-700 text-base sm:text-lg space-y-1 mb-1 sm:mb-2 text-center md:text-left">
            {listaAtual.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          {/* Observação para o térreo e 2º pavimento */}
          {(tab === 'terreo' || tab === 'pav2') && (
            <p className="text-xs text-gray-400 mt-1 sm:mt-2 text-center md:text-left">* Área exclusiva para as unidades Itacema 366, com acesso independente.</p>
          )}
        </div>
      </div>
      {/* Diferenciais do bairro - agora abaixo da planta, em linha */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 mt-12">
        <h3 className="text-lg font-bold mb-4 text-slate-900 font-sans text-center">Diferenciais do Bairro</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {property.neighborhoodDifferentials.map((diff, idx) => {
            // @ts-ignore
            const Icon = iconMap[diff.icon];
            return (
              <li key={idx} className="flex items-start gap-3 bg-white rounded-lg shadow-sm p-4">
                <span className={`rounded-full p-2 ${diff.iconBackground} ${diff.iconColor}`}>{Icon && <Icon className="h-5 w-5" />}</span>
                <div>
                  <span className="font-semibold text-slate-800">{diff.title}</span>
                  <p className="text-slate-600 text-sm">{diff.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {/* Estatísticas de proximidade - agora horizontal e centralizado */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {property.walkDistanceStats.map((stat, idx) => (
            <div key={idx} className="bg-blue-100 text-blue-800 rounded px-4 py-3 text-sm font-semibold min-w-[200px] text-center">
              {stat.value} <span className="font-normal">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
