import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "O que é o Workshop Corretor 10x?", a: "É um workshop ao vivo que ensina corretores de seguros a dominarem marketing, posicionamento e prospecção para escalar seus resultados de forma previsível." },
  { q: "Quando acontece o workshop?", a: "O workshop ao vivo será no dia 2 de Maio às 14:30. São 1 hora intensa de aula ao vivo com conteúdo prático e aplicável imediatamente." },
  { q: "Quanto custa?", a: "O investimento é de apenas R$197. Após se inscrever, o link de pagamento será enviado para o seu e-mail." },
  { q: "Preciso ter experiência como corretor?", a: "Não. O método é desenhado tanto para iniciantes que querem começar com o pé direito quanto para corretores experientes que querem escalar seus resultados." },
  { q: "Quanto tempo leva para ver resultados?", a: "Com as estratégias certas, a maioria dos alunos vê resultados já nas primeiras semanas após aplicar o método." },
  { q: "Funciona para qualquer tipo de seguro?", a: "Sim. As estratégias são adaptáveis para seguro auto, vida, saúde, empresarial, residencial e qualquer outro ramo. O foco é em marketing e posicionamento." },
  { q: "As vagas são limitadas?", a: "Sim. Para garantir a qualidade do workshop e atenção individual, as vagas são limitadas. Inscreva-se antes que acabem." },
  { q: "Como recebo o acesso?", a: "Após a inscrição, o link de pagamento será enviado para o seu e-mail. Após a confirmação do pagamento, você será adicionado ao grupo exclusivo da comunidade, onde receberá novidades, aulas ao vivo pelo Zoom e o acesso ao workshop." },
  { q: "O que é o grupo da comunidade?", a: "É um grupo exclusivo para alunos do Corretor 10x onde compartilhamos novidades, estratégias e realizamos aulas ao vivo pelo Zoom. Você entra no grupo assim que confirmar o pagamento." },
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
