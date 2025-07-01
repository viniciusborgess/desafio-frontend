import { notFound } from 'next/navigation';
import { itacema366Data } from '@/app/data/imovel';
import { Hero } from "@/components/sections/hero";
import { Gallery } from "@/components/sections/gallery";
import { About } from "@/components/sections/about";
import { Neighborhood } from "@/components/sections/neighborhood";
import { Contact } from "@/components/sections/contact";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

type PropertyPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PropertyPageProps) {
  const { slug } = params;
  if (slug !== 'itacema-366') {
    return {
      title: 'Imóvel não encontrado | MBRAS Imóveis',
    };
  }

  return {
    title: `${itacema366Data.name} | MBRAS Imóveis`,
    description: `${itacema366Data.tagline} - ${itacema366Data.location}`,
    openGraph: {
      images: [itacema366Data.images[0]],
    },
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = params;
  if (slug !== 'itacema-366') {
    notFound();
  }

  const propertyData = itacema366Data;

  return (
    <>
      <Header />
      <main>
        <Hero
          image={propertyData.images[0]}
          tag="LANÇAMENTO"
          title={propertyData.name}
          subtitle={propertyData.tagline}
          location={propertyData.location}
          buttonText="Agendar Visita"
        />
        <Gallery property={propertyData} />
        <About property={propertyData} />
        <Neighborhood property={propertyData} />
        <Contact property={propertyData} />
      </main>
      <Footer />
    </>
  );
}
