import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

const faqs = [
  {
    category: "Sobre o Aplicativo",
    questions: [
      {
        q: "Qual a precisão atual do aplicativo?",
        a: "Atualmente, nossa precisão está em torno de 80%. O modelo está em constante evolução conforme coletamos mais amostras.",
      },
      {
        q: "Quantas classes texturais o app identifica?",
        a: "Atualmente trabalhamos com 5 classes texturais simplificadas. No futuro, pretendemos expandir para as 12 classes do sistema USDA.",
      },
      {
        q: "Preciso de um celular especial?",
        a: "Não. O aplicativo funciona em qualquer smartphone moderno com câmera. Não é necessário equipamento especializado.",
      },
      {
        q: "O app funciona sem internet?",
        a: "A captura da imagem pode ser feita offline, mas o processamento requer conexão com internet para enviar ao servidor.",
      },
    ],
  },
  {
    category: "Uso Prático",
    questions: [
      {
        q: "Substitui a análise laboratorial?",
        a: "Não. A VisioSoil é uma ferramenta complementar para triagem e decisões rápidas no campo. Para laudos oficiais, consulte um laboratório.",
      },
      {
        q: "Para quem é indicado?",
        a: "Principalmente para pequenos e médios produtores rurais que precisam de informações rápidas sobre o solo sem custos de laboratório.",
      },
      {
        q: "Quando o app estará disponível?",
        a: "Estamos em fase de desenvolvimento e testes. Cadastre-se para receber acesso antecipado quando lançarmos.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-3 py-4 sm:py-5 text-left cursor-pointer group"
      >
        <span className="font-display font-semibold text-sm sm:text-base text-text-primary group-hover:text-primary transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-primary/20" : "bg-white/5"
          }`}
        >
          <ChevronDown size={14} className={open ? "text-primary" : "text-text-muted"} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-5 text-text-secondary leading-relaxed text-sm pr-8 sm:pr-12">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-2">
            Perguntas frequentes
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Respostas para as dúvidas mais comuns sobre a VisioSoil.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {faqs.map(({ category, questions }, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="font-display font-bold text-base sm:text-lg text-text-primary mb-3 sm:mb-4">
                {category}
              </h3>
              <div className="card p-4 sm:p-6">
                {questions.map((faq) => (
                  <FaqItem key={faq.q} {...faq} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-text-secondary text-sm sm:text-base mb-3 sm:mb-4">
            Não encontrou sua resposta?
          </p>
          <Button
            variant="secondary"
            href="#contato"
            icon={<MessageCircle size={16} />}
            iconPosition="left"
          >
            Fale Conosco
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
