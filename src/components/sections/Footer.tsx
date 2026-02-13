import Logo from "../ui/Logo";

const columns = [
  {
    title: "Produto",
    links: ["Como Funciona", "Soluções", "Planos", "API & Docs"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Parceiros", "Blog", "Carreiras"],
  },
  {
    title: "Recursos",
    links: ["FAQ", "Suporte", "Privacidade", "Termos"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand column */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 font-body text-sm text-white/40 leading-relaxed">
              Classificação textural do solo por inteligência artificial.
              Visão computacional para o agronegócio brasileiro.
            </p>
            <div className="mt-6 flex gap-4">
              {["LinkedIn", "GitHub", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-mono text-xs text-white/30 hover:text-cyan-electric transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-white/70 mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/35 hover:text-white/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} VisioSoil. Todos os direitos reservados.
          </span>
          <span className="font-mono text-xs text-white/20">
            visiosoil.com.br
          </span>
        </div>
      </div>
    </footer>
  );
}
