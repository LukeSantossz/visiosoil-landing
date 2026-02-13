import { motion } from "motion/react";
import { staggerContainer, fadeSlideUp } from "../../hooks/useScrollReveal";
import { Sprout, FlaskConical, BarChart2, Shield } from "lucide-react";

const segments = [
  {
    icon: Sprout,
    title: "Produtores Rurais",
    desc: "Autonomia e agilidade na tomada de decisão. Analise o solo direto no campo com seu smartphone, sem depender de laboratórios.",
    benefits: ["Análise instantânea no campo", "Manejo de precisão otimizado", "Redução de custos com insumos"],
    accent: "#4CAF50",
  },
  {
    icon: FlaskConical,
    title: "Laboratórios de Solos",
    desc: "Ferramenta complementar que acelera a triagem e pré-análise, integrando-se aos seus fluxos de trabalho existentes.",
    benefits: ["Triagem automatizada", "Integração com LIMS", "Volume processado 10x maior"],
    accent: "#0D7377",
  },
  {
    icon: BarChart2,
    title: "Consultores Agrícolas",
    desc: "Dados precisos e rápidos para laudos técnicos. Impressione seus clientes com diagnósticos em tempo real.",
    benefits: ["Laudos instantâneos in-loco", "Mapeamento de propriedades", "Relatórios personalizados"],
    accent: "#00BCD4",
  },
  {
    icon: Shield,
    title: "Seguradoras & Crédito",
    desc: "Base confiável de dados para análise de risco, subscrição de apólices agrícolas e concessão de crédito rural.",
    benefits: ["Due diligence automatizada", "Análise de risco objetiva", "Auditoria de campo digital"],
    accent: "#6B4226",
  },
];

export default function Audience() {
  return (
    <section id="solucoes" className="py-(--spacing-section) bg-cream-off relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-mono text-xs font-semibold text-teal-deep uppercase tracking-widest mb-4">
            Soluções
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-deep">
            Para quem é a{" "}
            <span className="text-gradient-teal">VisioSoil</span>?
          </h2>
          <p className="mt-4 text-lg text-charcoal-deep/60 font-body">
            Uma plataforma, múltiplas aplicações. De produtores a instituições financeiras.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {segments.map(({ icon: Icon, title, desc, benefits: bens, accent }) => (
            <motion.div
              key={title}
              variants={fadeSlideUp}
              className="group bg-white rounded-[var(--radius-card)] border border-sand-warm/25 p-8 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${accent}12`, border: `1.5px solid ${accent}20` }}
                >
                  <Icon size={26} style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-charcoal-deep mb-2">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-deep/60 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-sand-warm/20 flex flex-col gap-2">
                {bens.map((b) => (
                  <span key={b} className="flex items-center gap-2.5 text-sm font-body text-charcoal-deep/70">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
