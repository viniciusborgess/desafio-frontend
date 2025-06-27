import React from 'react';
import { Container } from '@/components/ui/container';
import { PropertyData } from '@/types/special';
import { Shield, School, Hospital, Trees } from 'lucide-react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface NeighborhoodProps {
  property: PropertyData;
}

const iconMap = { Shield, School, Hospital, Trees };

export function Neighborhood({ property }: NeighborhoodProps) {
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
    <section ref={sectionRef} className="py-16 bg-slate-900" id="neighborhood">
      <Container>
        <h2 className="text-3xl font-sans font-bold mb-2 text-white">Vizinhança Premium</h2>
        <p className="text-slate-200 mb-8 text-lg">Conheça os diferenciais da região</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {property.neighborhoodDifferentials.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={index} className="flex gap-4">
                <div className={`${item.iconBackground} ${item.iconColor} p-3 rounded-lg h-fit`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white font-sans">{item.title}</h3>
                  <p className="text-slate-200">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-slate-800 rounded-xl p-8 shadow-inner">
          <h3 className="text-2xl font-bold font-sans mb-6 text-white text-center">A poucos passos de tudo</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {property.walkDistanceStats.map((stat, index) => (
              <div key={index} className="p-4 bg-slate-900 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
