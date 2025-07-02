import Link from 'next/link';
import Image from 'next/image';
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroShowcase } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Neighborhood } from "@/components/sections/neighborhood";
import { Contact } from "@/components/sections/contact";
import { Highlights } from '@/components/sections/highlights';
import { AboutMBRAS } from '@/components/sections/about-mbras';
import { FAQ } from '@/components/sections/faq';
import { getPropertyByCode } from '@/lib/getProperties';
import { ImageSlider } from '@/components/ui/image-slider';

export default async function Home() {
  // Buscar imóvel do Supabase
  const property = await getPropertyByCode('MB18004');
  if (!property) return <div>Imóvel não encontrado</div>;
  return (
    <>
      <Header />
      <main>
        <HeroShowcase
          image="/img/foto-header.jpg"
          tag="EM DESTAQUE"
          title={property.name}
          subtitle={property.tagline}
          location={property.location}
          buttonText="Ver Propriedade"
        />

        {/* Seção Highlights */}
        <Highlights />

        {/* Seção de Destaque */}
        <section id="destaque" className="py-16 bg-slate-900">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Texto à esquerda */}
              <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left justify-center ">
                <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-widest mb-6 text-white">O Conceito dos melhores hotéis do mundo na sua casa</h2>
                <p className="text-base md:text-lg text-slate-200 max-w-xl mb-8 tracking-wide leading-relaxed">
                  {property.about.description}
                </p>
              </div>
              {/* Slider de imagens à direita */}
              <div className="md:w-1/2 w-full max-w-xl">
                <ImageSlider images={property.images} />
              </div>
            </div>
          </Container>
        </section>

        {/* Detalhes do imóvel, vizinhança e contato */}
        <About property={property} />
        <Neighborhood property={property} />
        <AboutMBRAS />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}