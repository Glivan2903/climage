import { Heart, Activity, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-8 h-8 text-accent" />,
    title: "Tecnologia Avançada",
    description: "Equipamentos modernos para maior precisão nos seus exames."
  },
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    title: "Atendimento Humanizado",
    description: "Foco no acolhimento, respeito e bem-estar de cada paciente."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Resultados Confiáveis",
    description: "Laudos elaborados por especialistas altamente qualificados."
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Agilidade",
    description: "Exames e resultados com rapidez para o seu tratamento não esperar."
  }
];

export function Diferenciais() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Nossos Diferenciais</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Combinamos tecnologia de ponta com um atendimento acolhedor para garantir a melhor experiência e precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
