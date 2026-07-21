import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/80 bg-card/95 p-6 shadow-soft backdrop-blur-sm transition duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
