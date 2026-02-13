import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CTAFinal() {
  return (
    <section id="contato" className="py-(--spacing-section) bg-mesh-dark relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-deep/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-cyan-electric/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Pronto para transformar a{" "}
            <span className="text-cyan-electric">análise do solo</span>
            <br />
            na sua operação?
          </h2>
          <p className="mt-5 text-lg text-white/55 font-body max-w-2xl mx-auto">
            Solicite acesso antecipado à plataforma VisioSoil e faça parte dos
            primeiros a usar visão computacional para classificação textural no
            Brasil.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full px-5 py-3.5 rounded-[var(--radius-button)] bg-white/8 border border-white/12 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-teal-deep/60 focus:bg-white/12 transition-all"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-5 py-3.5 rounded-[var(--radius-button)] bg-white/8 border border-white/12 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-teal-deep/60 focus:bg-white/12 transition-all"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <select
              className="w-full px-5 py-3.5 rounded-[var(--radius-button)] bg-white/8 border border-white/12 text-white/50 font-body text-sm focus:outline-none focus:border-teal-deep/60 appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Eu sou...
              </option>
              <option value="produtor">Produtor Rural</option>
              <option value="laboratorio">Laboratório</option>
              <option value="consultor">Consultor Agrícola</option>
              <option value="seguradora">Seguradora / Crédito</option>
              <option value="outro">Outro</option>
            </select>
            <input
              type="tel"
              placeholder="Telefone (opcional)"
              className="w-full px-5 py-3.5 rounded-[var(--radius-button)] bg-white/8 border border-white/12 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-teal-deep/60 focus:bg-white/12 transition-all"
            />
          </div>

          <Button
            size="lg"
            className="w-full mt-2"
            icon={<ArrowRight size={20} />}
          >
            Solicitar Acesso Antecipado
          </Button>

          <p className="mt-4 font-body text-xs text-white/30">
            Sem compromisso. Seus dados estão seguros.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
