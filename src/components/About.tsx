import { motion } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6" id="sobre">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center p-8">
                <img
                  src="https://i.postimg.cc/2SSyZ8KK/1000296135.jpg"
                  alt="C4 Sales — Aceleradora de Vendas para Empresas"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-light text-2xl">C4</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Sobre a C4 Sales
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
              A aceleradora de vendas que coloca{" "}
              <span className="text-primary font-normal">empresas em movimento</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                A C4 Sales é uma aceleradora de vendas que ajuda empresas a estruturarem máquinas comerciais previsíveis — com processo, prospecção ativa, time treinado e gestão por dados.
              </p>
              <p>
                Já atendemos mais de 1.000 empresas em todo o Brasil, transformando operações desorganizadas em times comerciais de alta performance e crescimento previsível.
              </p>
              <p>
                Um método direto ao ponto, focado em resultado. Sem teoria vazia — apenas o que funciona para acelerar o faturamento da sua empresa.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
              >
                Diagnóstico gratuito
              </Button>
              <a
                href="https://instagram.com/c4sales_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
              >
                @c4sales_
              </a>
              <a
                href="https://youtube.com/@c4sales_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
              >
                YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
