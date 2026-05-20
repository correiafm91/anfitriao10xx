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
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-extralight tracking-tight">
                    Pro<span className="text-primary font-normal">Estate</span>
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    SDR · Real Estate
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-light text-xl">#1</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Sobre a Pro Estate
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
              A maior operação de SDR do mundo para{" "}
              <span className="text-primary font-normal">corretores de imóveis</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                A Pro Estate é uma empresa especializada em terceirização da área de vendas para o mercado imobiliário. Montamos e operamos times de SDR que prospectam, qualificam e entregam clientes prontos para o corretor fechar.
              </p>
              <p>
                Somos a maior operação do mundo nesse modelo — combinando processo, tecnologia e SDRs treinados em alta performance comercial focados exclusivamente em imóveis.
              </p>
              <p>
                Direto ao ponto: você não perde mais tempo com lead frio. A gente capta, qualifica e agenda. Você fecha.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
              >
                Diagnóstico gratuito
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
