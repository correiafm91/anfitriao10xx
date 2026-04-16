import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Send } from "lucide-react";

const RESPONDI_URL = "https://form.respondi.app/H5k95weS";

const QualificationForm = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    if (document.querySelector("#respondi_src")) return;
    const script = document.createElement("script");
    script.async = true;
    script.id = "respondi_src";
    script.src = "https://embed.respondi.app/embed.js";
    document.body.appendChild(script);
  }, [open]);

  return (
    <section className="py-24 px-6 bg-secondary/30" id="formulario">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Solicite seu <span className="text-primary font-normal">Diagnóstico Gratuito</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Clique no botão abaixo para preencher o formulário de contato. Nossa equipe entrará em contato para realizar seu diagnóstico de vendas personalizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-normal tracking-wide"
          >
            Entrar em contato
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl p-0 overflow-hidden">
            <DialogHeader className="px-6 pt-6">
              <DialogTitle className="font-light text-2xl">
                Formulário de <span className="text-primary">Contato</span>
              </DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <div
                data-respondi-container=""
                data-respondi-mode="regular"
                data-respondi-src={RESPONDI_URL}
                data-respondi-width="100%"
                data-respondi-height="600px"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default QualificationForm;
