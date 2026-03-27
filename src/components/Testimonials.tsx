import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    property: "Apartamento em Copacabana",
    stars: 5,
    text: "Em 3 meses minha receita triplicou. A equipe é extremamente profissional e proativa.",
  },
  {
    name: "Fernanda Oliveira",
    property: "Casa de praia em Búzios",
    stars: 5,
    text: "Não preciso me preocupar com nada. Eles cuidam de tudo e meus ganhos nunca foram tão altos.",
  },
  {
    name: "Ricardo Santos",
    property: "Flat em São Paulo",
    stars: 5,
    text: "A precificação dinâmica fez toda a diferença. Minha taxa de ocupação foi de 45% para 96%.",
  },
  {
    name: "Ana Paula Costa",
    property: "Chalé em Campos do Jordão",
    stars: 5,
    text: "Profissionalismo impecável. As fotos e anúncios que criaram atraem hóspedes premium.",
  },
  {
    name: "Marcos Ferreira",
    property: "Estúdio no Centro do Rio",
    stars: 5,
    text: "Meu retorno aumentou 8x em 6 meses. Melhor investimento que fiz para meu imóvel.",
  },
  {
    name: "Juliana Almeida",
    property: "Cobertura em Florianópolis",
    stars: 5,
    text: "Transparência total nos relatórios e um atendimento que supera qualquer expectativa.",
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
          Proprietários reais compartilham suas experiências com o Anfitrião 10x.
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
                <p className="text-xs text-muted-foreground">{t.property}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
