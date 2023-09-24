import React from "react";

// utils
import { cn } from "~/utils/cn";

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "border"
  | "invert"
  | "ghost";
type ButtonSize = "small" | "medium" | "large" | "xlarge" | "fill";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  variant?: ButtonVariant | ButtonVariant[];
  size?: ButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type,
    title,
    variant = "default",
    size = "large",
    onClick,
    className,
    disabled = false,
    children,
  },
  ref
) {
  const id = React.useId();

  const variantStyles = cn(
    "flex items-center justify-center rounded-xl font-bold text-sm transition-all duration-150",
    {
      // variants
      "bg-accent text-accent-foreground": variant.includes("primary"),
      "bg-secondary text-secondary-foreground": variant.includes("secondary"),
      "bg-foreground text-background": variant.includes("invert"),
      "bg-transparent text-foreground border border-border":
        variant.includes("border"),
      "border-foreground":
        variant.includes("border") && variant.includes("invert"),
      "bg-transparent text-foreground": variant.includes("ghost"),

      // sizes
      "py-2 px-4 gap-x-2": size === "small",
      "py-2.5 px-5 gap-x-2.5": size === "medium",
      "py-3 px-5 gap-x-3": size === "large",
      "sm:py-3.5 sm:px-7 sm:gap-x-3.5 py-2.5 px-5 gap-x-2": size === "xlarge",
      "py-3 px-3 gap-x-4 w-full": size === "fill",

      // states
      "cursor-not-allowed opacity-60": disabled,
      "hover:bg-accent-hover": variant.includes("primary") && !disabled,
      "hover:bg-secondary-hover": variant.includes("secondary") && !disabled,
      "hover:bg-secondary":
        ((variant.includes("border") && !variant.includes("invert")) ||
          variant.includes("ghost")) &&
        !disabled,
      "hover:bg-foreground/80": variant.includes("invert"),
      "hover:bg-foreground hover:text-background":
        (variant.includes("invert") && variant.includes("border")) ||
        variant.includes("ghost"),
    },
    className
  );

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      title={title}
      aria-label={title}
      className={variantStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default Button;
