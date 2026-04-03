import { motion } from "framer-motion";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { value: "+1.000", label: "Corretores Treinados" },
  { value: "30k", label: "Em 3 Meses" },
  { value: "3 dias", label: "De Masterclass" },
  { value: "#1", label: "Treinamento do Brasil" },
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
          {/* Scarcity banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card mb-8 text-sm"
          >
            <AlertTriangle className="w-4 h-4 text-foreground" />
            <span className="text-muted-foreground">Inscrições abertas —</span>
            <span className="text-foreground font-medium">Vagas limitadas para Abril</span>
          </motion.div>

          <span className="text-foreground font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
            Masterclass Corretor 10x — por Gustavo Correia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-6">
            Do zero a{" "}
            <span className="text-foreground font-normal">R$30 mil</span>{" "}
            em 3 meses como corretor de seguros
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-4">
            O maior treinamento de corretores de seguros do Brasil. Aprenda as estratégias de marketing e posicionamento que vão te destacar no mercado.
          </p>

          <div className="flex items-center justify-center gap-2 text-foreground font-medium mb-10">
            <Clock className="w-5 h-5" />
            <span>15, 16 e 17 de Abril — 3 dias de aulas ao vivo</span>
          </div>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-10 py-6 text-base font-normal tracking-wide group"
          >
            Garantir minha vaga agora
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
              <div className="text-3xl md:text-4xl font-light text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
