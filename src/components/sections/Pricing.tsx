import { motion } from "motion/react";
import { Check, Sparkles, HelpCircle } from "lucide-react";
import Button from "../ui/Button";

const plans = [
  {
    name: "Starter",
    description: "Para produtores que querem experimentar",
    price: "Grátis",
    priceSuffix: "para sempre",
    features: [
      { text: "10 análises por mês", included: true },
      { text: "Classificação textural completa", included: true },
      { text: "Relatório PDF básico", included: true },
      { text: "Aplicativo mobile", included: true },
      { text: "Suporte por email", included: true },
      { text: "API de integração", included: false },
      { text: "Dashboard analítico", included: false },
      { text: "Múltiplos usuários", included: false },
    ],
    cta: "Começar Gratuitamente",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Para consultores e profissionais",
    price: "R$ 97",
    priceSuffix: "/mês",
    features: [
      { text: "Análises ilimitadas", included: true },
      { text: "Classificação textural completa", included: true },
      { text: "Relatórios personalizáveis", included: true },
      { text: "Aplicativo mobile", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "API de integração", included: true },
      { text: "Dashboard analítico", included: true },
      { text: "Até 5 usuários", included: true },
    ],
    cta: "Iniciar Teste Grátis",
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Enterprise",
    description: "Para grandes operações e empresas",
    price: "Sob consulta",
    priceSuffix: "",
    features: [
      { text: "Tudo do Professional", included: true },
      { text: "Usuários ilimitados", included: true },
      { text: "White-label disponível", included: true },
      { text: "SLA garantido", included: true },
      { text: "Integração com ERP", included: true },
      { text: "Treinamento dedicado", included: true },
      { text: "Account manager", included: true },
      { text: "Suporte 24/7", included: true },
    ],
    cta: "Falar com Vendas",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Posso mudar de plano depois?",
    a: "Sim, você pode fazer upgrade ou downgrade a qualquer momento.",
  },
  {
    q: "O teste grátis exige cartão?",
    a: "Não, o plano Starter é gratuito para sempre e não requer cartão.",
  },
  {
    q: "Qual a política de reembolso?",
    a: "Oferecemos reembolso total em até 30 dias se não estiver satisfeito.",
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

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
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Preços transparentes,
            <br />
            <span className="text-gradient">valor real</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comece gratuitamente e escale conforme sua necessidade.
            Sem surpresas, sem taxas ocultas.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {plans.map(({ name, description, price, priceSuffix, features, cta, highlighted, badge }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                highlighted
                  ? "bg-gradient-to-b from-primary/15 to-primary/5 border-2 border-primary/30 lg:scale-105"
                  : "card"
              }`}
            >
              {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                  <Sparkles size={12} />
                  {badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                  {name}
                </h3>
                <p className="text-sm text-text-muted">{description}</p>
              </div>

              <div className="mb-8">
                <span className={`font-display font-bold text-4xl ${highlighted ? "text-gradient" : "text-text-primary"}`}>
                  {price}
                </span>
                {priceSuffix && (
                  <span className="text-text-muted ml-1">{priceSuffix}</span>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {features.map(({ text, included }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      included
                        ? highlighted ? "bg-primary/30" : "bg-primary/20"
                        : "bg-white/5"
                    }`}>
                      <Check size={12} className={included ? "text-primary" : "text-text-muted"} />
                    </div>
                    <span className={`text-sm ${included ? "text-text-secondary" : "text-text-muted line-through"}`}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={highlighted ? "primary" : "secondary"}
                href="#contato"
                className="w-full"
              >
                {cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle size={20} className="text-primary" />
            <h3 className="font-display font-bold text-lg text-text-primary">
              Perguntas frequentes sobre preços
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h4 className="font-semibold text-text-primary text-sm mb-1">{q}</h4>
                <p className="text-sm text-text-muted">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
