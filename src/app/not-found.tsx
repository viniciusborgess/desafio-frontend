import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-5xl font-serif font-bold mb-6">Imóvel não encontrado</h1>
            <p className="text-xl text-slate-600 mb-8">
              O imóvel que você está procurando não existe ou foi removido.
            </p>
            <Link href="/">
              <Button variant="primary" size="lg">
                Voltar para a página inicial
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
