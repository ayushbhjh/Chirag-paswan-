import { SectionReveal } from "@/components/sections/section-reveal";

export function VisionSection() {
  return (
    <section id="vision" className="relative overflow-hidden bg-[#fff] py-28 dark:bg-[#040a19]">
      <div className="absolute inset-0 bg-mesh opacity-35" />
      <div className="container relative">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-saffron dark:text-brand-gold">Vision Wall</p>
          <h2 className="mt-4 max-w-6xl font-serif text-4xl leading-tight text-brand-navy dark:text-white md:text-7xl">
            Employment for Youth.
            <br />
            Empowerment for Rural India.
            <br />
            Growth Through Food Processing.
          </h2>
          <p className="mt-8 max-w-3xl text-base text-slate-700 dark:text-slate-300 md:text-lg">
            A nation-facing development philosophy anchored in jobs, dignity, entrepreneurship and constituency-centered governance.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
