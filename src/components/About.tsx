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
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-card border border-border overflow-hidden">
              <img
                src="https://i.postimg.cc/sXrsZmMD/658271100-18091841693144210-7772722279346718232-n.jpg"
                alt="Gustavo Correia - Especialista em Marketing para Corretores de Seguros"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-foreground/10 border border-foreground/20 flex items-center justify-center">
              <span className="text-foreground font-light text-2xl">10x</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-foreground font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Quem é Gustavo Correia
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
            A história por trás do{" "}
            <span className="text-foreground font-normal">Corretor 10x</span>
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              Em 2024, Gustavo Correia fez o curso de corretor de seguros da ANS e se formou com apenas 19 anos. Em menos de 1 ano como corretor, faturou mais de R$70 mil aplicando estratégias próprias de marketing e posicionamento.
            </p>
            <p>
              Em 2025, decidiu compartilhar tudo o que aprendeu e começou a ensinar suas estratégias para outros corretores. Assim nasceu o Método Corretor 10x — um workshop ao vivo que ensina corretores a se destacarem no mercado usando marketing digital, posicionamento e prospecção.
            </p>
            <p>
              Com mais de 1.000 corretores treinados em todo o Brasil, Gustavo lidera o maior treinamento de corretores de seguros do país — transformando profissionais comuns em referências do mercado.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com/corretor10x_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-foreground hover:text-foreground transition-colors"
            >
              @corretor10x_
            </a>
            <a
              href="https://youtube.com/@corretor10_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-foreground hover:text-foreground transition-colors"
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
