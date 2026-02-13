import { motion } from "motion/react";
import { staggerContainer, fadeSlideUp } from "../../hooks/useScrollReveal";
import { Timer, Target, Coins, Smartphone, BarChart3, Leaf } from "lucide-react";

const benefits = [
  { icon: Timer, title: "Velocidade", desc: "Resultados em segundos, não semanas. Decisões de manejo no timing certo." },
  { icon: Target, title: "Acurácia", desc: "Modelos validados contra laudos laboratoriais certificados com F1-score rigoroso." },
  { icon: Coins, title: "Economia", desc: "Fração do custo de análises tradicionais. Sem reagentes, sem envio de amostras." },
  { icon: Smartphone, title: "Acessibilidade", desc: "Funciona com qualquer smartphone. Análise direto no campo, offline-ready." },
  { icon: BarChart3, title: "Escalabilidade", desc: "Analise centenas de amostras por dia. Ideal para mapeamento de grandes áreas." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Manejo de precisão reduz desperdício de insumos e protege lençóis freáticos." },
];

export default function Benefits() {
  return (
    <section className="py-(--spacing-section) bg-mesh-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-deep/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-electric/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-mono text-xs font-semibold text-cyan-electric uppercase tracking-widest mb-4">
            Vantagens
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Por que a VisioSoil transforma a{" "}
            <span className="text-cyan-electric">análise do solo</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeSlideUp}
              className="group p-7 rounded-[var(--radius-card)] bg-white/5 border border-white/8 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-electric/20 transition-all duration-400"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-deep/20 flex items-center justify-center mb-5 group-hover:bg-teal-deep/35 transition-colors">
                <Icon size={22} className="text-cyan-electric" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {title}
              </h3>
              <p className="font-body text-sm text-white/55 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
