import { Star } from "lucide-react";

export function Depoimentos() {
  const depoimentos = [
    {
      nome: "Maria Oliveira",
      texto: "Excelente atendimento! Equipe muito atenciosa desde a recepção até a realização do exame. A médica que fez minha ultrassonografia explicou tudo com muita calma.",
    },
    {
      nome: "João Silva",
      texto: "Clínica muito bem estruturada, limpa e com equipamentos modernos. O resultado do meu raio-x saiu super rápido. Recomendo a todos em Aracaju.",
    },
    {
      nome: "Ana Beatriz",
      texto: "Fiz minha mamografia de rotina e me senti muito acolhida. Profissionais humanos e simpáticos. Estão de parabéns pelo serviço prestado.",
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">O que dizem nossos pacientes</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            A satisfação e a saúde de quem confia na Climagem são a nossa maior recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((dep, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-blue-50 text-lg italic mb-6 leading-relaxed">"{dep.texto}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-xl">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-heading">{dep.nome}</h4>
                  <span className="text-sm text-blue-200">Paciente</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
