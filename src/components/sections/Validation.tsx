import { motion } from "motion/react";
import { Award, Shield, FileCheck, Globe } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Tecnologia Validada",
    description: "Desenvolvida com instituições de pesquisa reconhecidas no Brasil e Portugal.",
  },
  {
    icon: Shield,
    title: "Modelo em Evolução",
    description: "Treinado com amostras de solos brasileiros e em constante aprimoramento.",
  },
  {
    icon: FileCheck,
    title: "5 Classes Texturais",
    description: "Classificação simplificada para uso prático no campo.",
  },
  {
    icon: Globe,
    title: "ODS 9 - ONU",
    description: "Alinhado aos Objetivos de Desenvolvimento Sustentável.",
  },
];

const stats = [
  { value: "4+", label: "Parceiros" },
  { value: "80%", label: "Precisão atual" },
  { value: "5", label: "Classes" },
  { value: "2025", label: "Lançamento" },
];

export default function Validation() {
  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Credibilidade
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              Tecnologia em
              <br />
              <span className="text-text-secondary">desenvolvimento contínuo</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 sm:mb-8 leading-relaxed">
              A VisioSoil é resultado de pesquisa acadêmica em colaboração
              com instituições reconhecidas. Nosso modelo está em constante
              evolução para melhorar a precisão e expandir as classes texturais.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 text-center lg:text-left"
                >
                  <div className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-primary-light mb-0.5 sm:mb-1">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {credentials.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="card p-4 sm:p-5 lg:p-6 flex gap-3 sm:gap-4 group hover:border-primary/30"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-0.5 sm:mb-1">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-secondary/5 border border-secondary/20 text-center"
        >
          <p className="text-xs sm:text-sm text-text-secondary max-w-3xl mx-auto">
            <strong className="text-secondary">Nota:</strong> A VisioSoil é uma ferramenta complementar em desenvolvimento.
            Para laudos regulatórios e certificações oficiais, consulte um laboratório credenciado.
            Atualmente trabalhamos com 5 classes texturais e precisão de aproximadamente 80%.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
