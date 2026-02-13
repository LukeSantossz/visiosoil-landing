import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const links = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-off/90 backdrop-blur-xl shadow-card border-b border-sand-warm/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <Logo size="md" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-charcoal-deep/70 hover:text-teal-deep transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-deep transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button size="sm" href="#contato">
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-charcoal-deep"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream-off/98 backdrop-blur-xl border-t border-sand-warm/30 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-base font-medium text-charcoal-deep/80 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contato" className="mt-2 w-full">
                Solicitar Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
