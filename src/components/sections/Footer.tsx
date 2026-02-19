import { motion } from "motion/react";
import { Mail, MapPin, ExternalLink, Heart } from "lucide-react";
import Logo from "../ui/Logo";

const partners = [
  {
    name: "Centro Paula Souza",
    description: "Autarquia do Governo de SP responsável pelas Fatecs e Etecs",
    logo: "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/09/logo-cps-2022.svg",
    url: "https://www.cps.sp.gov.br",
    bg: "#8B0000",
  },
  {
    name: "UFMG",
    description: "Universidade Federal de Minas Gerais - Pesquisa em solos",
    logo: "https://www.ufmg.br//app/uploads/2025/09/ufmg-logo.svg",
    url: "https://ufmg.br",
    bg: "#1a1a2e",
  },
  {
    name: "Fundação Shunji Nishimura",
    description: "Ecossistema de educação e inovação agrícola em Pompéia-SP",
    logo: "https://fsnt.org.br/wp-content/uploads/2025/02/Logo-FSNT-horizontal-01.jpg",
    url: "https://fsnt.org.br",
    bg: "#ffffff",
  },
  {
    name: "Politécnico de Santarém",
    description: "Instituto Politécnico de Portugal - Parceria internacional",
    logo: "https://www.ipsantarem.pt/wp-content/uploads/2021/08/cropped-PolitSantarem_Logo-01.png",
    url: "https://www.ipsantarem.pt",
    bg: "#006837",
  },
];

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-tertiary">
      {/* Partners Section */}
      <div className="border-t border-border py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
              Parceiros & Apoiadores
            </h3>
            <p className="text-text-secondary">
              Instituições que colaboram com o desenvolvimento do projeto
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-5 group"
              >
                <div
                  className="h-14 rounded-lg flex items-center justify-center mb-4 px-4"
                  style={{ backgroundColor: partner.bg }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto max-w-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-1">
                  {partner.name}
                </h4>
                <p className="text-sm text-text-muted mb-3">
                  {partner.description}
                </p>
                <span className="text-xs text-primary flex items-center gap-1">
                  Visitar <ExternalLink size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Logo size="md" />
              </div>
              <p className="text-text-secondary mb-6 max-w-sm">
                Classificação textural do solo por inteligência artificial.
                Desenvolvido para o produtor rural brasileiro.
              </p>
              <div className="space-y-2 text-sm text-text-muted">
                <a href="mailto:contato@visiosoil.com.br" className="flex items-center gap-2 hover:text-primary">
                  <Mail size={16} /> contato@visiosoil.com.br
                </a>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Pompéia, SP - Brasil
                </p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Navegação</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-text-muted hover:text-primary transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">O Projeto</h4>
              <p className="text-sm text-text-muted mb-4">
                3° lugar na 16ª FETEPS 2025, representando a Fatec Shunji Nishimura.
              </p>
              <a
                href="https://feteps.cps.sp.gov.br/projetos/smartsee-classificacao-textural-do-solo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all"
              >
                Ver na FETEPS <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border py-6">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
            <p>© {new Date().getFullYear()} VisioSoil. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              Desenvolvido com <Heart size={14} className="text-red-500 fill-red-500" /> por{" "}
              <a
                href="https://www.linkedin.com/in/lucas-gon%C3%A7alvessz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Lucas Gonçalves
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
