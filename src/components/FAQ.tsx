import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "O que é o Método Anfitrião 10x?", a: "É uma metodologia estratégica criada por Gustavo Correia que ensina donos de imóveis a multiplicarem seus ganhos com aluguel de temporada através de marketing imobiliário, precificação dinâmica e posicionamento de mercado." },
  { q: "Vocês gerenciam meu imóvel?", a: "Não. Nosso foco é 100% em estratégia. Ensinamos você a aplicar as técnicas certas para maximizar seus resultados. Você mantém o controle total do seu imóvel." },
  { q: "Preciso ter experiência com aluguel de temporada?", a: "Não. O método é desenhado tanto para iniciantes quanto para anfitriões experientes que querem escalar seus resultados." },
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria dos alunos vê um aumento significativo já no primeiro mês após aplicar as estratégias. Em 3 meses, a receita média cresce entre 300% e 500%." },
  { q: "Funciona para qualquer tipo de imóvel?", a: "Sim. As estratégias são adaptáveis para apartamentos, casas, chalés, flats, coberturas e qualquer tipo de imóvel para aluguel de temporada." },
  { q: "Como funciona o acompanhamento?", a: "Após aplicar o método, você terá acesso a conteúdos estratégicos, atualizações de mercado e uma comunidade de anfitriões de alta performance para trocar experiências." },
  { q: "Quais plataformas o método abrange?", a: "Ensinamos estratégias para Airbnb, Booking.com, Vrbo e canal direto — maximizando sua visibilidade em todas as frentes." },
];

const FAQ = () => (
  <section className="py-24 px-6" id="faq">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          Perguntas <span className="text-primary font-normal">Frequentes</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-light hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
