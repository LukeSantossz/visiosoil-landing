import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, Smartphone } from "lucide-react";
import Button from "../ui/Button";

const highlights = [
  "Resultado em segundos",
  "Direto no celular",
  "Sem envio de amostras",
  "Fácil de usar",
];

const stats = [
  { value: "5", label: "Classes texturais" },
  { value: "80%", label: "Precisão atual" },
  { value: "<1min", label: "Tempo de análise" },
  { value: "100%", label: "Mobile" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-16 sm:pt-20">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated orbs - hidden on mobile */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[100px] lg:blur-[150px] hidden sm:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] bg-accent/15 rounded-full blur-[80px] lg:blur-[120px] hidden sm:block"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container-custom py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Smartphone size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary-light">
              Aplicativo para Análise de Solo
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Classificação Textural
            <br />
            do Solo por{" "}
            <span className="text-gradient">IA</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 px-4"
          >
            Um aplicativo simples que transforma uma foto do seu celular em um
            diagnóstico da textura do solo. Desenvolvido para{" "}
            <span className="text-text-primary font-semibold">pequenos produtores rurais</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
          >
            <Button size="lg" icon={<ArrowRight size={20} />} href="#contato" className="w-full sm:w-auto">
              Solicitar Acesso Antecipado
            </Button>
            <Button size="lg" variant="secondary" href="#como-funciona" icon={<Play size={18} />} iconPosition="left" className="w-full sm:w-auto">
              Como Funciona
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4"
          >
            {highlights.map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>{text}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 sm:mt-24"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-mono font-bold text-3xl sm:text-4xl text-primary-light mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-text-muted">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
