"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Exames", href: "/exames" },
    { name: "Convênios", href: "/convenios" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className={`transition-all duration-500 bg-white rounded-xl shadow-md p-2 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <Logo className="h-[72px] w-auto" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-semibold tracking-wide transition-all duration-300 relative group ${
                scrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-accent' : 'bg-white'
              }`}></span>
            </Link>
          ))}

          <div className={`flex items-center gap-3 border-l pl-6 ml-2 transition-colors duration-300 ${scrolled ? 'border-primary/20' : 'border-white/20'}`}>
            <Link
              href="/resultados"
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                scrolled
                  ? 'border-primary text-primary hover:bg-primary/5'
                  : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              Resultado Exames
            </Link>
            <Link
              href="/empresa"
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                scrolled
                  ? 'border-primary text-primary hover:bg-primary/5'
                  : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              Acesso Empresa
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5579988789969"
              target="_blank"
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-accent text-white hover:bg-[#b06a85] hover:shadow-accent/30' 
                  : 'bg-white text-primary hover:bg-gray-50 hover:shadow-white/20'
              }`}
            >
              Agendar
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden p-2 rounded-full transition-colors ${
            scrolled ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground font-semibold text-lg border-b border-gray-100 pb-2 hover:text-primary transition-colors hover:pl-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="/resultados"
              className="border-2 border-primary text-primary px-6 py-3 rounded-full font-bold text-center hover:bg-primary/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resultado Exames
            </Link>
            <Link
              href="/empresa"
              className="border-2 border-primary text-primary px-6 py-3 rounded-full font-bold text-center hover:bg-primary/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Acesso Empresa
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5579988789969"
              target="_blank"
              className="bg-accent text-white px-6 py-4 rounded-full font-bold text-center shadow-lg hover:bg-[#b06a85] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Agendar Exame no WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
