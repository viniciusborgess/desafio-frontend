import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ITACEMA 366 | MBRAS Imóveis",
  description: "Viva o melhor do Itaim Bibi em um imóvel exclusivo de alto padrão",
  keywords: ["imóvel de luxo", "apartamento", "Itaim Bibi", "São Paulo", "alto padrão"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${raleway.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
