import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Martins",
    role: "CEO — SaaS B2B, SP",
    stars: 5,
    result: "+R$280k em 3 meses",
    text: "A C4 Sales reorganizou todo o nosso processo comercial. Em 90 dias triplicamos o faturamento com previsibilidade real.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Diretora Comercial — Indústria, RJ",
    stars: 5,
    result: "Triplicou o pipeline",
    text: "Estruturaram nossa prospecção ativa do zero. Hoje temos um pipeline saudável e meta batida todo mês.",
  },
  {
    name: "Ricardo Santos",
    role: "Sócio — Serviços, MG",
    stars: 5,
    result: "10x em vendas",
    text: "A consultoria mudou nossa visão de comercial. Faturamos 10x mais e construímos um time que vende sozinho.",
  },
  {
    name: "Ana Paula Costa",
    role: "Head de Vendas — Tech, PR",
    stars: 5,
    result: "+R$220k mensais",
    text: "O método de prospecção da C4 Sales é um divisor de águas. Não dependemos mais de indicação para crescer.",
  },
  {
    name: "Marcos Ferreira",
    role: "Founder — Agência, BA",
    stars: 5,
    result: "+R$320k em 4 meses",
    text: "A aceleração nos deu o que faltava: processo, gestão por indicadores e fechamento de tickets altos.",
  },
  {
    name: "Juliana Almeida",
    role: "CEO — E-commerce, SC",
    stars: 5,
    result: "Referência no nicho",
    text: "Conteúdo prático, direto e que funciona. Hoje somos referência no nosso mercado graças ao posicionamento que construímos juntos.",
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
          Empresas que <span className="text-primary font-normal">Multiplicaram</span> suas vendas
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Mais de 1.000 empresas transformaram seus resultados com a C4 Sales.
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
