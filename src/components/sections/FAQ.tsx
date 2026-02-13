import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qual a acurácia do sistema comparado a análises laboratoriais?",
    a: "O modelo é treinado e validado contra laudos de laboratórios certificados. Utilizamos métricas rigorosas como F1-score, precisão e revocação para cada classe textural, com meta de acurácia superior a 95%. Os resultados são continuamente comparados com análises granulométricas tradicionais.",
  },
  {
    q: "Preciso de equipamento especial para fotografar as amostras?",
    a: "Não. Qualquer smartphone com câmera de boa resolução é suficiente. Fornecemos guias de padronização simples para iluminação e enquadramento que garantem consistência nas análises.",
  },
  {
    q: "O sistema funciona offline, no campo?",
    a: "A captura da imagem pode ser feita offline. O processamento atual requer conexão com a nuvem para a classificação via ML, mas estamos desenvolvendo um modo edge computing para análise offline completa.",
  },
  {
    q: "A VisioSoil substitui a análise laboratorial?",
    a: "A VisioSoil é uma ferramenta complementar que acelera a triagem e pré-análise. Para laudos regulatórios e certificações, a análise laboratorial continua sendo o padrão-ouro. Nosso sistema é ideal para decisões rápidas de manejo e screening de grandes áreas.",
  },
  {
    q: "É possível integrar com sistemas de laboratório existentes (LIMS)?",
    a: "Sim. Oferecemos API RESTful documentada para integração com sistemas LIMS, ERPs agrícolas e plataformas de mapeamento. Planos Profissional e Enterprise incluem suporte de integração dedicado.",
  },
  {
    q: "Quais classes texturais o sistema identifica?",
    a: "O sistema classifica as 12 classes texturais do triângulo USDA: Areia, Areia Franca, Franco-arenoso, Franco, Franco-siltoso, Silte, Franco-argilo-arenoso, Franco-argiloso, Franco-argilo-siltoso, Argila Arenosa, Argila Siltosa e Argila (Muito Argilosa).",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sand-warm/20 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className="font-display font-semibold text-base lg:text-lg text-charcoal-deep pr-8 group-hover:text-teal-deep transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-charcoal-deep/40" />
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
            <p className="pb-6 font-body text-sm text-charcoal-deep/60 leading-relaxed max-w-3xl">
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
    <section className="py-(--spacing-section) bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-mono text-xs font-semibold text-teal-deep uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal-deep">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
