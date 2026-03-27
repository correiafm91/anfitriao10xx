import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Home, DollarSign } from "lucide-react";

const data = [
  { mes: "Jan", semAnfitriao: 2800, comAnfitriao: 3200 },
  { mes: "Fev", semAnfitriao: 3000, comAnfitriao: 4100 },
  { mes: "Mar", semAnfitriao: 2600, comAnfitriao: 5500 },
  { mes: "Abr", semAnfitriao: 3200, comAnfitriao: 7200 },
  { mes: "Mai", semAnfitriao: 2900, comAnfitriao: 8900 },
  { mes: "Jun", semAnfitriao: 3100, comAnfitriao: 11000 },
  { mes: "Jul", semAnfitriao: 3300, comAnfitriao: 14500 },
  { mes: "Ago", semAnfitriao: 3000, comAnfitriao: 18000 },
  { mes: "Set", semAnfitriao: 2700, comAnfitriao: 21000 },
  { mes: "Out", semAnfitriao: 3100, comAnfitriao: 24000 },
  { mes: "Nov", semAnfitriao: 2900, comAnfitriao: 27000 },
  { mes: "Dez", semAnfitriao: 3200, comAnfitriao: 30000 },
];

const metrics = [
  { icon: TrendingUp, label: "Taxa de Ocupação", value: "94%", change: "+38%" },
  { icon: DollarSign, label: "Receita Média/Mês", value: "R$18.500", change: "+520%" },
  { icon: Home, label: "Valor Diária Média", value: "R$680", change: "+210%" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 text-sm shadow-xl">
      <p className="text-foreground font-medium mb-1">{label}</p>
      <p className="text-muted-foreground">Sem gestão: <span className="text-foreground">R${payload[0]?.value?.toLocaleString()}</span></p>
      <p className="text-primary">Com Anfitrião 10x: <span className="font-medium">R${payload[1]?.value?.toLocaleString()}</span></p>
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
          Crescimento de <span className="text-primary font-normal">Receita</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Veja a diferença real nos ganhos de proprietários que aderiram ao Anfitrião 10x.
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
            <span className="text-muted-foreground">Sem gestão profissional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-foreground">Com Anfitrião 10x</span>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorAnfitriao" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(1, 77%, 55%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(1, 77%, 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 16%)" />
              <XAxis dataKey="mes" stroke="hsl(0, 0%, 40%)" fontSize={12} tickLine={false} />
              <YAxis stroke="hsl(0, 0%, 40%)" fontSize={12} tickLine={false} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="semAnfitriao" stroke="hsl(0, 0%, 40%)" strokeWidth={2} fill="transparent" dot={false} />
              <Area type="monotone" dataKey="comAnfitriao" stroke="hsl(1, 77%, 55%)" strokeWidth={2} fill="url(#colorAnfitriao)" dot={false} />
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
