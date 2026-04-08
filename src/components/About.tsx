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
                src="https://i.postimg.cc/yYfgcKMc/1000283477.jpg"
                alt="Corretor 10x - Marketing de Seguros"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-light text-2xl">3x</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Sobre a Corretor 10x
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
            A maior empresa de{" "}
            <span className="text-primary font-normal">marketing de seguros</span> do Brasil
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              A Corretor 10x nasceu para resolver o maior problema dos corretores de seguros: a falta de estratégias modernas de marketing e posicionamento para se destacar no mercado.
            </p>
            <p>
              Com mais de 1.000 corretores treinados em todo o Brasil, nos tornamos referência em consultoria de marketing para o mercado de seguros — ajudando profissionais a triplicarem suas vendas com estratégias simples e baratas.
            </p>
            <p>
              Oferecemos um diagnóstico gratuito para entender seu posicionamento atual e traçar um plano personalizado para escalar seus resultados.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com/corretor10x_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
            >
              @corretor10x_
            </a>
            <a
              href="https://youtube.com/@corretor10x_"
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
