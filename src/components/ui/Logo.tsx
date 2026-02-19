interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 40, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 52, text: "text-2xl", gap: "gap-3" },
  };

  const { icon, text, gap } = sizes[size];

  return (
    <a href="#" className={`flex items-center ${gap}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
        </defs>

        {/* Base circle */}
        <circle cx="26" cy="26" r="25" fill="url(#bgGrad)" />

        {/* Inner dark circle */}
        <circle cx="26" cy="26" r="20" fill="#0a0a0a" />

        {/* Soil layers representation */}
        <path
          d="M12 30 Q26 28 40 30 L40 38 Q26 36 12 38 Z"
          fill="url(#soilGrad)"
          opacity="0.9"
        />
        <path
          d="M12 34 Q26 32 40 34 L40 40 Q26 42 12 40 Z"
          fill="#78350f"
          opacity="0.8"
        />

        {/* Stylized leaf/plant */}
        <path
          d="M26 14 C26 14 32 18 32 24 C32 28 29 30 26 30 C23 30 20 28 20 24 C20 18 26 14 26 14 Z"
          fill="url(#leafGrad)"
        />

        {/* Leaf vein */}
        <path
          d="M26 16 L26 28"
          stroke="#0a0a0a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Tech dot indicator */}
        <circle cx="26" cy="24" r="2.5" fill="#06b6d4" />

        {/* Outer ring accent */}
        <circle
          cx="26"
          cy="26"
          r="24"
          stroke="#10b981"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {showText && (
        <div className={`font-display font-bold ${text} tracking-tight`}>
          <span className="text-primary-light">Visio</span>
          <span className="text-secondary-light">Soil</span>
        </div>
      )}
    </a>
  );
}
