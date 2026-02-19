import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import Button from "../ui/Button";

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 -top-48 -left-48 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 -bottom-40 -right-40 rounded-full bg-accent/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <motion.div
        className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

export default function CTAFinal() {
  return (
    <section id="contato" className="relative section-padding bg-primary overflow-hidden">
      <FloatingOrbs />
      <div className="container-custom relative z-10">
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
