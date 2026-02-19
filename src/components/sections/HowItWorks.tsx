import { motion } from "motion/react";
import { Camera, Cpu, FileText, ArrowDown } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Capture a Imagem",
    subtitle: "Simples como tirar uma foto",
    description:
      "Utilize seu smartphone para fotografar a amostra de solo. Nossa interface guia você para garantir as melhores condições de captura. Não é necessário nenhum equipamento especial, preparo químico ou treinamento técnico.",
    features: [
      "Funciona com qualquer smartphone",
      "Guia de enquadramento inteligente",
      "Validação automática de qualidade",
    ],
  },
  {
    num: "02",
    icon: Cpu,
    title: "Processamento Inteligente",
    subtitle: "Nossa tecnologia em ação",
    description:
      "A imagem é processada por nosso sistema proprietário de análise. Algoritmos avançados identificam as características granulométricas e realizam a classificação textural conforme padrões internacionais reconhecidos.",
    features: [
      "Tecnologia proprietária VisioSoil",
      "Processamento em tempo real",
      "Classificação padronizada USDA",
    ],
  },
  {
    num: "03",
    icon: FileText,
    title: "Resultado Completo",
    subtitle: "Diagnóstico detalhado",
    description:
      "Em segundos você recebe um relatório completo com a classificação textural, percentuais estimados de areia, silte e argila, grau de confiança da análise e recomendações práticas para seu contexto.",
    features: [
      "12 classes texturais identificadas",
      "Relatório PDF exportável",
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
          className="text-center mb-16 lg:mb-20"
        >
          <span className="badge mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Três passos simples para
            <br />
            <span className="text-gradient">resultados precisos</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Desenvolvemos um processo intuitivo que qualquer pessoa pode utilizar,
            sem necessidade de conhecimento técnico prévio.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0">
          {steps.map(({ num, icon: Icon, title, subtitle, description, features }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Passo {num}
                    </span>
                    <span className="text-text-muted text-sm">{subtitle}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-4">
                    {title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed mb-6 lg:text-lg">
                    {description}
                  </p>

                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="card p-8 lg:p-12 text-center">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center mb-6">
                        <Icon size={40} className="text-primary" />
                      </div>
                      <span className="font-mono text-6xl lg:text-7xl font-bold text-text-primary/5">
                        {num}
                      </span>
                    </div>

                    {/* Connection arrow */}
                    {i < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center">
                        <ArrowDown size={24} className="text-border" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {i < steps.length - 1 && (
                <div className="divider my-12 lg:my-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
