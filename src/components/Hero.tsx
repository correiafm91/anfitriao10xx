import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { value: "+1.000", label: "Corretores Treinados" },
  { value: "10x", label: "Mais Resultados" },
  { value: "Grátis", label: "Diagnóstico Inicial" },
  { value: "#1", label: "Consultoria do Brasil" },
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card mb-8 text-sm"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Diagnóstico gratuito —</span>
            <span className="text-primary font-medium">Solicite agora</span>
          </motion.div>

          <div className="flex justify-center mb-8">
            <img
              src="https://i.postimg.cc/tJ2vGVrw/658211288-17893525920436451-2969698379029917654-n.jpg"
              alt="Pro Estate Logo"
              className="h-20 md:h-28 object-contain"
            />
          </div>

          <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
            Pro Estate — Consultoria de Marketing para Corretores de Imóveis
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-6">
            Estratégias de{" "}
            <span className="text-primary font-normal">marketing imobiliário</span>{" "}
            para você se destacar
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-4">
            Nossa equipe cria estratégias personalizadas de marketing e posicionamento para corretores de imóveis que querem dominar o mercado. Comece com um diagnóstico gratuito.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary font-medium mb-10">
            <ShieldCheck className="w-5 h-5" />
            <span>Diagnóstico gratuito · Consultoria personalizada · Resultados comprovados</span>
          </div>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-normal tracking-wide group"
          >
            Solicitar diagnóstico gratuito
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
            <div key={i} className="text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
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
