"use client";
import React, { useState } from "react";

const perguntas = [
  {
    pergunta: "Onde fica a MBRAS?",
    resposta: "A MBRAS está sediada no Cidade Jardim Corporate Center, em São Paulo, uma das regiões mais sofisticadas da cidade, próxima ao Shopping Cidade Jardim.",
  },
  {
    pergunta: "Como surgiu a MBRAS?",
    resposta: "A MBRAS nasceu do desejo de oferecer um atendimento imobiliário diferenciado, focado em exclusividade, transparência e alto padrão.",
  },
  {
    pergunta: "Quais diferenciais a MBRAS oferece além das transações imobiliárias?",
    resposta: "Oferecemos assessoria jurídica, tour virtual, atendimento personalizado e acesso a oportunidades exclusivas no mercado de alto padrão.",
  },
  {
    pergunta: "O que é o MBRAS Club?",
    resposta: "O MBRAS Club oferece consultoria especializada, precificação precisa com base em dados e divulgação digital segmentada. Com uma base interna de clientes qualificados, conectamos imóveis de alto padrão a oportunidades reais, gerando valor para quem vende e para quem compra.",
  },
  {
    pergunta: "Quais são as vantagens do MBRAS Off Market?",
    resposta: "Acesso a imóveis que não estão anunciados publicamente, garantindo discrição e oportunidades únicas.",
  },
  {
    pergunta: "Como a MBRAS garante a privacidade dos clientes?",
    resposta: "Seguimos rigorosos protocolos de confidencialidade e proteção de dados em todas as etapas do atendimento.",
  },
];

export function FAQ() {
  const [aberta, setAberta] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setAberta(aberta === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-sans font-light text-center text-slate-900 mb-8">Perguntas Frequentes</h2>
        
        <p className="text-gray-500 text-center mb-10 text-lg">Esclareça suas dúvidas sobre nossos serviços e soluções exclusivas de altíssimo padrão</p>
        <div className="flex flex-col gap-4">
          {perguntas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-gray-800 focus:outline-none hover:bg-gray-100 transition-colors"
                onClick={() => toggle(idx)}
                aria-expanded={aberta === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span>{item.pergunta}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${aberta === idx ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-content-${idx}`}
                className={`px-6 pb-5 text-gray-600 text-base transition-all duration-300 ${aberta === idx ? "block" : "hidden"}`}
              >
                {item.resposta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 