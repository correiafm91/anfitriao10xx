import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

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
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">100% gratuito — Sem compromisso</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Diagnóstico <span className="text-primary font-normal">Gratuito</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Preencha o formulário e descubra como triplicar suas vendas de seguros com estratégias simples e baratas.
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
              Solicitar diagnóstico gratuito
            </button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Nossa equipe entrará em contato para analisar seu posicionamento atual.
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
