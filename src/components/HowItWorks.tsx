import { motion } from "framer-motion";
import { Search, Target, BarChart3, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Posicionamento", description: "Aprenda a se posicionar como autoridade no mercado imobiliário e atrair clientes qualificados." },
  { icon: Target, title: "Prospecção", description: "Domine técnicas de prospecção ativa e digital para nunca mais depender de indicações." },
  { icon: BarChart3, title: "Marketing", description: "Crie uma presença digital irresistível com estratégias de conteúdo, anúncios e redes sociais." },
  { icon: Rocket, title: "Fechamento", description: "Converta mais propostas em vendas com técnicas avançadas de negociação e follow-up." },
];

const HowItWorks = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          O <span className="text-primary font-normal">Workshop</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          4 pilares estratégicos que você vai dominar no workshop ao vivo do dia 13 de Abril.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center group"
          >
            <div className="w-16 h-16 rounded-2xl border border-border bg-card flex items-center justify-center mx-auto mb-5 group-hover:border-primary/50 transition-colors">
              <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <div className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
              Pilar {i + 1}
            </div>
            <h3 className="text-xl font-light mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground font-light">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
