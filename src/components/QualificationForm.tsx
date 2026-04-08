import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const QualificationForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      const hasScript = document.querySelector('#respondi_src');
      if (!hasScript) {
        const script = document.createElement('script');
        script.setAttribute("async", "");
        script.id = 'respondi_src';
        script.src = 'https://embed.respondi.app/embed.js';
        document.body.appendChild(script);
      }
    }
  }, [showForm]);

  const handleClick = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="py-24 px-6 bg-secondary/30" id="formulario">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6 text-sm">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Últimas vagas — Inscrições encerram em breve</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Garanta sua <span className="text-primary font-normal">Vaga</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Clique no botão abaixo para garantir sua vaga no workshop ao vivo do dia 12 de Abril às 16h por apenas <span className="text-primary font-medium">R$197</span>.
          </p>
        </motion.div>

        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-4 text-base font-normal tracking-wide transition-colors"
            >
              Garantir minha vaga — R$197
            </button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Vagas limitadas. Após a inscrição, o link de pagamento será enviado por e-mail.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div
              data-respondi-container=""
              data-respondi-mode="regular"
              data-respondi-src="https://form.respondi.app/H5k95weS"
              data-respondi-width="100%"
              data-respondi-height="600px"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default QualificationForm;
