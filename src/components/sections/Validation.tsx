import { motion } from "motion/react";
import { Award, Shield, FileCheck, Globe } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Tecnologia Validada",
    description:
      "Desenvolvida em parceria com instituições de pesquisa reconhecidas no Brasil e em Portugal.",
  },
  {
    icon: Shield,
    title: "Precisão Comprovada",
    description:
      "Resultados validados contra análises laboratoriais certificadas com altos índices de concordância.",
  },
  {
    icon: FileCheck,
    title: "Padrão Internacional",
    description:
      "Classificação seguindo o sistema de 12 classes texturais do USDA, reconhecido mundialmente.",
  },
  {
    icon: Globe,
    title: "ODS 9 - ONU",
    description:
      "Alinhado ao Objetivo de Desenvolvimento Sustentável de Indústria, Inovação e Infraestrutura.",
  },
];

const stats = [
  { value: "4+", label: "Instituições parceiras" },
  { value: "95%+", label: "Precisão alvo" },
  { value: "12", label: "Classes texturais" },
  { value: "2024", label: "Tecnologia atual" },
];

export default function Validation() {
  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Credibilidade
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Tecnologia desenvolvida
              <br />
              <span className="text-text-secondary">com rigor científico</span>
            </h2>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              A VisioSoil não é apenas uma ferramenta, é o resultado de pesquisa
              e desenvolvimento em colaboração com instituições de ensino e
              pesquisa reconhecidas. Nossa metodologia proprietária foi
              validada contra padrões laboratoriais estabelecidos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-bg-card border border-border rounded-xl p-4"
                >
                  <div className="font-mono text-2xl lg:text-3xl font-bold text-primary-light mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-text-muted">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {credentials.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="card p-5 lg:p-6 flex gap-4 group hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
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
          className="mt-12 p-6 rounded-xl bg-secondary/5 border border-secondary/20 text-center"
        >
          <p className="text-sm text-text-secondary max-w-3xl mx-auto">
            <strong className="text-secondary">Nota:</strong> A VisioSoil é uma ferramenta complementar
            que acelera a triagem e pré-análise. Para laudos regulatórios e certificações oficiais,
            consulte um laboratório credenciado. Nossa tecnologia é ideal para decisões rápidas
            de manejo e monitoramento contínuo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
