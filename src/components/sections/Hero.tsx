import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

const highlights = [
  "Análise em menos de 60 segundos",
  "Precisão validada cientificamente",
  "Funciona em qualquer smartphone",
  "Sem necessidade de laboratório",
];

const stats = [
  { value: "<60s", label: "Tempo de análise" },
  { value: "95%+", label: "Precisão" },
  { value: "12", label: "Classes texturais" },
  { value: "24/7", label: "Disponibilidade" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container-custom pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="badge mb-8 mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Tecnologia Brasileira de Análise de Solo</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight"
          >
            Classificação Textural
            <br />
            do Solo com{" "}
            <span className="text-gradient">Inteligência Artificial</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Transforme uma simples foto em um diagnóstico granulométrico completo.
            Nossa tecnologia proprietária utiliza visão computacional para entregar
            resultados que antes levavam semanas em{" "}
            <span className="text-text-primary font-semibold">menos de 1 minuto</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" icon={<ArrowRight size={20} />} href="#contato">
              Solicitar Acesso Gratuito
            </Button>
            <Button size="lg" variant="secondary" href="#demo" icon={<Play size={18} />} iconPosition="left">
              Ver Demonstração
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {highlights.map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle2 size={16} className="text-primary" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 lg:mt-28"
        >
          <div className="glass rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-mono font-bold text-3xl lg:text-4xl text-primary-light mb-2">
                    {value}
                  </div>
                  <div className="font-body text-sm text-text-muted">
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
