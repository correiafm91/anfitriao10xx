import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Martins",
    role: "Corretor — Alto Padrão, SP",
    stars: 5,
    result: "+40 atendimentos/mês",
    text: "Parei de gastar tempo prospectando. A Pro Estate enche minha agenda com clientes qualificados — eu só apresento e fecho.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Imobiliária — Lançamentos, RJ",
    stars: 5,
    result: "3x mais visitas",
    text: "O time de SDR da Pro Estate triplicou as visitas dos nossos corretores em 90 dias. Operação redonda do começo ao fim.",
  },
  {
    name: "Ricardo Santos",
    role: "Corretor Autônomo, MG",
    stars: 5,
    result: "+R$1,2M em VGV",
    text: "Em 6 meses fechei mais do que nos 2 anos anteriores. Ter SDRs trabalhando para mim mudou totalmente o jogo.",
  },
  {
    name: "Ana Paula Costa",
    role: "Gerente Comercial — Imobiliária, PR",
    stars: 5,
    result: "Leads qualificados todo dia",
    text: "A qualificação que chega pra gente é absurda. Cliente já entra na conversa sabendo o que quer e dentro do nosso ticket.",
  },
  {
    name: "Marcos Ferreira",
    role: "Corretor — Comercial, BA",
    stars: 5,
    result: "Agenda cheia em 60 dias",
    text: "Antes eu corria atrás de cliente. Hoje minha agenda fica cheia sozinha com leads que a Pro Estate entrega prontos.",
  },
  {
    name: "Juliana Almeida",
    role: "Imobiliária — Locação, SC",
    stars: 5,
    result: "+200 leads/mês",
    text: "Processo profissional, SDRs treinados e resultado mensurável. A melhor decisão que tomamos para a área comercial.",
  },
];

const Testimonials = () => (
  <section className="py-24 px-6 bg-secondary/30" id="depoimentos">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
          Resultados Reais
        </span>
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          Corretores que <span className="text-primary font-normal">multiplicaram</span> suas vendas
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Milhares de corretores e imobiliárias terceirizam a prospecção com a Pro Estate.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors relative"
          >
            <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/20" strokeWidth={1.5} />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-4">
              {t.result}
            </div>
            <p className="text-foreground/90 font-light mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary text-sm font-medium">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-normal">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
