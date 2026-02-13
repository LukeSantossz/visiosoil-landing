import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-[var(--radius-button)] transition-all duration-300 cursor-pointer select-none whitespace-nowrap";

  const variants = {
    primary:
      "bg-teal-deep text-white hover:bg-teal-hover shadow-lg hover:shadow-glow-teal hover:-translate-y-0.5",
    secondary:
      "bg-soil-brown text-white hover:bg-soil-light shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white",
    ghost:
      "text-teal-deep hover:bg-teal-deep/8",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const Tag = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Tag href={href} className={classes}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Tag>
    </motion.div>
  );
}
