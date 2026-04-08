import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Send, AlertTriangle, CheckCircle, Mail } from "lucide-react";

const QualificationForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Inscrição realizada com sucesso!");
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
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Últimas vagas — Inscrições encerram em breve</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Garanta sua <span className="text-primary font-normal">Vaga</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Preencha o formulário para garantir sua vaga no workshop ao vivo do dia Preencha o formulário para garantir sua vaga no workshop ao vivo do dia 12 de Abril às 16h por apenas <span className="text-primary font-medium">R$197</span>. Após o pagamento, você entra no grupo exclusivo da comunidade.. Após o pagamento, você entra no grupo exclusivo da comunidade.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-10 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-light">Inscrição Confirmada!</h3>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Mail className="w-5 h-5" />
              <span>Verifique seu e-mail</span>
            </div>
            <p className="text-muted-foreground font-light max-w-md mx-auto">
              O link de pagamento será enviado para o seu e-mail em instantes. Após a confirmação do pagamento, você será adicionado ao <span className="text-primary font-medium">grupo exclusivo da comunidade</span>, onde receberá novidades, aulas ao vivo pelo Zoom e acesso direto ao O link de pagamento será enviado para o seu e-mail em instantes. Após a confirmação do pagamento, você será adicionado ao <span className="text-primary font-medium">grupo exclusivo da comunidade</span>, onde receberá novidades, aulas ao vivo pelo Zoom e acesso direto ao workshop do dia 12 de Abril às 16h.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Valor do investimento: <span className="text-primary font-medium">R$197</span> · Workshop: 12 de Abril às 16h (1 hora intensa)
            </p>
          </motion.div>
        ) : (
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
              className="bg-secondary border-border focus:border-primary h-12 font-light"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-base font-normal tracking-wide"
            >
              {loading ? "Enviando..." : "Garantir minha vaga — R$197"}
              {!loading && <Send className="ml-2 w-4 h-4" />}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Vagas limitadas. Após a inscrição, o link de pagamento será enviado por e-mail.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default QualificationForm;
