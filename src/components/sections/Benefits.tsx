import { motion } from "motion/react";
import {
  Zap,
  Target,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Globe,
  Leaf,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Zap,
    title: "Velocidade Incomparável",
    description:
      "Enquanto laboratórios tradicionais levam semanas, nossa tecnologia entrega resultados em menos de 60 segundos. Isso significa decisões de manejo no momento certo, sem perder a janela ideal de aplicação.",
    highlight: "< 60 segundos",
  },
  {
    icon: Target,
    title: "Precisão Validada",
    description:
      "Nossa tecnologia foi desenvolvida e validada em parceria com instituições de pesquisa reconhecidas. Cada classificação passa por múltiplas verificações para garantir confiabilidade nos resultados.",
    highlight: "95%+ precisão",
  },
  {
    icon: Smartphone,
    title: "Acessibilidade Total",
    description:
      "Funciona em qualquer smartphone moderno, sem necessidade de equipamentos especiais. Leve a capacidade de análise para qualquer ponto da propriedade, mesmo em áreas remotas.",
    highlight: "100% mobile",
  },
];

const secondaryFeatures = [
  {
    icon: Cloud,
    title: "Cloud + Offline",
    description:
      "Capture imagens mesmo sem internet. Os dados sincronizam automaticamente quando a conexão for restabelecida.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description:
      "Criptografia de ponta a ponta. Seus dados e análises pertencem exclusivamente a você.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analítico",
    description:
      "Visualize históricos, compare análises ao longo do tempo e identifique padrões em sua propriedade.",
  },
  {
    icon: Globe,
    title: "API Disponível",
    description:
      "Integre a VisioSoil com seus sistemas existentes via API RESTful documentada.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Manejo de precisão reduz desperdício de insumos e contribui para uma agricultura mais sustentável.",
  },
];

export default function Benefits() {
  return (
    <section id="funcionalidades" className="section-padding bg-gradient-section-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

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
            <span className="w-2 h-2 rounded-full bg-accent" />
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Tecnologia desenvolvida para
            <br />
            <span className="text-gradient">as necessidades do campo</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Cada funcionalidade da VisioSoil foi pensada para resolver problemas reais
            de produtores, consultores e laboratórios.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {mainFeatures.map(({ icon: Icon, title, description, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 lg:p-8 card-glow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon size={28} className="text-primary" />
              </div>

              <div className="font-mono text-sm font-bold text-primary mb-3">
                {highlight}
              </div>

              <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                {title}
              </h3>

              <p className="text-text-secondary leading-relaxed">
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
          className="glass rounded-2xl p-6 lg:p-8"
        >
          <h3 className="font-display font-bold text-xl text-text-primary mb-8 text-center">
            Mais recursos inclusos
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {secondaryFeatures.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center lg:text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center mb-3 mx-auto lg:mx-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <h4 className="font-display font-semibold text-text-primary mb-1">
                  {title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
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
