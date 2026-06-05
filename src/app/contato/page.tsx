import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">Entre em Contato</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Tire dúvidas, agende exames ou envie suas sugestões.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="flex-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Informações</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Endereços</h4>
                    <p className="text-gray-600">
                      <strong>Unidade I:</strong> Rua Lagarto, 1409 - São José<br/>
                      <strong>Unidade II:</strong> Rua Arauá, 545 - São José<br/>
                      Aracaju - SE
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Telefone e WhatsApp</h4>
                    <p className="text-gray-600">(79) 98878-9969 / (79) 3214-1899</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">E-mail</h4>
                    <p className="text-gray-600">contato@climagem.com.br</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda à Sexta: 06:30 às 17:00<br/>
                      Sábado: 06:30 às 11:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="flex-[1.5]">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input type="text" id="nome" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                    <input type="tel" id="telefone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="mensagem" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="button" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa Integrado (Placeholder) */}
        <div className="mt-16 bg-gray-200 w-full h-[400px] rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 flex items-center justify-center">
           <div className="text-center text-gray-500">
             <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
             <p>Mapa Interativo do Google Maps (Unidade Lagarto ou Arauá)</p>
           </div>
        </div>
      </div>
    </div>
  );
}
