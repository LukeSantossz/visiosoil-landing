import { motion } from "motion/react";
import { staggerContainer, fadeSlideUp } from "../../hooks/useScrollReveal";
import { Clock, DollarSign, Truck } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Lenta",
    desc: "Resultados laboratoriais levam semanas. Decisões de manejo não podem esperar.",
    stat: "15–30 dias",
    statLabel: "tempo médio de laudo",
  },
  {
    icon: DollarSign,
    title: "Cara",
    desc: "Custos com reagentes, equipamentos e mão de obra especializada tornam a análise inacessível para muitos produtores.",
    stat: "R$ 80–200",
    statLabel: "por amostra",
  },
  {
    icon: Truck,
    title: "Complexa",
    desc: "A logística de coleta, embalagem e envio de amostras cria um gargalo que desestimula o monitoramento contínuo.",
    stat: "5 etapas",
    statLabel: "até o resultado",
  },
];

export default function Problem() {
  return (
    <section className="py-(--spacing-section) bg-cream-off relative overflow-hidden">
      {/* Subtle soil strata decoration */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sand-warm/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-mono text-xs font-semibold text-soil-brown uppercase tracking-widest mb-4">
            O Problema
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-deep">
            A análise laboratorial tradicional{" "}
            <span className="text-gradient-soil">não acompanha</span>{" "}
            o ritmo do campo
          </h2>
          <p className="mt-4 text-lg text-charcoal-deep/60 font-body">
            Métodos convencionais de análise granulométrica dependem de
            infraestrutura complexa, químicos e prazos que limitam a tomada de
            decisão dos produtores rurais.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pains.map(({ icon: Icon, title, desc, stat, statLabel }) => (
            <motion.div
              key={title}
              variants={fadeSlideUp}
              className="group relative bg-white rounded-[var(--radius-card)] border border-sand-warm/25 p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-soil-brown/8 flex items-center justify-center mb-5 group-hover:bg-soil-brown/15 transition-colors">
                <Icon size={24} className="text-soil-brown" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal-deep mb-3">
                {title}
              </h3>
              <p className="font-body text-charcoal-deep/60 text-sm leading-relaxed mb-6">
                {desc}
              </p>
              <div className="pt-4 border-t border-sand-warm/20">
                <span className="font-mono text-2xl font-bold text-soil-brown">
                  {stat}
                </span>
                <span className="block font-body text-xs text-charcoal-deep/40 mt-1">
                  {statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
