import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { value: "+500", label: "Anfitriões Treinados" },
  { value: "10x", label: "Retorno Médio" },
  { value: "98%", label: "Satisfação dos Alunos" },
  { value: "27", label: "Estados Atendidos" },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
            Método Anfitrião 10x — por Gustavo Correia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-6">
            A estratégia que multiplica seus ganhos com imóveis por{" "}
            <span className="text-primary font-normal">10x</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
            Aprenda as estratégias de marketing imobiliário que transformam anfitriões comuns em anfitriões de alta performance — sem terceirizar a gestão do seu imóvel.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-normal tracking-wide group"
          >
            Quero aprender o método
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-light text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
