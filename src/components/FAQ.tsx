import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "O que é a Masterclass Corretor 10x?", a: "É um treinamento intensivo de 3 dias criado por Gustavo Correia que ensina corretores de seguros a dominarem marketing, posicionamento e prospecção para escalar seus resultados de forma previsível." },
  { q: "Quando acontece a masterclass?", a: "A próxima turma será nos dias 15, 16 e 17 de Abril. São 3 dias de aulas ao vivo com conteúdo prático e aplicável imediatamente." },
  { q: "Preciso ter experiência como corretor?", a: "Não. O método é desenhado tanto para iniciantes que querem começar com o pé direito quanto para corretores experientes que querem escalar seus resultados." },
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria dos alunos vê resultados já nas primeiras semanas. Em 3 meses, a meta é sair do zero e alcançar R$30 mil em comissões mensais." },
  { q: "Funciona para qualquer tipo de seguro?", a: "Sim. As estratégias são adaptáveis para seguro auto, vida, saúde, empresarial, residencial e qualquer outro ramo. O foco é em marketing e posicionamento." },
  { q: "As vagas são limitadas?", a: "Sim. Para garantir a qualidade do treinamento e atenção individual, as vagas são limitadas. Inscreva-se antes que as vagas acabem." },
  { q: "Terei acesso às gravações?", a: "Sim. Todos os inscritos recebem acesso às gravações das aulas por tempo limitado para revisar o conteúdo." },
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
          Perguntas <span className="text-foreground font-normal">Frequentes</span>
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
              <AccordionTrigger className="text-left font-light hover:no-underline hover:text-foreground transition-colors">
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
