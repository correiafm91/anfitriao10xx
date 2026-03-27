import { motion } from "framer-motion";
import { User } from "lucide-react";

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
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <User className="w-24 h-24 text-primary/30 mx-auto mb-4" strokeWidth={1} />
                <p className="text-xs text-muted-foreground">Foto de Gustavo Correia</p>
              </div>
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
            Quem é Gustavo Correia
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
            Especialista em{" "}
            <span className="text-primary font-normal">Marketing Imobiliário</span>
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              Gustavo Correia é especialista em marketing imobiliário e criador do Método Anfitrião 10x — uma metodologia estratégica que ensina donos de imóveis a maximizarem seus ganhos com aluguel de temporada.
            </p>
            <p>
              Diferente de empresas de gestão, o foco do método é empoderar o proprietário com as estratégias certas de posicionamento, precificação, copywriting e marketing digital para que ele mesmo alcance resultados extraordinários.
            </p>
            <p>
              Com centenas de anfitriões treinados em todo o Brasil, Gustavo já ajudou proprietários a multiplicarem sua receita em até 10x — mantendo o controle total sobre seus imóveis.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com/anfitriao10x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
            >
              @anfitriao10x
            </a>
            <a
              href="https://youtube.com/@anfitrião10x"
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
