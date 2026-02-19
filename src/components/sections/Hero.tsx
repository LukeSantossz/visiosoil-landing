import { motion } from "motion/react";
import { ArrowRight, Leaf, Smartphone, Zap, CheckCircle } from "lucide-react";
import Button from "../ui/Button";

const features = [
  { icon: Smartphone, text: "100% Mobile" },
  { icon: Zap, text: "Resultado em segundos" },
  { icon: Leaf, text: "Para o produtor rural" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge mb-6">
              <Leaf size={14} />
              Tecnologia para o campo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
              Análise de solo
              <br />
              <span className="text-gradient">na palma da mão</span>
            </h1>

            <p className="text-lg text-text-secondary mb-8 max-w-lg">
              Classificação textural do solo por inteligência artificial.
              Tire uma foto, receba o resultado. Simples assim.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" href="#contato" icon={<ArrowRight size={18} />}>
                Quero Acesso Antecipado
              </Button>
              <Button size="lg" variant="outline" href="#como-funciona">
                Como Funciona
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-text-secondary">
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-bg-card rounded-3xl p-8 shadow-2xl border border-border">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "5", label: "Classes texturais" },
                  { value: "80%", label: "Precisão" },
                  { value: "<1min", label: "Tempo de análise" },
                  { value: "3°", label: "Lugar FETEPS 2025" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center p-4 bg-bg-secondary rounded-2xl">
                    <div className="font-mono text-3xl font-bold text-primary mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-text-muted">{label}</div>
                  </div>
                ))}
              </div>

              {/* Features list */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="space-y-3">
                  {["Funciona offline", "Sem equipamentos especiais", "Histórico de análises"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-primary" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
