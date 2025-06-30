import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { PropertyData } from '@/types/special';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Phone, Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ContactProps {
  property: PropertyData;
}

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' }),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact({ property }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(null);
    const { error } = await supabase.from('contacts').insert([
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        property_code: property?.code || null,
        created_at: new Date().toISOString(),
      },
    ]);
    setLoading(false);
    if (error) {
      setError('Erro ao enviar mensagem. Tente novamente.');
      return;
    }
    setIsSubmitted(true);
  }

  const formatWhatsAppNumber = (number: string) => {
    return `https://wa.me/${number}`;
  };

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-sans font-bold mb-2 text-slate-900">Entre em Contato</h2>
        <p className="text-slate-600 mb-8 text-lg">
          Agende uma visita exclusiva ou solicite mais informações
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold font-sans text-green-700 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-700 mb-4">
                  Obrigado pelo seu interesse. Entraremos em contato em breve.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4 text-slate-900 font-sans">Solicite Informações</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Gostaria de mais informações sobre este imóvel..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" variant="primary" className="w-full bg-slate-900" disabled={loading}>
                      {loading ? 'Enviando...' : (<><Send className="h-4 w-4 mr-2" /> Enviar Mensagem</>)}
                    </Button>
                  </form>
                </Form>
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold font-sans mb-4 text-slate-900">Atendimento Imediato</h3>
              <p className="text-slate-700 mb-4">
                Nossos consultores estão prontos para atendê-lo e esclarecer todas as suas dúvidas sobre este imóvel de
                alto padrão.
              </p>
              
              <a
                href={formatWhatsAppNumber(property.contact.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="primary" size="lg" className="w-full group bg-slate-900">
                  <Phone className="h-5 w-5 mr-2 transition-transform group-hover:-rotate-12" />
                  Falar via WhatsApp
                </Button>
              </a>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 font-sans">Exclusividade MBRAS Imóveis</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>Tour virtual disponível</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>Assessoria jurídica completa</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>Financiamento facilitado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
