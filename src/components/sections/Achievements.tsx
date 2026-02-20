import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight, Linkedin, ImageOff } from "lucide-react";
import BackgroundAnimation from "../ui/BackgroundAnimation";

const team = [
  { name: "João Pedro Moreno Alegre", role: "Desenvolvedor", linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-moreno-alegre-851017272/" },
  { name: "Lucas dos Santos Gonçalves", role: "Desenvolvedor", linkedin: "https://www.linkedin.com/in/lucas-gon%C3%A7alvessz/" },
  { name: "Fernanda Miyuki K. Kashima", role: "Desenvolvedora", linkedin: "https://www.linkedin.com/in/fernanda-miyuki-kasita-kashima-0357bb2b6/" },
  { name: "Gustavo Faulin", role: "Orientador", linkedin: "https://www.linkedin.com/in/proffaulin/" },
  { name: "Ricardo Favan", role: "Coorientador", linkedin: "https://www.linkedin.com/in/ricardo-favan/" },
];

const images = [
  "/images/feteps-2025.jpg",
  "/images/IMG_20251003_131404.jpg",
  "/images/IMG_20251003_160616_1.jpg",
];

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-bg-tertiary text-text-muted ${className ?? ""}`}>
        <ImageOff size={48} className="mb-3 opacity-40" />
        <span className="text-sm opacity-60">Foto indisponível</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export default function Achievements() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="conquistas" className="relative section-padding bg-bg-primary overflow-hidden">
      <BackgroundAnimation variant="section" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge mb-4 bg-accent text-text-primary">
            <Trophy size={14} />
            Conquistas
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
            Reconhecimento na FETEPS 2025
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            3° lugar na 16ª Feira Tecnológica do Centro Paula Souza
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Fotos da FETEPS 2025"
            aria-roledescription="carrossel"
            className="relative rounded-2xl overflow-hidden bg-bg-tertiary aspect-video"
          >
            <div aria-live="polite" aria-atomic="true" className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ImageWithFallback
                    src={images[currentImage]}
                    alt={`Equipe na FETEPS 2025 - Foto ${currentImage + 1} de ${images.length}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Selecionar foto">
              {images.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentImage}
                  aria-label={`Foto ${i + 1}`}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImage ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-accent text-text-primary px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Trophy size={16} />
              3° Lugar
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              16ª FETEPS 2025
            </h3>

            <p className="text-text-secondary mb-6">
              O projeto conquistou o <strong className="text-text-primary">3° lugar</strong> na
              Feira Tecnológica do Centro Paula Souza, representando a Fatec Shunji Nishimura de Pompéia.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-6">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-accent-dark" />
                Outubro 2025
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-dark" />
                São Paulo, SP
              </span>
            </div>

            <a
              href="https://feteps.cps.sp.gov.br/projetos/smartsee-classificacao-textural-do-solo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mb-8"
            >
              Ver projeto na FETEPS <ExternalLink size={16} />
            </a>

            {/* Team */}
            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-semibold text-text-secondary mb-4">Equipe do Projeto</h4>
              <div className="flex flex-wrap gap-2">
                {team.map((person) => (
                  <a
                    key={person.name}
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-secondary rounded-full text-sm hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin size={14} className="text-[#0A66C2]" />
                    <span className="text-text-primary">{person.name.split(" ")[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
