import { motion } from "motion/react";
import Logo from "../ui/Logo";
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const navigation = {
  produto: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Planos", href: "#planos" },
    { label: "API", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
  suporte: [
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
    { label: "Documentação", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-tertiary border-t border-border">
      <div className="container-custom py-12 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo size="md" />

            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-sm">
              Tecnologia brasileira de classificação textural do solo por
              inteligência artificial. Transformando a análise de solos
              no agronegócio.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:contato@visiosoil.com.br"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Mail size={14} />
                contato@visiosoil.com.br
              </a>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} />
                São Paulo, Brasil
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              Produto
            </h4>
            <ul className="space-y-2.5">
              {navigation.produto.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {navigation.empresa.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              Suporte
            </h4>
            <ul className="space-y-2.5">
              {navigation.suporte.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {navigation.legal.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} VisioSoil. Todos os direitos reservados.
            </p>
            <p className="text-sm text-text-muted">
              Feito com tecnologia no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
