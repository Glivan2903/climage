"use client";
import { useState } from "react";
import { Search, ShieldCheck } from "lucide-react";

export default function ConveniosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const convenios = [
    "Unimed", "Bradesco Saúde", "Amil", "SulAmérica", "Cassi", 
    "Hapvida", "GEAP", "Assefaz", "Camed", "Cassi", "Fachesf", 
    "Golden Cross", "IPES Saúde", "Postal Saúde"
  ].sort();

  const filteredConvenios = convenios.filter(c => 
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Convênios Aceitos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Trabalhamos com os melhores planos de saúde para garantir o seu cuidado. Verifique a cobertura do seu plano abaixo.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar convênio..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-lg"
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12 max-w-4xl mx-auto flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
          <div>
            <h4 className="font-bold text-primary mb-2 text-lg">Orientações para Atendimento</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Apresente a carteirinha física ou digital do convênio e um documento oficial com foto.</li>
              <li>A guia médica de solicitação de exames deve estar dentro da validade (geralmente 30 a 60 dias).</li>
              <li>Para alguns exames, pode ser necessária a autorização prévia do seu convênio. Nossa equipe pode ajudar nisso!</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {filteredConvenios.map((convenio, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:border-accent hover:shadow-md transition-all font-bold text-gray-700">
              {convenio}
            </div>
          ))}
        </div>

        {filteredConvenios.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-lg">
            Nenhum convênio encontrado para "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
}
