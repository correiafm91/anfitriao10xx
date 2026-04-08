import { motion } from "framer-motion";
import { X, Check, DollarSign, TrendingDown, TrendingUp } from "lucide-react";

const traditional = [
  { item: "Tráfego pago (Google/Meta Ads)", cost: "R$ 2.000/mês" },
  { item: "Social Media Manager", cost: "R$ 1.500/mês" },
  { item: "Designer gráfico", cost: "R$ 800/mês" },
  { item: "Agência de marketing", cost: "R$ 3.000/mês" },
  { item: "Ferramentas e softwares", cost: "R$ 500/mês" },
];

const corretor10x = [
  { item: "Estratégia de conteúdo orgânico", cost: "R$ 0" },
  { item: "Posicionamento nas redes sociais", cost: "R$ 0" },
  { item: "Técnicas de prospecção digital", cost: "R$ 0" },
  { item: "Marketing pessoal estratégico", cost: "R$ 0" },
  { item: "Método completo Corretor 10x", cost: "R$ 0" },
];

const CostComparison = () => {
  const totalTraditional = "R$ 7.800+";

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Marketing Tradicional <span className="text-primary font-normal">vs Corretor 10x</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja quanto um corretor de seguros gasta com marketing tradicional versus o que ensinamos — estratégias com custo zero.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-destructive/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-destructive" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-light">Marketing Tradicional</h3>
                <p className="text-sm text-muted-foreground">Custos mensais recorrentes</p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {traditional.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <X className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-sm font-light">{item.item}</span>
                  </div>
                  <span className="text-sm font-medium text-destructive whitespace-nowrap">{item.cost}</span>
                </div>
              ))}
            </div>
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
              <p className="text-sm text-muted-foreground mb-1">Total mensal estimado</p>
              <p className="text-3xl font-light text-destructive">{totalTraditional}</p>
              <p className="text-xs text-muted-foreground mt-1">por mês, sem garantia de resultado</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary rounded-2xl p-8 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium tracking-wide uppercase">
              Recomendado
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-light">Método Corretor 10x</h3>
                <p className="text-sm text-muted-foreground">Estratégias com custo zero</p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {corretor10x.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-light">{item.item}</span>
                  </div>
                  <span className="text-sm font-medium text-primary whitespace-nowrap">{item.cost}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
              <p className="text-sm text-muted-foreground mb-1">Custo mensal de operação</p>
              <p className="text-3xl font-light text-primary">R$ 0</p>
              <p className="text-xs text-muted-foreground mt-1">Diagnóstico gratuito + estratégias acessíveis</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-card border border-border rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-lg font-light">Economia de mais de <span className="text-primary font-medium">R$ 90.000/ano</span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            Com o Método Corretor 10x, você aprende estratégias que geram resultados sem depender de agências ou tráfego pago.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CostComparison;
