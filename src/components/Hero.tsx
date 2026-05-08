import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { value: "+1.000", label: "Empresas Aceleradas" },
  { value: "10x", label: "Crescimento Médio" },
  { value: "90 dias", label: "Para Resultados" },
  { value: "#1", label: "Aceleradora B2B" },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 text-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Aceleradora de vendas para</span>
            <span className="text-primary font-medium">empresas que querem escalar</span>
          </motion.div>

          <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
            C4 Sales
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-6">
            Acelere as vendas da sua{" "}
            <span className="text-primary font-normal">empresa</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-8">
            Consultoria estratégica que estrutura máquinas comerciais previsíveis — com processo, time treinado e prospecção ativa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Diagnóstico gratuito</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Plano personalizado</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Resultados em 90 dias</div>
          </div>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-normal tracking-wide group"
          >
            Quero meu diagnóstico gratuito
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
