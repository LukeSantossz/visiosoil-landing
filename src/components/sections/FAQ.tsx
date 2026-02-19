import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

const faqs = [
  {
    category: "Sobre o Produto",
    questions: [
      {
        q: "Qual a precisão da VisioSoil comparada a análises laboratoriais?",
        a: "Nossa tecnologia foi validada contra laudos de laboratórios certificados e apresenta alta concordância com os resultados. A precisão varia conforme as condições da amostra, mas mantemos metas rigorosas de qualidade em todos os casos.",
      },
      {
        q: "Preciso de algum equipamento especial para usar?",
        a: "Não. A VisioSoil funciona com qualquer smartphone moderno. Não é necessário equipamento especializado, preparo químico ou treinamento técnico. Nossa interface guia você durante todo o processo.",
      },
      {
        q: "O sistema funciona sem internet?",
        a: "Você pode capturar imagens offline. O processamento requer conexão com internet, mas os dados sincronizam automaticamente quando a conexão for restabelecida. Estamos desenvolvendo recursos adicionais para uso offline.",
      },
      {
        q: "Quais classes texturais o sistema identifica?",
        a: "Identificamos as 12 classes texturais do sistema USDA: Areia, Areia Franca, Franco-arenoso, Franco, Franco-siltoso, Silte, Franco-argilo-arenoso, Franco-argiloso, Franco-argilo-siltoso, Argila Arenosa, Argila Siltosa e Argila.",
      },
    ],
  },
  {
    category: "Uso Prático",
    questions: [
      {
        q: "A VisioSoil substitui a análise laboratorial tradicional?",
        a: "A VisioSoil é uma ferramenta complementar que acelera a triagem e pré-análise. Para laudos regulatórios, certificações e decisões que exigem documentação oficial, recomendamos consultar um laboratório credenciado. Nossa tecnologia é ideal para monitoramento contínuo e decisões rápidas de manejo.",
      },
      {
        q: "Posso integrar com meu sistema de gestão agrícola?",
        a: "Sim! Oferecemos API RESTful documentada para integração com sistemas LIMS, ERPs agrícolas e plataformas de mapeamento. Os planos Professional e Enterprise incluem suporte dedicado para integração.",
      },
      {
        q: "Como garantem a qualidade das análises?",
        a: "Cada análise passa por verificações automáticas de qualidade da imagem. Além disso, mantemos um processo contínuo de validação e aprimoramento da tecnologia em parceria com instituições de pesquisa.",
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
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-primary/20" : "bg-white/5"
          }`}
        >
          <ChevronDown size={18} className={open ? "text-primary" : "text-text-muted"} />
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
            <p className="pb-5 text-text-secondary leading-relaxed pr-12">
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
          className="text-center mb-12"
        >
          <span className="badge mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre a VisioSoil.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {faqs.map(({ category, questions }, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="font-display font-bold text-lg text-text-primary mb-4">
                {category}
              </h3>
              <div className="card p-6">
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
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">
            Não encontrou sua resposta?
          </p>
          <Button
            variant="secondary"
            href="#contato"
            icon={<MessageCircle size={18} />}
            iconPosition="left"
          >
            Fale Conosco
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
