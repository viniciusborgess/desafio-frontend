import { Header } from '@/components/sections/header';
import { Neighborhood } from '@/components/sections/neighborhood';
import { notFound } from 'next/navigation';
import { Contact } from '@/components/sections/contact';
import { getPropertyByCode } from '@/lib/getProperties';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ImovelPage({ params }: Props) {
  // Esperar o params ser resolvido (Next.js 15)
  const { slug } = await params;
  // Buscar imóvel do Supabase
  const property = await getPropertyByCode('MB18004');
  if (!property) return notFound();
  if (slug !== 'contato') return notFound();
  return (
    <>
      <Header />
      <div className="mt-20">
        <Contact property={property} />
      </div>
    </>
  );
}
