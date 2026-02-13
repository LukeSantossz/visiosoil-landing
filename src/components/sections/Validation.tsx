import { motion } from "motion/react";
import { staggerContainer, fadeSlideUp } from "../../hooks/useScrollReveal";
import { Brain, Database, TestTube, Award } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Banco de Dados Robusto",
    desc: "Amostras coletadas em múltiplas regiões do Brasil, fotografadas sob condições padronizadas e rotuladas com laudos laboratoriais certificados.",
  },
  {
    icon: Brain,
    title: "Modelos ML Comparados",
    desc: "SVM, Random Forest e CNNs treinados e comparados sistematicamente. O melhor modelo selecionado por validação cruzada rigorosa.",
  },
  {
    icon: TestTube,
    title: "Validação Laboratorial",
    desc: "Cada previsão comparada com laudos de laboratórios parceiros. Matriz de confusão, precisão, revocação e F1-score para cada classe textural.",
  },
  {
    icon: Award,
    title: "ODS 9 da ONU",
    desc: "Alinhado ao Objetivo de Desenvolvimento Sustentável 9 — Indústria, Inovação e Infraestrutura para um agronegócio mais eficiente.",
  },
];

const metrics = [
  { label: "Precisão", value: "95%+", sub: "alvo" },
  { label: "Classes", value: "12", sub: "texturais USDA" },
  { label: "Validação", value: "80/20", sub: "train/test split" },
  { label: "Modelos", value: "3+", sub: "comparados" },
];

export default function Validation() {
  return (
    <section className="py-(--spacing-section) bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Metrics + Credibility */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block font-mono text-xs font-semibold text-teal-deep uppercase tracking-widest mb-4">
              Validação Científica
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal-deep mb-6">
              Ciência <span className="text-gradient-teal">rigorosa</span>,{" "}
              resultados <span className="text-gradient-soil">confiáveis</span>
            </h2>
            <p className="font-body text-charcoal-deep/60 leading-relaxed mb-10">
              A metodologia do projeto foi estruturada para garantir rastreabilidade
              e validação em cada etapa — da coleta de dados ao deploy do modelo.
              Parceria com universidades e laboratórios certificados asseguram a
              credibilidade técnica.
            </p>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="bg-cream-off rounded-xl p-5 border border-sand-warm/20"
                >
                  <div className="font-display font-extrabold text-3xl text-teal-deep">
                    {value}
                  </div>
                  <div className="font-body text-sm font-semibold text-charcoal-deep mt-1">
                    {label}
                  </div>
                  <div className="font-mono text-xs text-charcoal-deep/40 mt-0.5">
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Methodology pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeSlideUp}
                className="group flex gap-5 p-6 rounded-[var(--radius-card)] bg-cream-off/60 border border-sand-warm/20 hover:bg-cream-off hover:border-teal-deep/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-deep/8 flex items-center justify-center shrink-0 group-hover:bg-teal-deep/15 transition-colors">
                  <Icon size={22} className="text-teal-deep" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-charcoal-deep mb-1.5">
                    {`${String(i + 1).padStart(2, "0")}. ${title}`}
                  </h3>
                  <p className="font-body text-sm text-charcoal-deep/60 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
