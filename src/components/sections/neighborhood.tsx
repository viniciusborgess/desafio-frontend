import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { PropertyData } from '@/types/special';
import { Shield, School, Hospital, Trees } from 'lucide-react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

interface NeighborhoodProps {
  property: PropertyData;
}

const iconMap = { Shield, School, Hospital, Trees };

export function Neighborhood() {
  const [tab, setTab] = useState<'terreo' | 'pav2' | 'pav6'>('terreo');

  const plantaImg =
    tab === 'terreo'
      ? '/img/planta.png'
      : tab === 'pav2'
      ? '/img/planta2.png'
      : '/img/planta3.png';

  return (
    <section className="py-16 bg-white" id="neighborhood">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        {/* Imagem da planta */}
        <div className="flex-1 flex justify-center items-center">
          <Image
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
              onClick={() => setTab('terreo')}
            >
              TÉRREO
            </button>
            <button
              className={`px-4 py-2 font-bold rounded shadow ${tab === 'pav2' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTab('pav2')}
            >
              2º PAVIMENTO
            </button>
            <button
              className={`px-4 py-2 font-bold rounded shadow ${tab === 'pav6' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTab('pav6')}
            >
              6º PAVIMENTO
            </button>
          </div>
          {/* Lista de itens */}
          <ol className="list-decimal list-inside text-gray-700 text-lg space-y-1 mb-2">
            <li>Entrada Residencial</li>
            <li>Entrada Serviço</li>
            <li>Portaria</li>
            <li>Hall Social</li>
            <li>Delivery Room</li>
            <li>Entrada Veículos</li>
          </ol>
          <hr className="my-2 border-gray-300" />
          <ol className="list-decimal list-inside text-gray-700 text-lg space-y-1" start={7}>
            <li>Loja</li>
            <li>Entrada Home Studio<span className="text-xs align-super">*</span></li>
          </ol>
          <p className="text-xs text-gray-400 mt-2">* Área exclusiva para as unidades Itacema 366, com acesso independente.</p>
        </div>
      </div>
    </section>
  );
}
