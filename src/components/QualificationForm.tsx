import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Send, AlertTriangle } from "lucide-react";

const QualificationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Inscrição realizada com sucesso! Você receberá os detalhes no seu e-mail.");
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6 text-sm">
            <AlertTriangle className="w-4 h-4 text-foreground" />
            <span className="text-foreground font-medium">Últimas vagas — Inscrições encerram em breve</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Garanta sua <span className="text-foreground font-normal">Vaga</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Preencha o formulário para garantir sua vaga na masterclass dos dias 15, 16 e 17 de Abril.
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
              className="bg-secondary border-border focus:border-foreground h-12 font-light"
            />
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="bg-secondary border-border focus:border-foreground h-12 font-light"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              type="tel"
              placeholder="Telefone com DDD"
              required
              className="bg-secondary border-border focus:border-foreground h-12 font-light"
            />
            <Select required>
              <SelectTrigger className="bg-secondary border-border h-12 font-light">
                <SelectValue placeholder="Experiência como corretor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iniciante">Iniciante (menos de 1 ano)</SelectItem>
                <SelectItem value="intermediario">Intermediário (1-3 anos)</SelectItem>
                <SelectItem value="experiente">Experiente (3-5 anos)</SelectItem>
                <SelectItem value="veterano">Veterano (5+ anos)</SelectItem>
                <SelectItem value="ainda-nao">Ainda não sou corretor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            placeholder="Cidade / Estado"
            required
            className="bg-secondary border-border focus:border-foreground h-12 font-light"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-foreground hover:bg-foreground/90 text-background h-12 rounded-xl text-base font-normal tracking-wide"
          >
            {loading ? "Enviando..." : "Garantir minha vaga agora"}
            {!loading && <Send className="ml-2 w-4 h-4" />}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Vagas limitadas. Ao se inscrever, você receberá os detalhes de acesso por e-mail.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default QualificationForm;
