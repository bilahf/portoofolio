"use client";

import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const styles = {
  primary:
    "bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-primary/30",
  secondary:
    "border border-border bg-card text-foreground shadow-soft hover:-translate-y-0.5 hover:bg-surface focus-visible:ring-primary/20",
  ghost:
    "bg-transparent text-foreground hover:bg-surface focus-visible:ring-primary/20",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", type = "button", ...props },
  ref,
) {
  return <button ref={ref} type={type} className={cn(baseClass, styles[variant], className)} {...props} />;
});

export function ButtonLink({ className, variant = "primary", href, children, ...props }: AnchorProps) {
  const isExternal = href.startsWith("http");
  const isDownload = Boolean(props.download);

  if (isExternal || isDownload) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={cn(baseClass, styles[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(baseClass, styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}
