import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

const benefits = [
  "Acesso antecipado gratuito",
  "Suporte dedicado na implantação",
  "Sem compromisso de permanência",
];

export default function CTAFinal() {
  return (
    <section id="contato" className="section-padding bg-gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[250px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Acesso Antecipado
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Pronto para transformar
              <br />
              <span className="text-gradient">sua análise de solo?</span>
            </h2>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Junte-se aos primeiros usuários da VisioSoil e tenha acesso
              exclusivo à nossa plataforma. Vagas limitadas para o programa
              de acesso antecipado.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-text-primary">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-4 pt-8 border-t border-border">
              <p className="text-sm text-text-muted mb-4">
                Prefere falar diretamente?
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:contato@visiosoil.com.br"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm">contato@visiosoil.com.br</span>
                </a>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  <span className="text-sm">(11) 99999-9999</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              className="card p-6 lg:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Solicitar Acesso
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Preencha o formulário e entraremos em contato
              </p>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Perfil
                    </label>
                    <select className="input" defaultValue="">
                      <option value="" disabled>
                        Selecione
                      </option>
                      <option value="produtor">Produtor Rural</option>
                      <option value="laboratorio">Laboratório</option>
                      <option value="consultor">Consultor</option>
                      <option value="empresa">Empresa</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    placeholder="Conte-nos sobre sua necessidade..."
                    rows={4}
                    className="input resize-none"
                  />
                </div>

                <Button size="lg" className="w-full" icon={<ArrowRight size={20} />}>
                  Solicitar Acesso Gratuito
                </Button>
              </div>

              <p className="mt-4 text-xs text-text-muted text-center">
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
