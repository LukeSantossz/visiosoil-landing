import { motion } from "motion/react";
import { staggerContainer, fadeSlideUp } from "../../hooks/useScrollReveal";
import { Check } from "lucide-react";
import Button from "../ui/Button";

const plans = [
  {
    name: "Produtor",
    desc: "Para produtores rurais e prestadores de serviço",
    price: "Gratuito",
    priceSub: "até 10 análises/mês",
    features: [
      "10 análises por mês",
      "Classificação textural básica",
      "Relatório PDF simples",
      "Acesso via smartphone",
    ],
    cta: "Começar Grátis",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Profissional",
    desc: "Para consultores e laboratórios de solos",
    price: "Sob consulta",
    priceSub: "assinatura mensal",
    features: [
      "Análises ilimitadas",
      "Relatórios detalhados e customizáveis",
      "API de integração com LIMS",
      "Dashboard analítico",
      "Suporte técnico prioritário",
      "Mapeamento por propriedade",
    ],
    cta: "Solicitar Proposta",
    variant: "primary" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "Para seguradoras, cooperativas e instituições",
    price: "Personalizado",
    priceSub: "plano corporativo",
    features: [
      "Tudo do Profissional",
      "Multi-tenant & white-label",
      "SLA garantido",
      "Integração com ERPs agrícolas",
      "Treinamento dedicado",
      "Account manager exclusivo",
    ],
    cta: "Falar com Comercial",
    variant: "secondary" as const,
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-(--spacing-section) bg-cream-off relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-mono text-xs font-semibold text-teal-deep uppercase tracking-widest mb-4">
            Planos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-deep">
            Escalável do campo ao{" "}
            <span className="text-gradient-teal">escritório</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal-deep/60 font-body">
            Modelo SaaS flexível que se adapta do produtor individual à grande corporação.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map(({ name, desc, price, priceSub, features, cta, variant, highlighted }) => (
            <motion.div
              key={name}
              variants={fadeSlideUp}
              className={`relative rounded-[var(--radius-card)] p-8 flex flex-col transition-all duration-400 ${
                highlighted
                  ? "bg-charcoal-deep text-white shadow-xl scale-[1.02] border-2 border-teal-deep/40"
                  : "bg-white border border-sand-warm/25 shadow-card hover:shadow-card-hover hover:-translate-y-1"
              }`}
            >
              {highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-deep text-white text-xs font-mono font-semibold rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display font-bold text-xl ${
                    highlighted ? "text-white" : "text-charcoal-deep"
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`font-body text-sm mt-1 ${
                    highlighted ? "text-white/60" : "text-charcoal-deep/50"
                  }`}
                >
                  {desc}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`font-display font-extrabold text-3xl ${
                    highlighted ? "text-cyan-electric" : "text-teal-deep"
                  }`}
                >
                  {price}
                </span>
                <span
                  className={`block font-mono text-xs mt-1 ${
                    highlighted ? "text-white/40" : "text-charcoal-deep/40"
                  }`}
                >
                  {priceSub}
                </span>
              </div>

              <ul className="flex-1 flex flex-col gap-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        highlighted ? "text-cyan-electric" : "text-teal-deep"
                      }`}
                    />
                    <span
                      className={`font-body text-sm ${
                        highlighted ? "text-white/75" : "text-charcoal-deep/65"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={highlighted ? "primary" : variant}
                href="#contato"
                className="w-full"
              >
                {cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
