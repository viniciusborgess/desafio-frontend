import { Header } from '@/components/sections/header';
import { notFound } from 'next/navigation';
import { Contact } from '@/components/sections/contact';
import { getPropertyByCode } from '@/lib/getProperties';

export default async function ImovelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== 'contato') return notFound();

  const property = await getPropertyByCode('MB18004');
  if (!property) return notFound();

  return (
    <>
      <Header />
      <div className="mt-20">
        <Contact property={property} />
      </div>
    </>
  );
}