import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Corretor de Seguros - SP",
    stars: 5,
    text: "Em 3 meses tripliquei minhas vendas de seguros. As estratégias da Corretor 10x são simples e funcionam de verdade.",
  },
  {
    name: "Patrícia Lima",
    role: "Corretora de Seguros - RJ",
    stars: 5,
    text: "O diagnóstico gratuito já abriu meus olhos. Depois da consultoria, meus clientes passaram a me procurar ao invés de eu correr atrás.",
  },
  {
    name: "Roberto Alves",
    role: "Corretor de Seguros - MG",
    stars: 5,
    text: "Saí do zero e em 4 meses já faturava R$25 mil por mês. O posicionamento que aprendi fez toda a diferença.",
  },
  {
    name: "Camila Torres",
    role: "Corretora de Seguros - PR",
    stars: 5,
    text: "As estratégias são muito fáceis de implementar e baratas. Nunca imaginei que marketing pudesse ser tão acessível.",
  },
  {
    name: "André Souza",
    role: "Corretor de Seguros - BA",
    stars: 5,
    text: "A Corretor 10x me ensinou a usar as redes sociais de forma estratégica. Hoje sou referência na minha região.",
  },
  {
    name: "Mariana Costa",
    role: "Corretora de Seguros - SC",
    stars: 5,
    text: "O melhor investimento que fiz na minha carreira. Em 2 meses já tinha recuperado o investimento e triplicado minhas vendas.",
  },
];

const Testimonials = () => (
  <section className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          O que dizem nossos <span className="text-primary font-normal">Clientes</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Corretores de seguros que triplicaram suas vendas com nossas estratégias.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 font-light mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
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
