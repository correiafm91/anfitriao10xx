import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const data = [
  { mes: "Mês 1", semMetodo: 2000, comMetodo: 8000 },
  { mes: "Mês 2", semMetodo: 3000, comMetodo: 18000 },
  { mes: "Mês 3", semMetodo: 3500, comMetodo: 32000 },
  { mes: "Mês 4", semMetodo: 4000, comMetodo: 48000 },
  { mes: "Mês 5", semMetodo: 4500, comMetodo: 65000 },
  { mes: "Mês 6", semMetodo: 5000, comMetodo: 85000 },
  { mes: "Mês 7", semMetodo: 5200, comMetodo: 100000 },
  { mes: "Mês 8", semMetodo: 5500, comMetodo: 120000 },
];

const metrics = [
  { icon: TrendingUp, label: "Crescimento Médio", value: "10x", change: "em comissões aplicando o método" },
  { icon: DollarSign, label: "Resultado Comprovado", value: "R$120k+", change: "alcançados por nossos alunos" },
  { icon: Users, label: "Corretores Treinados", value: "+1.000", change: "em todo o Brasil" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 text-sm shadow-xl">
      <p className="text-foreground font-medium mb-1">{label}</p>
      <p className="text-muted-foreground">Sem o método: <span className="text-foreground">R${payload[0]?.value?.toLocaleString()}</span></p>
      <p className="text-primary">Com Pro Estate: <span className="font-medium">R${payload[1]?.value?.toLocaleString()}</span></p>
    </div>
  );
};

const RevenueChart = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          Crescimento de <span className="text-primary font-normal">Comissões</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Resultados reais de corretores que aplicaram as estratégias do Método Pro Estate.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-6 md:p-10 mb-10"
      >
        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
            <span className="text-muted-foreground">Sem estratégia profissional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-primary">Com Método Pro Estate</span>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorProEstate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217, 91%, 45%)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(217, 91%, 45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 15%, 88%)" />
              <XAxis dataKey="mes" stroke="hsl(210, 10%, 45%)" fontSize={12} tickLine={false} />
              <YAxis stroke="hsl(210, 10%, 45%)" fontSize={12} tickLine={false} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="semMetodo" stroke="hsl(210, 10%, 70%)" strokeWidth={2} fill="transparent" dot={false} />
              <Area type="monotone" dataKey="comMetodo" stroke="hsl(217, 91%, 45%)" strokeWidth={2} fill="url(#colorProEstate)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <m.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{m.label}</p>
              <p className="text-2xl font-light">{m.value}</p>
              <p className="text-primary text-sm font-medium">{m.change}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RevenueChart;
