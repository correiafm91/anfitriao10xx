import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  { q: "O que é a Pro Estate?", a: "Somos uma empresa de terceirização de vendas para o mercado imobiliário. Montamos e operamos times de SDR que prospectam, qualificam e agendam clientes para corretores e imobiliárias." },
  { q: "Quanto custa contratar a Pro Estate?", a: "O investimento começa por volta de R$9,8k/mês — mais barato do que manter um time interno de SDR (R$24k+/mês com salários e encargos) e mais eficiente do que gastar R$17k/mês em tráfego sozinho. O valor exato é definido no diagnóstico gratuito." },
  { q: "Por que sai mais barato do que montar meu próprio time?", a: "Você não paga CLT, encargos, treinamento, ferramentas, gestão nem turnover. Entregamos um time já pronto, treinado, com processo, tecnologia e gestor dedicado por um custo fixo previsível." },
  { q: "Vale mais a pena do que investir em tráfego pago?", a: "Tráfego entrega lead frio e exige tempo do corretor para qualificar. Nós entregamos cliente agendado e pronto para comprar — o ROI por real investido é muito maior." },
  { q: "Em quanto tempo começo a receber leads?", a: "Após o diagnóstico e setup, em poucas semanas os primeiros leads qualificados já chegam. Resultados consistentes a partir do segundo mês de operação." },
  { q: "Vocês trabalham com qualquer tipo de imóvel?", a: "Sim. Lançamentos, alto padrão, médio padrão, comercial e locação. Adaptamos abordagem, scripts e ICP ao seu portfólio." },
  { q: "Como acompanho os resultados?", a: "Relatórios periódicos com volume de leads, qualificação, agendamentos e taxa de conversão, além de gestor dedicado acompanhando toda a operação." },
  { q: "As vagas são limitadas?", a: "Sim. Para manter a qualidade da prospecção, abrimos um número limitado de novas operações por mês. Solicite seu diagnóstico antes que feche a agenda." },
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
