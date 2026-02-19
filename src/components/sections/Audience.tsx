import { motion } from "motion/react";
import { Sprout, FlaskConical, BarChart2, Building2, CheckCircle2, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Sprout,
    title: "Produtores Rurais",
    subtitle: "Pequenos, médios e grandes",
    description:
      "Tenha autonomia para analisar o solo da sua propriedade a qualquer momento. Tome decisões de manejo baseadas em dados sem depender de terceiros ou esperar semanas por um laudo.",
    benefits: [
      "Análise instantânea direto no campo",
      "Economia de até 80% comparado a laboratórios",
      "Decisões de manejo no tempo certo",
      "Histórico completo da propriedade",
    ],
    cta: "Ideal para quem busca autonomia",
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Laboratórios de Solo",
    subtitle: "Análise e pesquisa",
    description:
      "Utilize a VisioSoil como ferramenta de triagem e pré-análise. Aumente a produtividade do laboratório com screening automatizado e integre com seus sistemas existentes via API.",
    benefits: [
      "Triagem automatizada de amostras",
      "Integração com sistemas LIMS",
      "Aumento de capacidade operacional",
      "Redução de custos por análise",
    ],
    cta: "Ideal para escalar operações",
    color: "accent",
  },
  {
    icon: BarChart2,
    title: "Consultores Agrícolas",
    subtitle: "Agrônomos e técnicos",
    description:
      "Impressione seus clientes com análises em tempo real durante as visitas técnicas. Gere relatórios profissionais instantâneos e ofereça um diferencial competitivo no seu serviço.",
    benefits: [
      "Análises in-loco durante visitas",
      "Relatórios profissionais personalizáveis",
      "Mapeamento de propriedades",
      "Diferencial competitivo",
    ],
    cta: "Ideal para agregar valor",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Empresas & Instituições",
    subtitle: "Seguradoras, cooperativas, bancos",
    description:
      "Solução white-label para integrar em suas operações. Ofereça análise de solo como parte do seu portfólio de serviços ou utilize para due diligence e análise de risco.",
    benefits: [
      "Solução white-label disponível",
      "API para integração com sistemas",
      "SLA garantido e suporte dedicado",
      "Análise de risco baseada em dados",
    ],
    cta: "Ideal para grandes operações",
    color: "accent",
  },
];

export default function Audience() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Para Quem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Uma plataforma,
            <br />
            <span className="text-gradient">múltiplas aplicações</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A VisioSoil foi desenvolvida para atender diferentes perfis de usuários,
            cada um com suas necessidades específicas.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {audiences.map(({ icon: Icon, title, subtitle, description, benefits, cta, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 lg:p-8 group hover:border-primary/30"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-${color}/10 border border-${color}/20 flex items-center justify-center shrink-0 group-hover:bg-${color}/20 transition-colors`}>
                    <Icon size={28} className={`text-${color}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-text-primary">
                      {title}
                    </h3>
                    <p className="text-sm text-text-muted">{subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {description}
                </p>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className={`text-${color} shrink-0 mt-0.5`} />
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-border">
                  <a
                    href="#contato"
                    className={`inline-flex items-center gap-2 text-${color} font-semibold text-sm hover:gap-3 transition-all`}
                  >
                    <span>{cta}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
