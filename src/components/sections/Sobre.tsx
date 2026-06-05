export function Sobre() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Imagem / Video */}
        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              {/* Placeholder da foto da clinica */}
              <div className="text-center p-8">
                <span className="text-primary font-bold text-xl block mb-2">Estrutura Completa</span>
                <span className="text-gray-600">Ambiente preparado para o seu conforto.</span>
              </div>
            </div>
          </div>
          
          {/* Numeros em destaque */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <span className="block text-2xl font-bold text-primary font-heading">25</span>
              <span className="text-sm text-gray-600">Anos de atuação</span>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <span className="block text-2xl font-bold text-primary font-heading">10k+</span>
              <span className="text-sm text-gray-600">Exames/mês</span>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <span className="block text-2xl font-bold text-primary font-heading">50+</span>
              <span className="text-sm text-gray-600">Especialistas</span>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Nossa História</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6 leading-tight">
            Há 25 anos cuidando da saúde dos sergipanos
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              A Climagem é uma clínica especializada em diagnóstico por imagem que une experiência, tecnologia e atendimento humanizado para oferecer exames com precisão e segurança.
            </p>
            <p>
              Desde nossa fundação, temos o compromisso de trazer para Aracaju e toda a região o que há de mais moderno em tecnologia médica, garantindo que nossos pacientes recebam diagnósticos rápidos e precisos.
            </p>
            <p>
              Nossa equipe é formada por profissionais altamente capacitados que entendem que por trás de cada exame existe uma vida, garantindo o conforto e o acolhimento necessários em todos os momentos.
            </p>
          </div>
          <button className="mt-8 text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 group">
            Conheça mais sobre nós
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
