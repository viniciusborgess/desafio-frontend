"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import type { StaticImageData } from "next/image";

interface HeroShowcaseProps {
  image: string | StaticImageData;
  tag?: string;
  title: string;
  subtitle: string;
  location: string;
  buttonText: string;
}

export function HeroShowcase({ image, tag = 'LANÇAMENTO', title, subtitle, location, buttonText }: HeroShowcaseProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([
        tagRef.current,
        titleRef.current,
        subtitleRef.current,
        locationRef.current,
        buttonRef.current
      ], { opacity: 0, y: 40 });
      gsap.to(tagRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 });
      gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.5 });
      gsap.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.7 });
      gsap.to(locationRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.9 });
      gsap.to(buttonRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[70vh] sm:min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/foto-header.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full brightness-[.45]"
          priority
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-2 sm:px-4">
        <div ref={tagRef} className="mb-2 sm:mb-4 inline-block px-3 sm:px-4 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase shadow-lg">
          {tag}
        </div>
        <div ref={titleRef} className="text-2xl sm:text-4xl md:text-6xl font-light text-white drop-shadow-lg leading-tight">
          {title}
        </div>
        <div ref={subtitleRef} className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-2 sm:mb-4">
          {subtitle}
        </div>
        <div ref={locationRef} className="text-base sm:text-lg md:text-xl text-slate-200 font-medium mb-4 sm:mb-8 tracking-wide drop-shadow-md">
          {location}
        </div>
        <div ref={buttonRef} className="w-full flex items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
          <hr className="w-8 sm:w-16 border-t border-slate-400/80" />
          <Button variant="primary" size="lg" className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:scale-105 transition-all duration-800 bg-slate-900 text-white border-none">
            {buttonText}
          </Button>
          <hr className="w-8 sm:w-16 border-t border-slate-400/80" />
        </div>
      </div>
    </section>
  );
}

export const Hero = HeroShowcase;
