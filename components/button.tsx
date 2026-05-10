import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "leaf" | "arrow" | "none";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({ href, children, variant = "primary", icon = "arrow", className = "", ...props }: ButtonProps) {
  const classes = [
    "magnetic inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-cream dark:focus-visible:ring-offset-forest-950",
    variant === "primary" &&
      "bg-forest-700 text-white shadow-soft hover:bg-forest-800 hover:shadow-glass dark:bg-forest-500 dark:text-forest-950 dark:hover:bg-forest-300",
    variant === "secondary" &&
      "border border-forest-700/35 bg-white/35 text-forest-800 shadow-insetSoft backdrop-blur hover:border-forest-700 hover:bg-white/65 dark:border-white/20 dark:bg-white/8 dark:text-cream dark:hover:bg-white/14",
    variant === "ghost" &&
      "bg-transparent text-forest-800 hover:bg-forest-700/8 dark:text-cream dark:hover:bg-white/10",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const Icon = icon === "leaf" ? Leaf : icon === "arrow" ? ArrowRight : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {Icon ? <Icon aria-hidden="true" size={17} /> : null}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={17} /> : null}
    </button>
  );
}
