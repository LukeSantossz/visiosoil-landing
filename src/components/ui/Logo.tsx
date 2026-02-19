interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 38, text: "text-lg", sub: "text-[8px]" },
    md: { icon: 44, text: "text-xl", sub: "text-[9px]" },
    lg: { icon: 56, text: "text-2xl", sub: "text-[10px]" },
  };

  const { icon, text, sub } = sizes[size];

  return (
    <a href="#" className="flex items-center gap-3 group">
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform group-hover:scale-105"
      >
        {/* Petri dish shadow */}
        <ellipse cx="31" cy="32" rx="26" ry="26" fill="#00000010" />

        {/* Petri dish - glass rim */}
        <circle cx="30" cy="30" r="27" stroke="#a3a3a3" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="30" cy="30" r="26" stroke="#78716c" strokeWidth="2" fill="#fafaf9" />

        {/* Soil sample inside - layered texture */}
        <circle cx="30" cy="30" r="22" fill="#a67c52" />
        <circle cx="30" cy="30" r="18" fill="#8b5a2b" />
        <circle cx="30" cy="30" r="13" fill="#7f5539" />
        <circle cx="30" cy="30" r="7" fill="#6b4423" />

        {/* Soil texture details */}
        <circle cx="22" cy="24" r="1.5" fill="#5c3d2e" opacity="0.4" />
        <circle cx="38" cy="26" r="1" fill="#5c3d2e" opacity="0.3" />
        <circle cx="25" cy="38" r="1.2" fill="#5c3d2e" opacity="0.35" />
        <circle cx="36" cy="36" r="0.8" fill="#5c3d2e" opacity="0.3" />

        {/* Neural network connections (behind nodes) */}
        <g stroke="#0d9488" strokeWidth="2" strokeLinecap="round" opacity="0.6">
          <line x1="14" y1="22" x2="30" y2="30" />
          <line x1="14" y1="38" x2="30" y2="30" />
          <line x1="22" y1="12" x2="30" y2="30" />
          <line x1="38" y1="12" x2="30" y2="30" />
          <line x1="30" y1="30" x2="46" y2="22" />
          <line x1="30" y1="30" x2="46" y2="38" />
        </g>

        {/* Neural network - input nodes */}
        <circle cx="14" cy="22" r="4" fill="#14b8a6" />
        <circle cx="14" cy="38" r="4" fill="#14b8a6" />
        <circle cx="22" cy="12" r="4" fill="#14b8a6" />
        <circle cx="38" cy="12" r="4" fill="#14b8a6" />

        {/* Neural network - central processing node */}
        <circle cx="30" cy="30" r="6" fill="#0d9488" />
        <circle cx="30" cy="30" r="3" fill="#14b8a6" />
        <circle cx="30" cy="30" r="1.5" fill="#5eead4" />

        {/* Neural network - output nodes */}
        <circle cx="46" cy="22" r="4" fill="#14b8a6" />
        <circle cx="46" cy="38" r="4" fill="#14b8a6" />

        {/* Petri dish highlight */}
        <path
          d="M12 20 Q8 30 12 40"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-bold ${text} text-text-primary tracking-tight`}>
            VisioSoil
          </span>
          <span className={`${sub} text-text-muted font-medium tracking-widest uppercase mt-0.5`}>
            Classificação Textural com IA
          </span>
        </div>
      )}
    </a>
  );
}
