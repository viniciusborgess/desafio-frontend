"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { PropertyData } from '@/types/special';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface GalleryProps {
  property: PropertyData;
}

export function Gallery({ property }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;
  const totalPages = Math.ceil(property.images.length / imagesPerPage);
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleThumbnails = property.images.slice(0, 8); 

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">Galeria de Imagens</h2>

        <div className="relative mb-8">
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.images[currentIndex]}
              alt={`${property.name} - Imagem ${currentIndex + 1}`}
              fill
              style={{objectFit: 'cover'}}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="transition-opacity duration-500"
            />
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white text-sm">
            {currentIndex + 1} / {property.images.length}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {visibleThumbnails.map((image, index) => (
            <div 
              key={index}
              className={`aspect-[4/3] relative rounded cursor-pointer overflow-hidden transition-all hover:opacity-80 ${
                currentIndex === index ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image}
                alt={`${property.name} - Miniatura ${index + 1}`}
                fill
                style={{objectFit: 'cover'}}
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        
        {property.images.length > 8 && (
          <div className="text-center mt-4">
            <p className="text-slate-500 text-sm">+ {property.images.length - 8} imagens disponíveis</p>
          </div>
        )}
      </Container>
    </section>
  );
}
