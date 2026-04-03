import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Martins",
    role: "Corretor de Seguros - SP",
    stars: 5,
    text: "Em 3 meses saí do zero para R$28 mil em comissões. O método do Gustavo é direto ao ponto e funciona de verdade.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Corretora de Seguros - RJ",
    stars: 5,
    text: "Finalmente aprendi a me posicionar no digital. Meus clientes agora vêm até mim, não preciso mais ficar implorando indicações.",
  },
  {
    name: "Ricardo Santos",
    role: "Corretor de Seguros - MG",
    stars: 5,
    text: "A masterclass mudou minha visão sobre o mercado. Hoje faturo 10x mais do que antes e tenho uma carteira sólida.",
  },
  {
    name: "Ana Paula Costa",
    role: "Corretora de Seguros - PR",
    stars: 5,
    text: "As estratégias de prospecção digital são um divisor de águas. Nunca mais dependi só de indicação para vender.",
  },
  {
    name: "Marcos Ferreira",
    role: "Corretor de Seguros - BA",
    stars: 5,
    text: "Do zero a R$32 mil em 4 meses. O Gustavo ensina o que nenhuma seguradora vai te ensinar sobre marketing.",
  },
  {
    name: "Juliana Almeida",
    role: "Corretora de Seguros - SC",
    stars: 5,
    text: "O conteúdo é claro, prático e funciona. Hoje sou referência na minha cidade graças ao posicionamento que aprendi.",
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
          O que dizem nossos <span className="text-foreground font-normal">Alunos</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Corretores que participaram da masterclass e transformaram suas carreiras.
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
            className="bg-card border border-border rounded-xl p-6 hover:border-foreground/30 transition-colors"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
              ))}
            </div>
            <p className="text-foreground/90 font-light mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground/15 flex items-center justify-center text-foreground text-sm font-medium">
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
