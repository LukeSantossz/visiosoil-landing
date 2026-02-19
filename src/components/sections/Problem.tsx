import { motion } from "motion/react";
import { Clock, DollarSign, Truck, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Processo Demorado",
    description: "A análise tradicional exige coleta, envio para laboratório e processamento químico. Todo esse processo pode levar semanas.",
    stat: "15-30 dias",
    statLabel: "tempo médio",
  },
  {
    icon: DollarSign,
    title: "Alto Custo",
    description: "Cada análise envolve reagentes, equipamentos e mão de obra técnica. Custos proibitivos para pequenos produtores.",
    stat: "R$ 80-200",
    statLabel: "por amostra",
  },
  {
    icon: Truck,
    title: "Logística Complexa",
    description: "Coletar, embalar e transportar amostras cria um gargalo que desestimula o monitoramento frequente.",
    stat: "5+ etapas",
    statLabel: "até o resultado",
  },
  {
    icon: AlertTriangle,
    title: "Acesso Limitado",
    description: "Em regiões remotas, a distância de laboratórios torna a análise ainda mais cara e demorada.",
    stat: "72%",
    statLabel: "sem acesso regular",
  },
];

const solutions = [
  "Resultado em segundos, direto no celular",
  "Análise no campo sem envio de amostras",
  "Custo acessível para pequenos produtores",
  "Funciona em qualquer smartphone",
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
          className="text-center mb-10 sm:mb-16"
        >
          <span className="badge mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            O Desafio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-2">
            Por que a análise de solo tradicional
            <br className="hidden sm:block" />
            <span className="text-text-secondary"> não funciona para o pequeno produtor?</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
            A agricultura moderna exige decisões rápidas baseadas em dados.
            Mas os métodos convencionais são caros e demorados demais.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {problems.map(({ icon: Icon, title, description, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-5 sm:p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-secondary sm:hidden" />
                  <Icon size={24} className="text-secondary hidden sm:block" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <div className="flex items-baseline gap-2 pt-3 sm:pt-4 border-t border-border">
                    <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">
                      {stat}
                    </span>
                    <span className="text-xs sm:text-sm text-text-muted">{statLabel}</span>
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
          className="relative rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-3 sm:mb-4">
                Nossa solução: um app simples e acessível
              </h3>
              <p className="text-text-secondary mb-5 sm:mb-6 text-sm sm:text-base lg:text-lg">
                A VisioSoil é um aplicativo móvel que classifica a textura do solo
                usando apenas uma foto do celular. Desenvolvido especialmente para
                pequenos e médios produtores rurais.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {solutions.map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span className="text-text-primary text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm sm:text-base hover:gap-3 transition-all"
              >
                <span>Veja como funciona</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg sm:rounded-xl bg-bg-card border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                    5 classes
                  </div>
                  <p className="text-text-muted text-sm sm:text-base">
                    Classificação textural simplificada
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
