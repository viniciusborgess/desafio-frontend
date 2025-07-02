import { Header } from '@/components/sections/header';
import { Neighborhood } from '@/components/sections/neighborhood';
import { itacema366Data } from '@/app/data/imovel';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Contact } from '@/components/sections/contact';

interface Props {
  params: { slug: string };
}

export default function ImovelPage({ params }: Props) {
  if (params.slug !== 'contato') return notFound();
  return (
    <>
      <Header />
      <div className="mt-20">
        <Contact property={itacema366Data} />
      </div>
    </>
  );
}
