import { motion } from "motion/react";

const partners = [
  "Fundação Shunji Nishimura",
  "IPS — Portugal",
  "UFMG",
  "Centro Paula Souza",
];

export default function Partners() {
  return (
    <section id="parceiros" className="py-12 bg-white/50 border-y border-sand-warm/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          <span className="font-body text-xs font-semibold text-charcoal-deep/40 uppercase tracking-widest whitespace-nowrap">
            Parceiros & Validação
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="font-display font-semibold text-sm sm:text-base text-charcoal-deep/30 hover:text-teal-deep transition-colors cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
