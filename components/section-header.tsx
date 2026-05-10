import { Leaf } from "lucide-react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, accent, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-forest-600 dark:text-forest-300 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Leaf aria-hidden="true" size={14} />
        {eyebrow}
      </p>
      <h2 className="text-balance text-[clamp(2rem,4vw,4rem)] font-black leading-[1.02] text-forest-950 dark:text-cream">
        {title}
        {accent ? <span className="text-forest-600 dark:text-forest-300"> {accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-[color:var(--muted)] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
