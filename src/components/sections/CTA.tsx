import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Precisa realizar um exame?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Nossa equipe está pronta para ajudar você. Agende agora mesmo com praticidade e rapidez pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://api.whatsapp.com/send?phone=5579988789969"
                target="_blank"
                className="bg-accent hover:bg-[#FFA500]/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Agendar Exame
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5579988789969"
                target="_blank"
                className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
