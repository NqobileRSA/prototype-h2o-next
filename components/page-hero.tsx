import { ReactNode } from "react";

type PageHeroProps = {
  sectionNumber: string;
  sectionLabel: string;
  title: string;
  accentText?: string;
  description: string;
  watermark: string;
  backgroundClassName?: string;
  titleClassName?: string;
  dark?: boolean;
  children?: ReactNode;
};

export default function PageHero({
  sectionNumber,
  sectionLabel,
  title,
  accentText,
  description,
  watermark,
  backgroundClassName = "bg-mineral",
  titleClassName = "font-serif text-[clamp(36px,5.5vw,66px)] font-normal leading-[1.07] tracking-[-0.01em]",
  dark = false,
  children,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32 ${backgroundClassName}`}>
      <div className="page-watermark" aria-hidden="true">
        {watermark}
      </div>
      <div className="relative z-10 max-w-2xl reveal in">
        <div
          className={`mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] ${dark ? "text-brass/70" : "text-teal"}`}
        >
          <span className={dark ? "text-brass" : "text-accent"}>{sectionNumber}</span>
          <span className="h-px w-5 bg-current opacity-40" />
          <span>{sectionLabel}</span>
        </div>
        <h1 className={`${titleClassName} ${dark ? "text-white" : "text-ink"}`}>
          {title}
          {accentText ? <em className={`${dark ? "text-brass" : "text-accent"} font-normal italic`}> {accentText}</em> : null}
        </h1>
        <p className={`mt-6 max-w-lg text-[15px] leading-relaxed ${dark ? "text-white/65" : "text-stone"}`}>{description}</p>
        {children}
      </div>
    </section>
  );
}
