import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Fundação Shunji Nishimura",
    shortName: "FSN",
    logo: "https://tecnologiaesociedade.com.br/wp-content/uploads/2024/06/3_Img-Destaque-Fundacao-Shunji-NishimuraBusiness-Academy-1.png",
    url: "https://www.fundacaonishimura.com.br",
    description: "Tecnologia & Inovação Agrícola",
  },
  {
    name: "Instituto Politécnico de Santarém",
    shortName: "IPS",
    logo: "https://www.ipsantarem.pt/wp-content/uploads/2022/06/Logo_IPS.svg",
    url: "https://www.ipsantarem.pt",
    description: "Portugal - Pesquisa Acadêmica",
  },
  {
    name: "UFMG",
    shortName: "UFMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/UFMG_logo.png/800px-UFMG_logo.png",
    url: "https://ufmg.br",
    description: "Universidade Federal de Minas Gerais",
  },
  {
    name: "Centro Paula Souza",
    shortName: "CPS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Logo_CPS.png",
    url: "https://www.cps.sp.gov.br",
    description: "Educação Profissional SP",
  },
];

export default function Partners() {
  return (
    <section id="parceiros" className="py-16 lg:py-20 bg-bg-secondary border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3">
            Parceiros & Instituições
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Validado e desenvolvido em colaboração com instituições de ensino e pesquisa reconhecidas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
              className="group card p-5 lg:p-6 flex flex-col items-center text-center hover:border-primary/30 card-glow"
            >
              {/* Logo container */}
              <div className="w-full h-16 lg:h-20 mb-4 flex items-center justify-center bg-white/5 rounded-lg overflow-hidden p-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain partner-logo group-hover:filter-none group-hover:opacity-100 transition-all"
                  onError={(e) => {
                    // Fallback to text if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-mono text-2xl font-bold text-primary">
                  {partner.shortName}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display font-semibold text-sm lg:text-base text-text-primary mb-1 group-hover:text-primary transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs text-text-muted mb-3">
                {partner.description}
              </p>

              {/* Link indicator */}
              <span className="flex items-center gap-1.5 text-xs text-text-muted group-hover:text-primary transition-colors mt-auto">
                <span>Visitar site</span>
                <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
