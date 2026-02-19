import { motion } from "motion/react";
import { Camera, Cpu, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Tire uma Foto",
    description: "Abra o app e fotografe a amostra de solo com a câmera do seu celular.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "IA Analisa",
    description: "Nossa inteligência artificial processa a imagem e identifica a textura.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Receba o Resultado",
    description: "Em segundos, veja a classificação textural direto na tela.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge mb-4">Como Funciona</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
            Três passos simples
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Processo intuitivo que qualquer pessoa pode usar, sem conhecimento técnico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ num, icon: Icon, title, description }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="font-mono text-4xl font-bold text-border">
                    {num}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {title}
                </h3>
                <p className="text-text-secondary">
                  {description}
                </p>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
