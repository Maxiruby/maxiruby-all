import React from "react";

// utils
import { cn } from "~/utils/cn";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export default function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex py-0.5 px-1.5 bg-primary rounded-full text-xs font-semibold text-primary-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
