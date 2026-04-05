import { motion } from "framer-motion";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { value: "+1.000", label: "Corretores Treinados" },
  { value: "10x", label: "Mais Resultados" },
  { value: "R$297", label: "Investimento" },
  { value: "#1", label: "Workshop do Brasil" },
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
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Inscrições abertas —</span>
            <span className="text-primary font-medium">Vagas limitadas para dia 13 de Abril</span>
          </motion.div>

          <div className="flex justify-center mb-8">
            <img
              src="https://i.postimg.cc/tJ2vGVrw/658211288-17893525920436451-2969698379029917654-n.jpg"
              alt="Pro Estate Logo"
              className="h-20 md:h-28 object-contain"
            />
          </div>

          <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
            Workshop Pro Estate — O Maior Treinamento para Corretores do Brasil
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-6">
            Destaque-se como{" "}
            <span className="text-primary font-normal">corretor de imóveis</span>{" "}
            no mercado
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-4">
            O maior workshop ao vivo para corretores de imóveis do Brasil. Aprenda as estratégias de marketing e posicionamento que vão te destacar no mercado imobiliário.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary font-medium mb-10">
            <Clock className="w-5 h-5" />
            <span>13 de Abril às 10h — 1 hora intensa ao vivo por R$297</span>
          </div>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-normal tracking-wide group"
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
