import { motion } from "motion/react";
import { Clock, DollarSign, Truck, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Processo Demorado",
    description: "A análise granulométrica tradicional exige coleta de amostras, envio para laboratório, processamento químico e emissão de laudos. Todo esse processo pode levar semanas, atrasando decisões críticas de manejo.",
    stat: "15-30 dias",
    statLabel: "tempo médio até o resultado",
  },
  {
    icon: DollarSign,
    title: "Alto Custo Operacional",
    description: "Cada análise laboratorial envolve reagentes químicos, equipamentos especializados, mão de obra técnica e logística de transporte. Para propriedades grandes, o custo de múltiplas análises torna-se proibitivo.",
    stat: "R$ 80-200",
    statLabel: "por amostra analisada",
  },
  {
    icon: Truck,
    title: "Logística Complexa",
    description: "A necessidade de coletar, embalar corretamente, identificar e transportar amostras até o laboratório cria um gargalo operacional que desestimula o monitoramento frequente do solo.",
    stat: "5+ etapas",
    statLabel: "até o resultado final",
  },
  {
    icon: AlertTriangle,
    title: "Acesso Limitado",
    description: "Em regiões mais remotas, a distância de laboratórios credenciados torna a análise ainda mais cara e demorada, deixando muitos produtores sem acesso a dados essenciais para suas decisões.",
    stat: "72%",
    statLabel: "dos produtores sem análises regulares",
  },
];

const solutions = [
  "Resultado em menos de 60 segundos",
  "Análise direto no campo com smartphone",
  "Custo acessível para qualquer escala",
  "Sem necessidade de envio de amostras",
];

export default function Problem() {
  return (
    <section id="produto" className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            O Desafio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Por que a análise de solo tradicional
            <br />
            <span className="text-text-secondary">não atende mais às necessidades do campo?</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A agricultura moderna exige decisões rápidas baseadas em dados precisos.
            Mas os métodos convencionais de análise granulométrica foram desenvolvidos
            há décadas e não acompanham esse ritmo.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map(({ icon: Icon, title, description, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 lg:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg lg:text-xl text-text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-4">
                    {description}
                  </p>
                  <div className="flex items-baseline gap-2 pt-4 border-t border-border">
                    <span className="font-mono text-2xl lg:text-3xl font-bold text-secondary">
                      {stat}
                    </span>
                    <span className="text-sm text-text-muted">{statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                Existe uma forma melhor.
              </h3>
              <p className="text-text-secondary mb-6 lg:text-lg">
                A VisioSoil desenvolveu uma tecnologia proprietária que transforma
                completamente esse cenário, tornando a análise de solo acessível,
                rápida e precisa.
              </p>
              <ul className="space-y-3 mb-8">
                {solutions.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                <span>Descubra como funciona</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl bg-bg-card border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-mono text-6xl lg:text-7xl font-bold text-gradient mb-2">
                    60s
                  </div>
                  <p className="text-text-muted">
                    Do clique ao resultado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
