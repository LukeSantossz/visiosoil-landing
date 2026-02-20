import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import BackgroundAnimation from "../ui/BackgroundAnimation";

const faqs = [
  {
    q: "Qual a precisão atual do aplicativo?",
    a: "Atualmente a precisão está em torno de 80%. O modelo está em constante evolução conforme coletamos mais amostras de solos brasileiros.",
  },
  {
    q: "Quantas classes texturais o app identifica?",
    a: "Trabalhamos com 5 classes texturais simplificadas. No futuro, pretendemos expandir para as 12 classes do sistema USDA.",
  },
  {
    q: "Preciso de um celular especial?",
    a: "Não. O aplicativo funciona em qualquer smartphone moderno com câmera.",
  },
  {
    q: "Substitui a análise laboratorial?",
    a: "Não. A VisioSoil é uma ferramenta complementar para triagem e decisões rápidas no campo. Para laudos oficiais, consulte um laboratório credenciado.",
  },
  {
    q: "Para quem é indicado?",
    a: "Para pequenos e médios produtores rurais que precisam de informações rápidas sobre a textura do solo.",
  },
  {
    q: "Quando o app estará disponível?",
    a: "Estamos em fase de desenvolvimento. Cadastre-se para receber acesso antecipado quando lançarmos.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const headingId = `faq-heading-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-border last:border-0">
      <h3>
        <button
          id={headingId}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-semibold text-text-primary">{q}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            className="shrink-0 w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center"
          >
            <ChevronDown size={18} className="text-text-muted" />
          </motion.div>
        </button>
      </h3>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative section-padding bg-bg-secondary overflow-hidden">
      <BackgroundAnimation variant="particles" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tire suas dúvidas sobre a VisioSoil
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="card p-6 sm:p-8">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} {...faq} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
