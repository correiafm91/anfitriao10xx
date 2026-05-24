import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Wallet, Users, Building2, Check, X } from "lucide-react";

const marketingData = [
  { item: "Tráfego Pago", valor: 8000 },
  { item: "CRM + Ferramentas", valor: 1500 },
  { item: "Materiais e Anúncios", valor: 2000 },
  { item: "Tempo perdido (oportunidade)", valor: 6000 },
];

const totalMarketing = marketingData.reduce((s, d) => s + d.valor, 0);

const comparisonData = [
  { modelo: "Corretor sozinho", custo: 17500, leads: 40 },
  { modelo: "Time interno de SDR", custo: 24000, leads: 180 },
  { modelo: "Pro Estate", custo: 9800, leads: 520 },
];

const comparisonItems = [
  {
    title: "Corretor sozinho",
    price: "R$17,5k/mês",
    icon: Wallet,
    points: [
      { ok: false, t: "Gasto alto com tráfego e ferramentas" },
      { ok: false, t: "Tempo do corretor consumido prospectando" },
      { ok: false, t: "Lead frio, baixa conversão" },
    ],
  },
  {
    title: "Time interno de SDR",
    price: "R$24k/mês",
    icon: Users,
    points: [
      { ok: false, t: "Salários, encargos, treinamento e turnover" },
      { ok: false, t: "Gestão e processo por sua conta" },
      { ok: true, t: "Mais leads, mas custo fixo alto" },
    ],
  },
  {
    title: "Pro Estate",
    price: "R$9,8k/mês",
    icon: Building2,
    highlight: true,
    points: [
      { ok: true, t: "Time de SDR pronto, treinado e gerido" },
      { ok: true, t: "Leads qualificados e agendados no seu CRM" },
      { ok: true, t: "Custo previsível, sem encargos trabalhistas" },
    ],
  },
];

const MarketingTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 text-sm shadow-xl">
      <p className="text-foreground font-medium mb-1">{label}</p>
      <p className="text-primary">R$ {payload[0]?.value?.toLocaleString()}</p>
    </div>
  );
};

const CompTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 text-sm shadow-xl">
      <p className="text-foreground font-medium mb-1">{label}</p>
      <p className="text-muted-foreground">Custo: <span className="text-foreground">R$ {payload[0]?.payload?.custo?.toLocaleString()}</span></p>
      <p className="text-primary">Leads/mês: <span className="font-medium">{payload[0]?.payload?.leads}</span></p>
    </div>
  );
};

const ComparisonChart = () => (
  <section className="py-24 px-6 bg-secondary/40" id="comparativo">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
          Quanto custa vender sozinho
        </span>
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          O que o corretor <span className="text-primary font-normal">gasta com marketing</span> todo mês
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Soma média do que um corretor investe para tentar gerar leads por conta própria — sem garantia de retorno.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          <p className="text-sm text-muted-foreground mb-1">Investimento mensal médio</p>
          <p className="text-4xl font-light mb-6">
            R$ <span className="text-primary font-normal">{totalMarketing.toLocaleString()}</span>
          </p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketingData} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
                <YAxis type="category" dataKey="item" stroke="hsl(var(--muted-foreground))" fontSize={11} width={140} tickLine={false} />
                <Tooltip content={<MarketingTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                <Bar dataKey="valor" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          <p className="text-sm text-muted-foreground mb-1">Custo mensal por modelo de operação</p>
          <p className="text-4xl font-light mb-6">
            Quem entrega <span className="text-primary font-normal">mais leads</span>?
          </p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="modelo" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
                <Tooltip content={<CompTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                <Bar dataKey="custo" radius={[6, 6, 0, 0]}>
                  {comparisonData.map((d, i) => (
                    <Cell key={i} fill={d.modelo === "Pro Estate" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.4)"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-4xl font-extralight">
          Time interno <span className="text-primary font-normal">vs</span> Pro Estate
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {comparisonItems.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-6 border ${c.highlight ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" : "border-border bg-card"}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
              <c.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-light mb-1">{c.title}</h4>
            <p className={`text-2xl font-normal mb-5 ${c.highlight ? "text-primary" : "text-foreground"}`}>{c.price}</p>
            <ul className="space-y-3">
              {c.points.map((p, j) => (
                <li key={j} className="flex items-start gap-2 text-sm font-light">
                  {p.ok ? (
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  )}
                  <span className={p.ok ? "text-foreground" : "text-muted-foreground"}>{p.t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonChart;
