// utils
import { cn } from "~/utils/cn";

interface CircularStakeProps {
  className?: string;
  children: React.ReactNode;
}

export default function CircularStakeContainer({ className, children }: CircularStakeProps) {
  return (
    <div
      className={cn("flex flex-1 -space-x-3 flex-nowrap items-center whitespace-nowrap", className)}
    >
      {children}
    </div>
  );
}

export function CircularStake({ className, children }: CircularStakeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center aspect-square rounded-full bg-secondary border-2 border-solid border-background overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
