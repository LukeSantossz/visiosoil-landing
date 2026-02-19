import { motion } from "motion/react";
import { Smartphone, Zap, Wallet, MapPin, Leaf, Shield } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "100% Mobile",
    description: "Funciona em qualquer smartphone moderno com câmera.",
  },
  {
    icon: Zap,
    title: "Resultado Instantâneo",
    description: "Classificação em segundos, sem esperar dias por laboratório.",
  },
  {
    icon: Wallet,
    title: "Custo Acessível",
    description: "Desenvolvido para pequenos e médios produtores rurais.",
  },
  {
    icon: MapPin,
    title: "Análise no Campo",
    description: "Use direto na propriedade sem enviar amostras.",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    description: "Manejo mais preciso reduz desperdício de insumos.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Histórico de análises salvo de forma segura.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge mb-4">Benefícios</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
            Por que usar a VisioSoil?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ferramenta pensada para simplificar a vida do produtor rural.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 group hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                {title}
              </h3>
              <p className="text-text-muted text-sm">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
