export function Convenios() {
  const convenios = [
    "Unimed",
    "Bradesco Saúde",
    "Amil",
    "SulAmérica",
    "Cassi",
    "Hapvida",
    "GEAP",
    "Assefaz"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
          Convênios Aceitos
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Atendemos diversos planos de saúde para garantir o seu acesso aos melhores diagnósticos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {convenios.map((convenio, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-xl h-24 flex items-center justify-center p-4 border border-gray-100 hover:border-accent hover:shadow-md transition-all grayscale hover:grayscale-0 cursor-pointer"
            >
              {/* Em um cenário real, seriam logos. Usando texto como placeholder. */}
              <span className="font-bold text-gray-400 font-heading text-lg">{convenio}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="/convenios" className="text-primary font-bold hover:text-accent transition-colors underline-offset-4 hover:underline">
            Ver lista completa de convênios
          </a>
        </div>
      </div>
    </section>
  );
}
