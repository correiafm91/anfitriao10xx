import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "Como funciona a parceria com o Anfitrião 10x?", a: "Realizamos uma análise completa do seu imóvel, criamos uma estratégia personalizada de marketing e precificação, e gerenciamos 100% da operação — desde fotos profissionais até o check-out dos hóspedes." },
  { q: "Quanto custa o serviço?", a: "Cobramos uma comissão sobre a receita gerada, sem taxas fixas. Você só paga quando ganha. Nosso modelo garante que estamos alinhados com seus resultados." },
  { q: "Preciso morar na mesma cidade do imóvel?", a: "Não. Gerenciamos imóveis em todo o Brasil de forma remota. Temos equipes locais em cada região para garantir a qualidade do serviço." },
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria dos proprietários vê um aumento significativo já no primeiro mês. Em 3 meses, a receita média dos nossos clientes cresce entre 300% e 500%." },
  { q: "Vocês cuidam da manutenção do imóvel?", a: "Sim. Temos uma rede de profissionais qualificados para manutenção preventiva e corretiva, garantindo que seu imóvel esteja sempre em perfeitas condições." },
  { q: "Posso usar meu imóvel quando quiser?", a: "Claro! Você define os períodos de bloqueio com antecedência pelo nosso app. Seu imóvel continua sendo seu — nós apenas maximizamos seus ganhos." },
  { q: "Quais plataformas vocês utilizam?", a: "Publicamos seu imóvel nas principais plataformas: Airbnb, Booking.com, Vrbo, e nosso próprio canal direto, maximizando a visibilidade e a ocupação." },
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
