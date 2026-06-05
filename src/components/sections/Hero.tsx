"use client";

import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import { Typewriter } from "@/components/ui/Typewriter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920", // Reception/Clinic
  "https://images.unsplash.com/photo-1582750433449-648ed127c09e?auto=format&fit=crop&q=80&w=1920", // Doctor/Patient
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1920", // Modern Tech
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3D3B73] to-[#7058A3]">
      {/* Background Image Carousel (Desktop Only) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={CAROUSEL_IMAGES[currentImage]}
            alt="Climagem Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark/Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D3B73]/90 via-[#7058A3]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-start pt-32 md:pt-40 pb-24 text-white">
        <div className="max-w-3xl">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-white/30 mb-6 inline-block shadow-sm">
            Cuidando da sua Saúde
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-8 text-white drop-shadow-lg">
            Diagnóstico com <br className="hidden md:block" />
            <span className="block md:inline min-h-[1.2em]">
              <Typewriter 
                phrases={["Precisão", "Cuidado", "Tecnologia", "Excelência"]} 
                typingSpeed={100} 
                deletingSpeed={50} 
                delayBetween={2500} 
              />
            </span>
            <br />para sua Família
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-light">
            Exames de imagem realizados com equipamentos de ponta e profissionais especializados para garantir o conforto e a segurança que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="https://api.whatsapp.com/send?phone=5579988789969"
              target="_blank"
              className="bg-accent hover:bg-[#b06a85] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(209,132,162,0.6)] hover:shadow-[0_0_30px_rgba(209,132,162,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              <Calendar className="w-5 h-5" />
              Agendar Exame
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5579988789969"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg backdrop-blur-md shadow-lg hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
