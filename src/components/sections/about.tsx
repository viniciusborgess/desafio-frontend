import React from 'react';
import { Container } from '@/components/ui/container';
import { PropertyData } from '@/types/special';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  property: PropertyData;
}

export function About({ property }: AboutProps) {
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
    <section ref={sectionRef} className="py-16 bg-slate-50" id="about">
      <Container>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-sans font-bold mb-6 text-slate-900">Sobre a Propriedade</h2>
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg leading-relaxed text-slate-700">{property.about.description}</p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900 font-sans">Destaques</h3>
              <ul className="space-y-3">
                {property.about.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-slate-900 mt-0.5" />
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {property.characteristics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 font-sans">{item.label}</h3>
                </div>
                <p className="text-2xl font-semibold text-color-900">{item.value}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
