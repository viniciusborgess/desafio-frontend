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

const iconMap = { Shield, School, Hospital, Trees };

export function Neighborhood() {
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
    <section className="py-16 bg-white" id="neighborhood">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        {/* Imagem da planta */}
        <div className="flex-1 flex justify-center items-center" ref={plantaRef}>
          <Image
            key={imgKey}
            ref={imgRef}
            src={plantaImg}
            alt={`Planta do ${tab === 'terreo' ? 'térreo' : tab === 'pav2' ? '2º pavimento' : '6º pavimento'}`}
            width={600}
            height={600}
            className="object-contain bg-white"
            priority
          />
        </div>
        {/* Conteúdo textual */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="mb-4">
            <span className="uppercase tracking-widest text-gray-500 font-bold text-sm">Plantas | Áreas Comuns</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-800 leading-tight font-sans">
              Um terreno de esquina:<br />
              <span className="text-gray-400 font-semibold">valorizado e exclusivo.</span>
            </h2>
          </div>
          {/* Tabs interativas */}
          <div className="flex gap-2 mb-6">
            <button
              className={`px-4 py-2 font-bold rounded shadow ${tab === 'terreo' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTab('terreo')}
            >
              TÉRREO
            </button>
            <button
              className={`px-4 py-2 font-bold rounded shadow ${tab === 'pav2' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTab('pav2')}
            >
              2º PAVIMENTO
            </button>
            <button
              className={`px-4 py-2 font-bold rounded shadow ${tab === 'pav6' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTab('pav6')}
            >
              6º PAVIMENTO
            </button>
          </div>
          {/* Lista dinâmica */}
          <ol className="list-decimal list-inside text-gray-700 text-lg space-y-1 mb-2">
            {listaAtual.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          {/* Observação para o térreo e 2º pavimento */}
          {(tab === 'terreo' || tab === 'pav2') && (
            <p className="text-xs text-gray-400 mt-2">* Área exclusiva para as unidades Itacema 366, com acesso independente.</p>
          )}
        </div>
      </div>
    </section>
  );
}
