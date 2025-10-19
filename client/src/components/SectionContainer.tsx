import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ id, title, subtitle, children, className = "" }: SectionContainerProps) {
  return (
    <section id={id} className={`py-24 px-4 scroll-mt-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
