import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  { q: "O que é a C4 Sales?", a: "A C4 Sales é uma aceleradora de vendas para empresas que querem estruturar uma máquina comercial previsível — com processo, time treinado, prospecção ativa e gestão por indicadores." },
  { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário com informações sobre sua operação. Em seguida, nosso time entra em contato para uma conversa onde mapeamos seus principais gargalos comerciais e mostramos como a aceleração pode acelerar seus resultados." },
  { q: "Para quem é a aceleração?", a: "Para empresas B2B e B2C que já vendem mas querem estruturar processo, escalar o time comercial e crescer com previsibilidade. Adaptamos o plano à realidade de cada operação." },
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria das empresas começa a ver melhorias nas primeiras semanas de implementação. Resultados consistentes e expressivos costumam aparecer entre 60 e 90 dias." },
  { q: "Funciona para qualquer segmento?", a: "Sim. Atendemos serviços, indústria, tecnologia, agências, e-commerce e mais. O método é adaptado ao seu modelo de negócio e ticket médio." },
  { q: "Como é o acompanhamento?", a: "Mentoria contínua com o time comercial, scripts de vendas, playbook, plano de prospecção e acompanhamento dos indicadores semana a semana." },
  { q: "Quanto custa a aceleração?", a: "O investimento varia conforme o plano ideal para o momento da sua empresa. O valor é apresentado durante o diagnóstico gratuito, depois de entendermos sua realidade." },
  { q: "As vagas são limitadas?", a: "Sim. Para garantir qualidade e atenção ao detalhe, atendemos um número limitado de empresas por mês. Solicite seu diagnóstico antes de fecharmos a agenda." },
];

const FAQ = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6" id="faq">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Tire suas dúvidas
          </span>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base"
          >
            Quero meu diagnóstico gratuito
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
