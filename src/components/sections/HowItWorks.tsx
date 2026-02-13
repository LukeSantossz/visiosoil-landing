import { motion } from "motion/react";
import { staggerContainer, fadeSlideUp } from "../../hooks/useScrollReveal";
import { Camera, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Fotografe a amostra",
    desc: "Capture uma imagem da amostra de solo com seu smartphone sob condições padronizadas. Sem preparo químico, sem reagentes.",
    color: "#D4A574",
    bgColor: "#D4A574",
  },
  {
    num: "02",
    icon: Cpu,
    title: "IA classifica a textura",
    desc: "Algoritmos de visão computacional extraem atributos visuais e modelos de ML classificam a textura em uma das 12 classes do triângulo textural.",
    color: "#0D7377",
    bgColor: "#0D7377",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Receba o diagnóstico",
    desc: "Relatório detalhado com percentuais de areia, silte e argila, classe textural, grau de confiança e recomendações de manejo.",
    color: "#00BCD4",
    bgColor: "#00BCD4",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-(--spacing-section) bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block font-mono text-xs font-semibold text-teal-deep uppercase tracking-widest mb-4">
            Como Funciona
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-deep">
            De foto a diagnóstico em{" "}
            <span className="text-gradient-teal">três passos</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-sand-warm via-teal-deep to-cyan-electric opacity-20" />

          {steps.map(({ num, icon: Icon, title, desc, color, bgColor }) => (
            <motion.div
              key={num}
              variants={fadeSlideUp}
              className="relative text-center group"
            >
              {/* Step number */}
              <motion.div
                className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${bgColor}12`, border: `2px solid ${bgColor}25` }}
                whileHover={{ boxShadow: `0 0 30px ${bgColor}30` }}
              >
                <Icon size={28} style={{ color }} />
              </motion.div>

              <span
                className="font-mono text-6xl font-black absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none select-none"
                style={{ color: `${bgColor}08` }}
              >
                {num}
              </span>

              <h3 className="font-display font-bold text-xl text-charcoal-deep mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-charcoal-deep/60 leading-relaxed max-w-xs mx-auto">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
