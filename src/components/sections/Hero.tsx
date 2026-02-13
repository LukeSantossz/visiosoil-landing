import { motion } from "motion/react";
import { ArrowRight, Camera, Zap, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

const stats = [
  { value: "60s", label: "Tempo de análise" },
  { value: "95%+", label: "Acurácia alvo" },
  { value: "12", label: "Classes texturais" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-mesh-hero overflow-hidden">
      {/* Decorative strata lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[20, 35, 55, 75, 90].map((top, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.15 }}
            transition={{ duration: 1.8, delay: 0.8 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="strata-line absolute left-0 right-0"
            style={{ top: `${top}%` }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-teal-deep/10"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-deep/8 border border-teal-deep/15 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-electric animate-pulse" />
              <span className="font-body text-sm font-medium text-teal-deep">
                Powered by Machine Learning
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-charcoal-deep leading-[1.08]"
            >
              Classificação{" "}
              <span className="text-gradient-teal">Textural</span>
              <br />
              do Solo por{" "}
              <span className="text-gradient-soil">IA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg lg:text-xl text-charcoal-deep/70 max-w-xl leading-relaxed font-body"
            >
              Transforme uma foto do solo em diagnóstico granulométrico instantâneo.
              Visão computacional e ML para substituir semanas de análise laboratorial
              por <strong className="text-charcoal-deep font-semibold">resultados em segundos</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" icon={<ArrowRight size={20} />} href="#contato">
                Solicitar Acesso
              </Button>
              <Button size="lg" variant="outline" href="#como-funciona">
                Como Funciona
              </Button>
            </motion.div>

            {/* Micro-features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {[
                { icon: Camera, text: "Análise via câmera" },
                { icon: Zap, text: "Resultado em segundos" },
                { icon: ShieldCheck, text: "Validado cientificamente" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 text-sm font-body text-charcoal-deep/60"
                >
                  <Icon size={16} className="text-teal-deep" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual / Triângulo Textural */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-deep/10 to-cyan-electric/5 rounded-3xl blur-3xl" />

            {/* Card with triangle */}
            <div className="relative w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl border border-sand-warm/30 shadow-card p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-electric animate-pulse" />
                <span className="font-mono text-xs text-charcoal-deep/50 uppercase tracking-widest">
                  Análise em Progresso
                </span>
              </div>

              {/* SVG Textural Triangle */}
              <svg viewBox="0 0 400 360" className="w-full" aria-label="Triângulo textural do solo">
                <defs>
                  <linearGradient id="tri-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D4A574" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#6B4226" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Triangle outline */}
                <polygon
                  points="200,20 380,340 20,340"
                  fill="url(#tri-bg)"
                  stroke="#6B4226"
                  strokeWidth="2"
                  opacity="0.8"
                />

                {/* Inner region lines (simplified) */}
                {[
                  "200,20 90,220", "200,20 310,220",
                  "80,240 320,240", "60,280 340,280",
                  "120,150 350,300", "280,150 50,300",
                ].map((pts, i) => (
                  <line
                    key={i}
                    x1={Number(pts.split(" ")[0].split(",")[0])}
                    y1={Number(pts.split(" ")[0].split(",")[1])}
                    x2={Number(pts.split(" ")[1].split(",")[0])}
                    y2={Number(pts.split(" ")[1].split(",")[1])}
                    stroke="#8B5E3C"
                    strokeWidth="0.8"
                    opacity="0.3"
                  />
                ))}

                {/* Labels */}
                <text x="200" y="14" textAnchor="middle" className="font-mono" fontSize="11" fill="#6B4226" fontWeight="600">ARGILA</text>
                <text x="8" y="355" textAnchor="start" className="font-mono" fontSize="11" fill="#6B4226" fontWeight="600">AREIA</text>
                <text x="392" y="355" textAnchor="end" className="font-mono" fontSize="11" fill="#6B4226" fontWeight="600">SILTE</text>

                {/* Animated classified point */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: "backOut" }}
                >
                  <circle cx="220" cy="210" r="20" fill="#0D7377" opacity="0.15" />
                  <circle cx="220" cy="210" r="10" fill="#0D7377" opacity="0.3" />
                  <circle cx="220" cy="210" r="5" fill="#00BCD4" />
                  <motion.circle
                    cx="220"
                    cy="210"
                    r="16"
                    fill="none"
                    stroke="#00BCD4"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "220px 210px" }}
                  />
                </motion.g>

                {/* Classification label */}
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <rect x="250" y="185" width="120" height="28" rx="6" fill="#0D7377" />
                  <text x="310" y="204" textAnchor="middle" fontSize="12" fill="white" fontWeight="600" fontFamily="var(--font-mono)">
                    Argilosa
                  </text>
                </motion.g>
              </svg>

              {/* Result bar */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: "Areia", value: "28%", color: "#D4A574" },
                  { label: "Silte", value: "22%", color: "#8B5E3C" },
                  { label: "Argila", value: "50%", color: "#6B4226" },
                ].map(({ label, value, color }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.2 }}
                    className="bg-cream-off rounded-lg p-3 text-center"
                  >
                    <div className="w-full h-1.5 rounded-full bg-charcoal-deep/10 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: value }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                    <span className="font-mono text-xs text-charcoal-deep/50 block">
                      {label}
                    </span>
                    <span className="font-mono text-sm font-semibold text-charcoal-deep">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-3 max-w-2xl mx-auto lg:mx-0 gap-8"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <div className="font-display font-extrabold text-3xl lg:text-4xl text-teal-deep">
                {value}
              </div>
              <div className="font-body text-sm text-charcoal-deep/50 mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
