'use client';
import Image from 'next/image';
import { useState } from 'react';

export function ImageSlider({ images }: { images: string[] }) {
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