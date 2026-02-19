import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import Button from "../ui/Button";

export default function CTAFinal() {
  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Em Desenvolvimento
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Quer testar a VisioSoil?
            </h2>

            <p className="text-white/80 mb-8 max-w-md">
              Cadastre-se para receber acesso antecipado ao aplicativo e ajude
              a desenvolver uma ferramenta melhor para o produtor rural.
            </p>

            <div className="flex items-center gap-4 text-white/60">
              <Mail size={20} />
              <a
                href="mailto:contato@visiosoil.com.br"
                className="hover:text-white transition-colors"
              >
                contato@visiosoil.com.br
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form
              className="bg-white rounded-2xl p-6 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-display font-bold text-text-primary mb-6">
                Solicitar Acesso Antecipado
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="input"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="input"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="input"
                  />
                  <select className="input" defaultValue="">
                    <option value="" disabled>Você é...</option>
                    <option value="produtor">Produtor Rural</option>
                    <option value="tecnico">Técnico/Consultor</option>
                    <option value="estudante">Estudante</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <textarea
                  placeholder="Mensagem (opcional)"
                  rows={3}
                  className="input resize-none"
                />

                <Button className="w-full" icon={<ArrowRight size={18} />}>
                  Enviar Solicitação
                </Button>
              </div>

              <p className="mt-4 text-xs text-text-muted text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
