import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  { q: "O que é a Pro Estate?", a: "A Pro Estate é uma empresa de terceirização de vendas focada exclusivamente no mercado imobiliário. Montamos e operamos times de SDR que prospectam e qualificam clientes para corretores e imobiliárias." },
  { q: "Como funciona o serviço de SDR?", a: "Nosso time prospecta de forma ativa, qualifica os leads por critérios definidos com você e entrega contatos prontos e agendados para o corretor fechar negócio." },
  { q: "Para quem é a Pro Estate?", a: "Para corretores autônomos, equipes de vendas e imobiliárias que querem aumentar o volume de atendimentos qualificados sem precisar montar e treinar um time interno de prospecção." },
  { q: "Quanto tempo leva para receber os primeiros leads?", a: "Após o onboarding e definição de ICP, o time entra em operação rapidamente e os primeiros leads qualificados começam a chegar nas primeiras semanas." },
  { q: "Vocês trabalham com qualquer tipo de imóvel?", a: "Sim. Atuamos com lançamentos, alto padrão, médio padrão, comercial e locação. Adaptamos a abordagem ao seu portfólio e perfil de cliente." },
  { q: "Como é o acompanhamento dos resultados?", a: "Você recebe relatórios periódicos com volume de leads, qualificação, agendamentos e taxa de conversão, além de um gestor dedicado acompanhando a operação." },
  { q: "Quanto custa o serviço?", a: "O investimento depende do tamanho do time de SDR e do volume desejado. O valor é apresentado no diagnóstico gratuito, depois de entendermos sua operação." },
  { q: "As vagas são limitadas?", a: "Sim. Para manter a qualidade da prospecção, abrimos um número limitado de novas operações por mês. Solicite seu diagnóstico antes de fecharmos a agenda." },
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
