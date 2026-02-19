import { motion } from "motion/react";
import Logo from "../ui/Logo";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const navigation = {
  produto: [
    { label: "Sobre", href: "#produto" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#funcionalidades" },
  ],
  projeto: [
    { label: "Conquistas", href: "#conquistas" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Equipe", href: "#conquistas" },
  ],
  suporte: [
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-tertiary border-t border-border">
      <div className="container-custom py-8 sm:py-12 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-2 mb-4 sm:mb-0">
            <Logo size="sm" />

            <p className="mt-3 sm:mt-4 text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
              Aplicativo de classificação textural do solo por
              inteligência artificial. Desenvolvido para o produtor rural brasileiro.
            </p>

            {/* Contact */}
            <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
              <a
                href="mailto:contato@visiosoil.com.br"
                className="flex items-center gap-2 text-xs sm:text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Mail size={12} className="shrink-0" />
                <span className="truncate">contato@visiosoil.com.br</span>
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted">
                <MapPin size={12} className="shrink-0" />
                Pompéia, SP - Brasil
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6 flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={14} className="sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-3 sm:mb-4">
              Produto
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {navigation.produto.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-3 sm:mb-4">
              Projeto
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {navigation.projeto.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-3 sm:mb-4">
              Suporte
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {navigation.suporte.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-3 sm:mb-4">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {navigation.legal.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-text-muted">
              © {new Date().getFullYear()} VisioSoil. Todos os direitos reservados.
            </p>
            <p className="text-xs sm:text-sm text-text-muted">
              Desenvolvido na Fatec Shunji Nishimura
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
