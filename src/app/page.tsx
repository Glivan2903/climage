import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Exames } from "@/components/sections/Exames";
import { Convenios } from "@/components/sections/Convenios";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Diferenciais />
      <Exames />
      <Convenios />
      <Depoimentos />
      <CTA />
    </>
  );
}
