import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand & About */}
        <div>
          <Link href="/" className="block mb-6 hover:opacity-90 transition-opacity">
            <Logo width="160" height="auto" />
          </Link>
          <p className="mb-6 leading-relaxed">
            Uma clínica moderna, confiável, tecnológica e preparada para cuidar da saúde dos pacientes com excelência.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/climagemaju/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors text-white" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 font-heading">Acesso Rápido</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/sobre" className="hover:text-accent transition-colors">Sobre a Clínica</Link></li>
            <li><Link href="/exames" className="hover:text-accent transition-colors">Nossos Exames</Link></li>
            <li><Link href="/convenios" className="hover:text-accent transition-colors">Convênios Aceitos</Link></li>
            <li><Link href="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Exames */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 font-heading">Principais Exames</h3>
          <ul className="space-y-3">
            <li><Link href="/exames" className="hover:text-accent transition-colors">Ultrassonografia</Link></li>
            <li><Link href="/exames" className="hover:text-accent transition-colors">Mamografia Digital</Link></li>
            <li><Link href="/exames" className="hover:text-accent transition-colors">Raio-X Digital</Link></li>
            <li><Link href="/exames" className="hover:text-accent transition-colors">Eletrocardiograma</Link></li>
            <li><Link href="/exames" className="hover:text-accent transition-colors">Exames Laboratoriais</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 font-heading">Fale Conosco</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <span>Rua Arauá, 545 - São José<br/>Aracaju - SE</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>(79) 3214-1899</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span>contato@climagem.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Clínica Climagem. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade (LGPD)</Link>
        </div>
      </div>
    </footer>
  );
}
