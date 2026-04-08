import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "O que é a Corretor 10x?", a: "Somos a maior empresa de marketing de seguros do Brasil. Oferecemos consultoria especializada para corretores de seguros que querem triplicar suas vendas com estratégias simples e acessíveis." },
  { q: "O que é o diagnóstico gratuito?", a: "É uma análise completa do seu posicionamento atual no mercado de seguros. Identificamos oportunidades de crescimento e traçamos um plano personalizado para você." },
  { q: "Quanto custa a consultoria?", a: "O diagnóstico é totalmente gratuito. Nossas estratégias são desenhadas para serem muito baratas e fáceis de implementar, sem depender de agências caras ou tráfego pago." },
  { q: "Preciso ter experiência como corretor?", a: "Não. Nossas estratégias funcionam tanto para iniciantes que querem começar bem quanto para corretores experientes que querem escalar seus resultados." },
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria dos nossos clientes começa a ver resultados já nas primeiras semanas de aplicação. Resultados expressivos geralmente aparecem em 2 a 3 meses." },
  { q: "Funciona para qualquer tipo de seguro?", a: "Sim. As estratégias são adaptáveis para seguros de vida, auto, saúde, residencial, empresarial e qualquer segmento. O foco é em marketing e posicionamento." },
  { q: "As estratégias são difíceis de implementar?", a: "Não! Um dos nossos diferenciais é que as estratégias são muito fáceis de implementar. Você não precisa ser expert em marketing ou tecnologia." },
  { q: "Como faço para começar?", a: "Basta preencher o formulário de diagnóstico gratuito no nosso site. Nossa equipe entrará em contato para fazer a análise do seu posicionamento." },
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
