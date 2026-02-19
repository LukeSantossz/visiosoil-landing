import { motion } from "motion/react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

const benefits = [
  "Acesso antecipado ao app",
  "Participe do desenvolvimento",
  "Sem compromisso",
];

export default function CTAFinal() {
  return (
    <section id="contato" className="section-padding bg-gradient-cta relative overflow-hidden">
      {/* Decorative elements - responsive sizes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-[1000px] lg:h-[1000px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[250px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Em Desenvolvimento
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              Quer testar a
              <br />
              <span className="text-gradient">VisioSoil?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 sm:mb-8 leading-relaxed">
              Cadastre-se para receber acesso antecipado ao aplicativo.
              Sua participação nos ajuda a desenvolver uma ferramenta
              melhor para o produtor rural brasileiro.
            </p>

            {/* Benefits */}
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-text-primary text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-border">
              <p className="text-xs sm:text-sm text-text-muted mb-3 sm:mb-4">
                Prefere falar diretamente?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <a
                  href="mailto:contato@visiosoil.com.br"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  <span className="text-xs sm:text-sm">contato@visiosoil.com.br</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              className="card p-5 sm:p-6 lg:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary mb-1 sm:mb-2">
                Quero Participar
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-6">
                Preencha seus dados para acesso antecipado
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="input text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="input text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="input text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2">
                      Você é
                    </label>
                    <select className="input text-sm" defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option value="produtor">Produtor Rural</option>
                      <option value="consultor">Consultor/Técnico</option>
                      <option value="estudante">Estudante</option>
                      <option value="pesquisador">Pesquisador</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    placeholder="Conte-nos sobre seu interesse..."
                    rows={3}
                    className="input resize-none text-sm"
                  />
                </div>

                <Button size="lg" className="w-full" icon={<ArrowRight size={18} />}>
                  Quero Acesso Antecipado
                </Button>
              </div>

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-text-muted text-center">
                Ao enviar, você concorda com nossa{" "}
                <a href="#" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
