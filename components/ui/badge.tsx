import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
