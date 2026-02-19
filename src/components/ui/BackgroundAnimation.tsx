import { motion } from "motion/react";

interface BlobProps {
  className?: string;
  delay?: number;
  duration?: number;
}

function Blob({ className = "", delay = 0, duration = 20 }: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

interface FloatingShapeProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

function FloatingShape({
  size = 8,
  color = "bg-primary/20",
  delay = 0,
  duration = 15,
  className = ""
}: FloatingShapeProps) {
  return (
    <motion.div
      className={`absolute ${color} ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

interface ParticleFieldProps {
  count?: number;
}

function ParticleField({ count = 20 }: ParticleFieldProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

interface GridPatternProps {
  className?: string;
}

function GridPattern({ className = "" }: GridPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

interface OrbitRingProps {
  size: number;
  duration?: number;
  delay?: number;
  className?: string;
}

function OrbitRing({ size, duration = 20, delay = 0, className = "" }: OrbitRingProps) {
  return (
    <motion.div
      className={`absolute border border-primary/10 rounded-full ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration, repeat: Infinity, ease: "linear" },
        scale: { duration: duration / 2, repeat: Infinity, ease: "easeInOut" },
        delay,
      }}
    >
      <motion.div
        className="absolute w-2 h-2 bg-primary/40 rounded-full"
        style={{ top: -4, left: "50%", marginLeft: -4 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

interface BackgroundAnimationProps {
  variant?: "hero" | "section" | "minimal" | "particles";
  className?: string;
}

export default function BackgroundAnimation({
  variant = "section",
  className = ""
}: BackgroundAnimationProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Large gradient blobs */}
        <Blob
          className="w-[600px] h-[600px] -top-40 -right-40 bg-gradient-to-br from-primary/40 to-accent/30"
          duration={25}
        />
        <Blob
          className="w-[500px] h-[500px] top-1/2 -left-40 bg-gradient-to-tr from-secondary/30 to-primary/20"
          delay={5}
          duration={30}
        />
        <Blob
          className="w-[400px] h-[400px] bottom-0 right-1/4 bg-gradient-to-tl from-accent/30 to-transparent"
          delay={10}
          duration={22}
        />

        {/* Floating geometric shapes */}
        <FloatingShape size={60} className="top-1/4 right-1/4 rounded-2xl rotate-45" duration={18} />
        <FloatingShape size={40} className="bottom-1/3 left-1/4 rounded-full" delay={3} duration={20} />
        <FloatingShape size={30} className="top-1/2 right-1/3 rounded-lg" delay={6} duration={15} />

        {/* Orbit rings */}
        <OrbitRing size={300} className="top-20 -right-20" duration={30} />
        <OrbitRing size={200} className="bottom-40 left-20" duration={25} delay={5} />

        {/* Particles */}
        <ParticleField count={15} />

        {/* Grid pattern */}
        <GridPattern />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-secondary/80" />
      </div>
    );
  }

  if (variant === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <ParticleField count={30} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/30 to-transparent" />
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <Blob
          className="w-[400px] h-[400px] -top-20 -right-20 bg-primary/20"
          duration={25}
        />
        <Blob
          className="w-[300px] h-[300px] bottom-0 -left-20 bg-accent/20"
          delay={8}
          duration={28}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary/50" />
      </div>
    );
  }

  // Default "section" variant
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle blobs */}
      <Blob
        className="w-[500px] h-[500px] -top-40 -right-40 bg-gradient-to-br from-primary/25 to-transparent"
        duration={28}
      />
      <Blob
        className="w-[400px] h-[400px] bottom-0 -left-40 bg-gradient-to-tr from-accent/20 to-transparent"
        delay={7}
        duration={32}
      />

      {/* Floating shapes */}
      <FloatingShape size={50} className="top-1/4 right-1/3 rounded-xl rotate-12" duration={20} />
      <FloatingShape size={35} className="bottom-1/4 left-1/3 rounded-full" delay={4} duration={18} />

      {/* Particles */}
      <ParticleField count={10} />

      {/* Subtle grid */}
      <GridPattern className="opacity-50" />
    </div>
  );
}

// Animated gradient mesh component
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="mesh1" cx="30%" cy="30%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="mesh2" cx="70%" cy="70%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <motion.ellipse
          cx="30"
          cy="30"
          rx="40"
          ry="40"
          fill="url(#mesh1)"
          animate={{
            cx: [30, 40, 30],
            cy: [30, 40, 30],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.ellipse
          cx="70"
          cy="70"
          rx="35"
          ry="35"
          fill="url(#mesh2)"
          animate={{
            cx: [70, 60, 70],
            cy: [70, 60, 70],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

// Animated lines/connections
export function AnimatedLines({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="80%"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeDasharray="10 5"
          animate={{
            strokeDashoffset: [0, -30],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.line
          x1="100%"
          y1="30%"
          x2="0%"
          y2="70%"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeDasharray="15 8"
          animate={{
            strokeDashoffset: [0, 46],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}
