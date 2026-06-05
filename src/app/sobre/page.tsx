import { Users, Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Climagem",
  description: "Conheça a história, missão, visão e valores da Climagem. Mais de 25 anos de experiência em diagnóstico por imagem em Aracaju.",
};

export default function SobrePage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Nossa História</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de 25 anos, a Climagem iniciou sua jornada com o compromisso de trazer para Aracaju tecnologia de ponta em diagnóstico por imagem, aliado a um atendimento humanizado.
          </p>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-primary mx-auto rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Missão</h3>
            <p className="text-gray-600">
              Oferecer diagnósticos por imagem com precisão, ética e agilidade, contribuindo para a promoção da saúde e bem-estar dos nossos pacientes através de um atendimento acolhedor.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-primary mx-auto rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Visão</h3>
            <p className="text-gray-600">
              Ser reconhecida como a clínica de referência em diagnóstico por imagem em Sergipe, destacando-se pela excelência médica, inovação tecnológica e cuidado humanizado.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-primary mx-auto rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Valores</h3>
            <ul className="text-gray-600 space-y-2 text-left inline-block">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Ética e Transparência</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Humanização</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Inovação Tecnológica</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Precisão</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Respeito à Vida</li>
            </ul>
          </div>
        </div>

        {/* Estrutura Física */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary text-center mb-12">Estrutura Física</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 aspect-video rounded-3xl flex items-center justify-center">
              <span className="text-gray-500">Foto Recepção</span>
            </div>
            <div className="bg-gray-200 aspect-video rounded-3xl flex items-center justify-center">
              <span className="text-gray-500">Foto Sala de Espera</span>
            </div>
            <div className="bg-gray-200 aspect-video rounded-3xl flex items-center justify-center">
              <span className="text-gray-500">Foto Equipamento RM</span>
            </div>
            <div className="bg-gray-200 aspect-video rounded-3xl flex items-center justify-center">
              <span className="text-gray-500">Foto Sala de Exames</span>
            </div>
          </div>
        </div>

        {/* Equipe Médica */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Nossa Equipe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Contamos com um corpo clínico altamente qualificado e especializado para garantir laudos com a máxima precisão.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="aspect-square bg-blue-50 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary opacity-50" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold font-heading text-foreground mb-1">Dr. Exemplo Médico {i}</h4>
                  <p className="text-accent text-sm font-bold mb-3">CRM-SE 1234 • RQE 5678</p>
                  <p className="text-gray-500 text-sm">Especialista em Radiologia e Diagnóstico por Imagem.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
