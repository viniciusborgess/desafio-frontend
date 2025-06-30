"use client";

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={"fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2 transition-all duration-300"}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo-mbras.png"
              alt="Logo MBRAS"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="font-sans text-2xl font-bold text-slate-900">
              MBRAS
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-slate-700 hover:text-gray-500 transition-colors">
              Sobre
            </Link>
            <Link href="#gallery" className="text-slate-700 hover:text-gray-500 transition-colors">
              Galeria
            </Link>
            <Link href="#highlights" className="text-slate-700 hover:text-gray-500 transition-colors">
              Destaques
            </Link>
            <Link href="#contact" className="text-slate-700 hover:text-gray-500 transition-colors">
              Contato
            </Link>
            <Button variant="primary" size="sm" className='bg-slate-900'>
              Agendar Visita
            </Button>
          </nav>

          {/* Botão menu mobile */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu de navegação"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Container>
            <nav className="flex flex-col py-4 gap-4">
              <Link
                href="#about"
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#gallery"
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link
                href="#neighborhood"
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vizinhança
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Button variant="primary" className="mt-2 bg-slate-900">
                Agendar Visita
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
