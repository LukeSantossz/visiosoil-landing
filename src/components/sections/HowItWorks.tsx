import { motion } from "motion/react";
import { Camera, Cpu, FileText } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Tire uma Foto",
    subtitle: "Simples como usar a câmera",
    description:
      "Abra o aplicativo no seu celular e fotografe a amostra de solo. Nossa interface guia você para garantir uma captura com boa qualidade.",
    features: [
      "Funciona com qualquer smartphone",
      "Guia de enquadramento na tela",
      "Validação automática da imagem",
    ],
  },
  {
    num: "02",
    icon: Cpu,
    title: "IA Analisa a Imagem",
    subtitle: "Processamento inteligente",
    description:
      "A imagem é processada pelo nosso modelo de inteligência artificial treinado com amostras de solos brasileiros. O algoritmo identifica padrões visuais para classificar a textura.",
    features: [
      "Modelo treinado com solos do Brasil",
      "Processamento rápido",
      "5 classes texturais",
    ],
  },
  {
    num: "03",
    icon: FileText,
    title: "Receba o Resultado",
    subtitle: "Direto no seu celular",
    description:
      "Em segundos você recebe a classificação textural do solo. Informação prática para ajudar nas decisões de manejo da sua propriedade.",
    features: [
      "Resultado instantâneo",
      "Fácil de entender",
      "Histórico de análises",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="badge mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Como Funciona
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-2">
            Três passos simples
            <br />
            <span className="text-gradient">no seu celular</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Um processo intuitivo que qualquer produtor pode utilizar,
            sem necessidade de conhecimento técnico.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {steps.map(({ num, icon: Icon, title, subtitle, description, features }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* Content - alternates sides on desktop */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="font-mono text-xs sm:text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Passo {num}
                  </span>
                  <span className="text-text-muted text-xs sm:text-sm">{subtitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-text-primary mb-3 sm:mb-4">
                  {title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base lg:text-lg">
                  {description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-text-secondary text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual - alternates sides on desktop */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="card p-6 sm:p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="text-primary w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </div>
                  <span className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary/5">
                    {num}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
