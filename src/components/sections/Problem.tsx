import { motion } from "motion/react";
import { Clock, DollarSign, Truck, Users } from "lucide-react";
import BackgroundAnimation from "../ui/BackgroundAnimation";

const problems = [
  {
    icon: Clock,
    title: "Processo Demorado",
    description: "Análise tradicional pode levar de 10 a 30 dias para ficar pronta.",
    stat: "10-30 dias",
  },
  {
    icon: DollarSign,
    title: "Alto Custo",
    description: "Cada análise custa entre R$ 40 e R$ 150, inviável para monitoramento frequente.",
    stat: "R$ 40-150",
  },
  {
    icon: Truck,
    title: "Logística Complexa",
    description: "Coleta, embalagem e transporte das amostras criam um gargalo operacional.",
    stat: "5+ etapas",
  },
  {
    icon: Users,
    title: "Acesso Limitado",
    description: "77% dos produtores são agricultura familiar com dificuldade de acesso a tecnologias.",
    stat: "77%",
  },
];

export default function Problem() {
  return (
    <section id="sobre" className="relative section-padding bg-bg-secondary overflow-hidden">
      <BackgroundAnimation variant="minimal" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge mb-4 bg-secondary">O Desafio</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
            Por que isso importa?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A análise de solo é essencial para a agricultura, mas os métodos
            tradicionais são caros, lentos e inacessíveis para a maioria dos produtores.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(({ icon: Icon, title, description, stat }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center hover-lift"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Icon size={24} className="text-secondary" />
              </div>
              <div className="font-mono text-2xl font-bold text-secondary mb-2">
                {stat}
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">
                {title}
              </h3>
              <p className="text-sm text-text-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
