import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer font-body select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_4px_20px_rgba(5,150,105,0.3)] hover:shadow-[0_8px_30px_rgba(5,150,105,0.4)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-text-primary border border-border hover:border-primary hover:bg-primary/10",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-6 py-3 text-sm rounded-full",
    lg: "px-8 py-3.5 text-base rounded-full",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
