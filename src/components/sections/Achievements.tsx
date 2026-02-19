import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Calendar, MapPin, Award, ExternalLink, ArrowRight, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "João Pedro Moreno Alegre",
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-moreno-alegre-851017272/",
  },
  {
    name: "Lucas dos Santos Gonçalves",
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/lucas-gon%C3%A7alvessz/",
  },
  {
    name: "Fernanda Miyuki K. Kashima",
    role: "Desenvolvedora",
    linkedin: "https://www.linkedin.com/in/fernanda-miyuki-kasita-kashima-0357bb2b6/",
  },
];

const advisors = [
  {
    name: "Prof. Gustavo Faulin",
    role: "Orientador",
    linkedin: "https://www.linkedin.com/in/proffaulin/",
  },
  {
    name: "Prof. Ricardo Favan",
    role: "Coorientador",
    linkedin: "https://www.linkedin.com/in/ricardo-favan/",
  },
];

const fetepsImages = [
  "/images/feteps-2025.jpg",
  "/images/IMG_20251003_131404.jpg",
  "/images/IMG_20251003_160616_1.jpg",
];

export default function Achievements() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % fetepsImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % fetepsImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + fetepsImages.length) % fetepsImages.length);
  };

  return (
    <section id="conquistas" className="py-16 sm:py-20 lg:py-28 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="badge mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Conquistas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 px-4">
            Reconhecimento e
            <br />
            <span className="text-gradient-warm">participações</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Nossa tecnologia já foi reconhecida em competições de inovação.
          </p>
        </motion.div>

        {/* FETEPS Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image Carousel */}
              <div className="relative h-56 sm:h-72 md:h-auto min-h-[280px] md:min-h-[400px] bg-bg-secondary">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={fetepsImages[currentImage]}
                    alt={`Equipe SmartSee na FETEPS 2025 - Foto ${currentImage + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {fetepsImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage ? "bg-white w-4" : "bg-white/50"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Badge overlay */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
                    <Trophy size={16} className="text-white" />
                    <span className="text-sm font-bold text-white">3° Lugar</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-secondary w-6 h-6" />
                  <span className="font-mono text-sm text-secondary font-semibold">
                    16ª FETEPS 2025
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-4">
                  3° Lugar na Feira Tecnológica
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
                  O projeto conquistou o <strong className="text-text-primary">3° lugar</strong> na 16ª FETEPS
                  (Feira Tecnológica do Centro Paula Souza), representando a Fatec Shunji Nishimura de Pompéia.
                </p>

                {/* Name evolution */}
                <div className="bg-white/5 rounded-lg p-4 mb-5 border border-border">
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-1">
                    <span className="font-mono font-bold text-secondary">SmartSee</span>
                    <ArrowRight size={14} className="text-text-muted" />
                    <span className="font-mono font-bold text-primary">VisioSoil</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    O protótipo na FETEPS se chamava SmartSee. Após a competição,
                    evoluiu para VisioSoil.
                  </p>
                </div>

                {/* Event details */}
                <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-secondary" />
                    <span>Outubro 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-secondary" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>

                {/* Article Link */}
                <a
                  href="https://feteps.cps.sp.gov.br/projetos/smartsee-classificacao-textural-do-solo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-light transition-colors"
                >
                  <span>Ver projeto na FETEPS</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl p-6">
            {/* Team Members */}
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-text-secondary mb-3">Equipe</h4>
              <div className="flex flex-wrap gap-2">
                {teamMembers.map((member) => (
                  <a
                    key={member.name}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <Linkedin size={14} className="text-[#0A66C2] group-hover:text-primary transition-colors" />
                    <span className="text-sm text-text-primary group-hover:text-primary transition-colors">
                      {member.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Advisors */}
            <div>
              <h4 className="text-sm font-semibold text-text-secondary mb-3">Orientadores</h4>
              <div className="flex flex-wrap gap-2">
                {advisors.map((advisor) => (
                  <a
                    key={advisor.name}
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all group"
                  >
                    <Linkedin size={14} className="text-[#0A66C2] group-hover:text-accent transition-colors" />
                    <span className="text-sm text-text-primary group-hover:text-accent transition-colors">
                      {advisor.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
