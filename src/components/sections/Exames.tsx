import Link from "next/link";
import { Stethoscope, FileHeart, ScanLine, ArrowRight } from "lucide-react";

const exames = [
  {
    nome: "Ultrassonografia",
    descricao: "Imagens em tempo real dos órgãos internos com alta resolução.",
    icon: <ScanLine className="w-8 h-8" />
  },
  {
    nome: "Mamografia Digital",
    descricao: "Prevenção e diagnóstico precoce com máximo conforto.",
    icon: <HeartIcon />
  },
  {
    nome: "Raio-X Digital",
    descricao: "Imagens rápidas e precisas com menor exposição à radiação.",
    icon: <Stethoscope className="w-8 h-8" />
  },
  {
    nome: "Eletrocardiograma",
    descricao: "Avaliação rápida e segura da saúde do seu coração.",
    icon: <FileHeart className="w-8 h-8" />
  }
];

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  );
}

export function Exames() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Exames Realizados
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos uma ampla variedade de exames de diagnóstico por imagem com precisão e segurança para você.
            </p>
          </div>
          <Link href="/exames" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
            Ver todos os exames
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {exames.map((exame, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent transition-all duration-300 group cursor-pointer flex flex-col h-full">
              <div className="text-primary group-hover:text-accent transition-colors mb-4">
                {exame.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-3">{exame.nome}</h3>
              <p className="text-gray-600 mb-6 flex-1">{exame.descricao}</p>
              <span className="text-sm font-bold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/exames" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
            Ver todos os exames
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
