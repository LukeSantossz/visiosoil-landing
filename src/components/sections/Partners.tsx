import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Fundação Shunji Nishimura",
    shortName: "FSN",
    url: "https://www.fundacaonishimura.com.br",
    description: "Tecnologia & Inovação Agrícola",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Instituto Politécnico de Santarém",
    shortName: "IPS",
    url: "https://www.ipsantarem.pt",
    description: "Portugal - Pesquisa",
    gradient: "from-red-500 to-red-700",
  },
  {
    name: "UFMG",
    shortName: "UFMG",
    url: "https://ufmg.br",
    description: "Pesquisa Universitária",
    gradient: "from-red-600 to-red-800",
  },
  {
    name: "Centro Paula Souza",
    shortName: "CPS",
    url: "https://www.cps.sp.gov.br",
    description: "Educação Profissional",
    gradient: "from-purple-500 to-purple-700",
  },
];

export default function Partners() {
  return (
    <section id="parceiros" className="py-16 sm:py-20 lg:py-24 bg-bg-secondary border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Parceiros
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3">
            Parceiros & Instituições
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
            Desenvolvido em colaboração com instituições reconhecidas
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-bg-card border border-border hover:border-primary/30 transition-all"
            >
              {/* Logo placeholder with gradient */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                <span className="font-display font-bold text-lg sm:text-xl text-white">
                  {partner.shortName}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {partner.name}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mb-3">
                {partner.description}
              </p>

              {/* Link indicator */}
              <span className="flex items-center gap-1.5 text-xs text-text-muted group-hover:text-primary transition-colors mt-auto">
                <span>Visitar</span>
                <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-text-muted"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <span>Validação Científica</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <span>Pesquisa Colaborativa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <span>Brasil & Portugal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
