import { motion } from "framer-motion";

const About = () => (
  <section className="py-24 px-6" id="sobre">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center p-6">
              <img
                src="https://i.postimg.cc/tJ2vGVrw/658211288-17893525920436451-2969698379029917654-n.jpg"
                alt="Pro Estate - Consultoria para Corretores de Imóveis"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-light text-2xl">10x</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Sobre a Pro Estate
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
            A maior consultoria para{" "}
            <span className="text-primary font-normal">corretores de imóveis</span> do Brasil
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              A Pro Estate nasceu da necessidade real do mercado imobiliário: corretores precisam de estratégias modernas de marketing e posicionamento para se destacar em um mercado cada vez mais competitivo.
            </p>
            <p>
              Com mais de 1.000 corretores atendidos em todo o Brasil, a Pro Estate se tornou referência em consultoria de marketing para o mercado imobiliário — transformando profissionais comuns em referências do mercado.
            </p>
            <p>
              Nossa equipe cria estratégias personalizadas de marketing digital, posicionamento e prospecção para corretores que querem escalar seus resultados e se tornarem autoridades na sua região.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com/proestate2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
            >
              @proestate2
            </a>
            <a
              href="https://youtube.com/@proestate2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
