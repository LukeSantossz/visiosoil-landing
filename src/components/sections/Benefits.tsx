import { motion } from "motion/react";
import {
  Zap,
  Smartphone,
  Wallet,
  MapPin,
  Leaf,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Smartphone,
    title: "100% Mobile",
    description:
      "Funciona em qualquer smartphone moderno. Sem necessidade de equipamentos especiais ou laboratório.",
    highlight: "Direto no celular",
  },
  {
    icon: Zap,
    title: "Resultado Rápido",
    description:
      "Classificação da textura do solo em segundos. Tome decisões no momento certo, direto no campo.",
    highlight: "Em segundos",
  },
  {
    icon: Wallet,
    title: "Custo Acessível",
    description:
      "Desenvolvido para ser acessível a pequenos e médios produtores rurais. Sem custos de laboratório.",
    highlight: "Para todos",
  },
];

const secondaryFeatures = [
  {
    icon: MapPin,
    title: "No Campo",
    description: "Use direto na sua propriedade sem precisar enviar amostras.",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    description: "Manejo mais preciso reduz desperdício de insumos.",
  },
  {
    icon: Users,
    title: "Fácil de Usar",
    description: "Interface simples pensada para o produtor rural.",
  },
  {
    icon: TrendingUp,
    title: "Histórico",
    description: "Acompanhe a evolução do solo ao longo do tempo.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Suas análises ficam salvas de forma segura.",
  },
];

export default function Benefits() {
  return (
    <section id="funcionalidades" className="section-padding bg-gradient-section-alt relative overflow-hidden">
      {/* Background decorations - smaller on mobile */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-80 sm:h-80 lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-[400px] lg:h-[400px] bg-accent/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[120px]" />

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
            <span className="w-2 h-2 rounded-full bg-accent" />
            Benefícios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-2">
            Por que usar a
            <br />
            <span className="text-gradient">VisioSoil?</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto px-4">
            Uma ferramenta pensada para simplificar a vida do produtor rural.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mainFeatures.map(({ icon: Icon, title, description, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-5 sm:p-6 lg:p-8 card-glow group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div className="font-mono text-xs sm:text-sm font-bold text-primary mb-2 sm:mb-3">
                {highlight}
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary mb-2 sm:mb-3">
                {title}
              </h3>

              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8"
        >
          <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary mb-6 sm:mb-8 text-center">
            Mais vantagens
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {secondaryFeatures.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Icon className="text-accent w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-1">
                  {title}
                </h4>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
