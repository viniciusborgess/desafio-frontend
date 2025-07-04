import React from 'react';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 pt-8 sm:pt-12 pb-4 sm:pb-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-3 sm:mb-4">MBRAS Imóveis</h3>
            <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Especialistas em imóveis de alto padrão com mais de 15 anos de experiência em proporcionar 
              experiências imobiliárias excepcionais para clientes exigentes.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="#" 
                className="text-white hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
         
          <div>
            <h4 className="text-white text-base sm:text-lg font-medium mb-3 sm:mb-4 font-sans">Links Rápidos</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="#about" className="hover:text-amber-500 transition-colors font-sans">
                  Sobre o Imóvel
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-amber-500 transition-colors font-sans">
                  Galeria de Fotos
                </Link>
              </li>
              <li>
                <Link href="#neighborhood" className="hover:text-amber-500 transition-colors">
                  Vizinhança
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-500 transition-colors">
                  Entre em Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Serviços */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-medium mb-3 sm:mb-4 font-sans">Nossos Serviços</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Compra e Venda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Avaliação de Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Consultoria Imobiliária
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Administração de Patrimônio
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-medium mb-3 sm:mb-4 font-sans">Contato</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex gap-3 items-start">
                <Mail className="h-5 w-5 flex-shrink-0 text-amber-500 mt-0.5" />
                <span>contato@mbrasimoveis.com.br</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="h-5 w-5 flex-shrink-0 text-amber-500 mt-0.5" />
                <span>11 5185-6999</span>
              </li>
              <li>
                <address className="not-italic text-sm">
                Avenida Magalhães de Castro 4.800<br />
                  Cidade Jardim, São Paulo - SP<br />
                  CEP: 05676-120
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-4 sm:pt-6 mt-4 sm:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm">
              &copy; {currentYear} MBRAS Imóveis. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
