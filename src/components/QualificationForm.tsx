import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

const QualificationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitação enviada com sucesso! Entraremos em contato em até 24h.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
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
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Descubra o potencial do seu{" "}
            <span className="text-primary font-normal">Imóvel</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Preencha o formulário e receba uma análise estratégica gratuita do seu imóvel.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              placeholder="Seu nome completo"
              required
              className="bg-secondary border-border focus:border-primary h-12 font-light"
            />
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="bg-secondary border-border focus:border-primary h-12 font-light"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              type="tel"
              placeholder="Telefone com DDD"
              required
              className="bg-secondary border-border focus:border-primary h-12 font-light"
            />
            <Select required>
              <SelectTrigger className="bg-secondary border-border h-12 font-light">
                <SelectValue placeholder="Tipo de imóvel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="flat">Flat / Studio</SelectItem>
                <SelectItem value="chale">Chalé / Cabana</SelectItem>
                <SelectItem value="cobertura">Cobertura</SelectItem>
                <SelectItem value="sitio">Sítio / Fazenda</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              placeholder="Localização (Cidade/Estado)"
              required
              className="bg-secondary border-border focus:border-primary h-12 font-light"
            />
            <Input
              placeholder="Valor estimado do imóvel"
              className="bg-secondary border-border focus:border-primary h-12 font-light"
            />
          </div>
          <Textarea
            placeholder="Conte-nos mais sobre seu imóvel e seus objetivos como anfitrião..."
            rows={4}
            className="bg-secondary border-border focus:border-primary font-light resize-none"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-base font-normal tracking-wide"
          >
            {loading ? "Enviando..." : "Receber Análise Estratégica Gratuita"}
            {!loading && <Send className="ml-2 w-4 h-4" />}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default QualificationForm;
