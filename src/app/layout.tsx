import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Climagem Aracaju | Clínica de Diagnóstico por Imagem",
  description: "Realize seus exames com segurança e precisão na Climagem. Ultrassonografia, Mamografia, Raio-X, ECG e muito mais.",
  keywords: ["clínica de imagem em Aracaju", "ultrassonografia Aracaju", "mamografia Aracaju", "exames de imagem Sergipe", "diagnóstico por imagem Aracaju"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className={`${inter.className} min-h-screen bg-background text-foreground flex flex-col antialiased`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
