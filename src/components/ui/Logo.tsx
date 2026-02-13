interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const sizes = { sm: "h-7", md: "h-9", lg: "h-12" };
  const textSizes = { sm: "text-lg", md: "text-xl", lg: "text-3xl" };
  const isDark = variant === "dark";

  return (
    <a href="#" className={`flex items-center gap-2.5 ${sizes[size]}`}>
      {/* Soil Lens Icon — layered strata through a lens */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className={sizes[size]}
        style={{ aspectRatio: 1 }}
      >
        {/* Outer lens circle */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={isDark ? "#0D7377" : "#F5F0EB"}
          strokeWidth="2.5"
          fill="none"
        />
        {/* Soil strata layers inside */}
        <clipPath id="lens-clip">
          <circle cx="20" cy="20" r="15" />
        </clipPath>
        <g clipPath="url(#lens-clip)">
          <rect x="5" y="5" width="30" height="8" fill="#D4A574" />
          <rect x="5" y="13" width="30" height="7" fill="#8B5E3C" />
          <rect x="5" y="20" width="30" height="7" fill="#6B4226" />
          <rect x="5" y="27" width="30" height="8" fill="#4A2E19" />
        </g>
        {/* AI scan line */}
        <line
          x1="8"
          y1="20"
          x2="32"
          y2="20"
          stroke="#00BCD4"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          opacity="0.8"
        />
        {/* Inner highlight ring */}
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke={isDark ? "#0D7377" : "#F5F0EB"}
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* Wordmark */}
      <span
        className={`font-display font-bold tracking-tight ${textSizes[size]}`}
      >
        <span style={{ color: isDark ? "#0D7377" : "#00BCD4" }}>Visio</span>
        <span style={{ color: isDark ? "#6B4226" : "#D4A574" }}>Soil</span>
      </span>
    </a>
  );
}
