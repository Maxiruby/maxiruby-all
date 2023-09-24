// utils
import { cn } from "~/utils/cn";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function Container({ children }: DefaultLayoutProps) {
  return (
    <div className="block w-full h-full max-w-[1400px] mx-auto px-10">
      {children}
    </div>
  );
}

interface SectionProps extends DefaultLayoutProps {
  title?: string;
  className?: string;
}

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={cn("flex flex-1 flex-col gap-y-2 py-12", className)}>
      {title && <h3 className="text-xl sm:text-3xl font-bold">{title}</h3>}

      <div className="flex flex-1 flex-col">{children}</div>
    </section>
  );
}
