import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
}

export function SectionShell({
  id,
  children,
  className,
  variant = "default",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 sm:py-20 lg:py-24",
        variant === "muted" && "bg-muted/40",
        variant === "primary" &&
          "bg-primary text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/75",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
