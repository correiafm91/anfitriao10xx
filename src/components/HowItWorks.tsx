import { motion } from "framer-motion";
import { ClipboardCheck, Compass, Rocket, LineChart } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  { icon: ClipboardCheck, title: "Diagnóstico", description: "Mapeamos o funil de vendas, processos, time e gargalos atuais da sua operação comercial." },
  { icon: Compass, title: "Estratégia", description: "Construímos um plano comercial sob medida com playbook, metas, scripts e processo de prospecção ativa." },
  { icon: Rocket, title: "Execução", description: "Implementamos junto com seu time — treinamentos, mentorias e ajustes semanais até a máquina rodar." },
  { icon: LineChart, title: "Escala", description: "Otimizamos cada etapa do funil com gestão por indicadores para multiplicar o faturamento de forma previsível." },
];

const HowItWorks = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6" id="etapas">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            As 4 etapas da <span className="text-primary font-normal">Aceleração</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo estruturado e validado por mais de 1.000 empresas em todo o Brasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-xl border border-border bg-background flex items-center justify-center mb-5 group-hover:border-primary/50 transition-colors">
                <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-light mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base"
          >
            Quero meu diagnóstico gratuito
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
