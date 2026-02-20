import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, ExternalLink, Heart } from "lucide-react";
import Logo from "../ui/Logo";

const partners = [
  {
    name: "Centro Paula Souza",
    description: "Autarquia do Governo de SP responsável pelas Fatecs e Etecs",
    logo: "/images/logo_cps_versao_cor.png",
    url: "https://www.cps.sp.gov.br",
  },
  {
    name: "UFMG",
    description: "Universidade Federal de Minas Gerais - Pesquisa em solos",
    logo: "/images/ufmg-logo.svg",
    url: "https://ufmg.br",
    logoClass: "h-12 scale-[2]",
  },
  {
    name: "Fundação Shunji Nishimura",
    description: "Ecossistema de educação e inovação agrícola em Pompéia-SP",
    logo: "/images/fns.jpg",
    url: "https://fsnt.org.br",
  },
  {
    name: "Politécnico de Santarém",
    description: "Instituto Politécnico de Portugal - Parceria internacional",
    logo: "/images/polisanta.png",
    url: "https://www.ipsantarem.pt",
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

function PartnerLogo({ partner }: { partner: (typeof partners)[number] }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="h-14 rounded-lg flex items-center justify-center mb-4 px-4 bg-white">
      {hasError ? (
        <span className="text-xs font-semibold text-neutral-500 text-center leading-tight">
          {partner.name}
        </span>
      ) : (
        <img
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          className={`w-auto max-w-full object-contain ${partner.logoClass ?? "h-10"}`}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

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
                <PartnerLogo partner={partner} />
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
