import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  role: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Nome é obrigatório";
  if (!data.email.trim()) {
    errors.email = "E-mail é obrigatório";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "E-mail inválido";
  }
  return errors;
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

function StatusMessage({ status, onReset }: { status: FormStatus; onReset: () => void }) {
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12"
      >
        <CheckCircle size={56} className="text-primary mb-4" />
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">
          Solicitação enviada!
        </h3>
        <p className="text-text-secondary mb-6 max-w-xs">
          Obrigado pelo interesse. Entraremos em contato em breve.
        </p>
        <button
          onClick={onReset}
          className="text-sm text-primary font-semibold hover:underline"
        >
          Enviar outra solicitação
        </button>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12"
      >
        <AlertCircle size={56} className="text-red-500 mb-4" />
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">
          Erro ao enviar
        </h3>
        <p className="text-text-secondary mb-6 max-w-xs">
          Algo deu errado. Tente novamente ou entre em contato por e-mail.
        </p>
        <button
          onClick={onReset}
          className="text-sm text-primary font-semibold hover:underline"
        >
          Tentar novamente
        </button>
      </motion.div>
    );
  }

  return null;
}

export default function CTAFinal() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const isConfigured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    if (!isConfigured) {
      // Fallback: open mailto link with form data
      const subject = encodeURIComponent("Solicitação de Acesso Antecipado - VisioSoil");
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone || "Não informado"}\nPerfil: ${formData.role || "Não informado"}\n\nMensagem:\n${formData.message || "Sem mensagem adicional"}`
      );
      window.open(`mailto:contato@visiosoil.com.br?subject=${subject}&body=${body}`, "_self");
      setStatus("success");
      setFormData(initialFormData);
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        role: formData.role,
        message: formData.message,
      }, PUBLIC_KEY);

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setErrors({});
  }

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
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === "success" || status === "error" ? (
                  <StatusMessage key="status" status={status} onReset={handleReset} />
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-display font-bold text-text-primary mb-6">
                      Solicitar Acesso Antecipado
                    </h3>

                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cta-name" className="sr-only">Nome</label>
                          <input
                            id="cta-name"
                            type="text"
                            placeholder="Nome *"
                            className={`input ${errors.name ? "!border-red-400 !shadow-red-100" : ""}`}
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            disabled={status === "sending"}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="cta-email" className="sr-only">E-mail</label>
                          <input
                            id="cta-email"
                            type="email"
                            placeholder="E-mail *"
                            className={`input ${errors.email ? "!border-red-400 !shadow-red-100" : ""}`}
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            disabled={status === "sending"}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cta-phone" className="sr-only">Telefone</label>
                          <input
                            id="cta-phone"
                            type="tel"
                            placeholder="Telefone"
                            className="input"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            disabled={status === "sending"}
                          />
                        </div>
                        <div>
                          <label htmlFor="cta-role" className="sr-only">Perfil</label>
                          <select
                            id="cta-role"
                            className="input"
                            value={formData.role}
                            onChange={(e) => handleChange("role", e.target.value)}
                            disabled={status === "sending"}
                          >
                            <option value="" disabled>Você é...</option>
                            <option value="produtor">Produtor Rural</option>
                            <option value="tecnico">Técnico/Consultor</option>
                            <option value="estudante">Estudante</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cta-message" className="sr-only">Mensagem</label>
                        <textarea
                          id="cta-message"
                          placeholder="Mensagem (opcional)"
                          rows={3}
                          className="input resize-none"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          disabled={status === "sending"}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={status === "sending"}
                        icon={
                          status === "sending"
                            ? <Loader2 size={18} className="animate-spin" />
                            : <ArrowRight size={18} />
                        }
                      >
                        {status === "sending" ? "Enviando..." : "Enviar Solicitação"}
                      </Button>
                    </div>

                    <p className="mt-4 text-xs text-text-muted text-center">
                      Ao enviar, você concorda com nossa política de privacidade.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
