"use client";
import { useState } from "react";
import { Search, Info, Clock, AlertTriangle } from "lucide-react";

export default function ExamesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const exames = [
    {
      nome: "Ultrassonografia Abdominal Total",
      descricao: "Exame que avalia os órgãos sólidos do abdome, como fígado, vesícula biliar, pâncreas, baço e rins.",
      indicacoes: "Dor abdominal, pesquisa de cálculos, avaliação de tumores.",
      preparo: "Jejum absoluto de 8 horas e bexiga cheia.",
      tempo: "15 a 20 minutos",
    },
    {
      nome: "Mamografia Digital",
      descricao: "Radiografia das mamas, principal exame para detecção precoce do câncer de mama.",
      indicacoes: "Rastreamento anual para mulheres acima de 40 anos ou diagnóstico de nódulos.",
      preparo: "Não usar desodorante, talco ou creme nas mamas e axilas no dia do exame.",
      tempo: "15 minutos",
    },
    {
      nome: "Raio-X de Tórax",
      descricao: "Exame de imagem rápido e indolor para avaliar pulmões, coração e parede torácica.",
      indicacoes: "Tosse persistente, falta de ar, dor no peito.",
      preparo: "Não há preparo específico. Retirar objetos metálicos.",
      tempo: "5 a 10 minutos",
    },
    {
      nome: "Eletrocardiograma (ECG)",
      descricao: "Registra a atividade elétrica do coração para identificar arritmias e outras alterações.",
      indicacoes: "Check-up cardiológico, dor no peito, palpitações.",
      preparo: "Não é necessário jejum. Evitar exercícios físicos intensos antes do exame.",
      tempo: "5 a 10 minutos",
    }
  ];

  const filteredExames = exames.filter(e => 
    e.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header & Search */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Nossos Exames</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Consulte as informações sobre preparo, indicações e detalhes dos exames realizados na Climagem.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Busque por um exame..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-lg"
            />
          </div>
        </div>

        {/* List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredExames.map((exame, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">{exame.nome}</h3>
              <p className="text-gray-600 mb-6 text-lg">{exame.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 rounded-xl p-6">
                <div>
                  <h4 className="font-bold flex items-center gap-2 text-foreground mb-2">
                    <Info className="w-5 h-5 text-accent" /> Indicações
                  </h4>
                  <p className="text-sm text-gray-600">{exame.indicacoes}</p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 text-foreground mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" /> Preparo
                  </h4>
                  <p className="text-sm text-gray-600">{exame.preparo}</p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 text-foreground mb-2">
                    <Clock className="w-5 h-5 text-primary" /> Tempo Médio
                  </h4>
                  <p className="text-sm text-gray-600">{exame.tempo}</p>
                </div>
              </div>
            </div>
          ))}
          {filteredExames.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-lg">
              Nenhum exame encontrado para "{searchTerm}".
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center text-primary mb-8">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-lg mb-2">Preciso agendar todos os exames?</h4>
              <p className="text-gray-600">Sim, recomendamos o agendamento prévio para garantir o seu atendimento no horário desejado e receber as orientações de preparo.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-lg mb-2">Em quanto tempo o resultado fica pronto?</h4>
              <p className="text-gray-600">O prazo varia conforme o exame, mas a maioria dos laudos de raio-x e ultrassom ficam prontos em até 2 horas. Você pode acessar os resultados online.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
