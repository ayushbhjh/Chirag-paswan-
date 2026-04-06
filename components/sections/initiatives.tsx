import { BriefcaseBusiness, Factory, GraduationCap } from "lucide-react";

import { SectionReveal } from "@/components/sections/section-reveal";
import { Card } from "@/components/ui/card";
import { initiatives } from "@/lib/site-data";

const iconMap = {
  Briefcase: BriefcaseBusiness,
  GraduationCap,
  Factory
};

export function InitiativesImpact() {
  return (
    <section id="initiatives" className="bg-[#f7f9fc] py-24 dark:bg-[#071025]">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-brand-saffron dark:text-brand-gold">
            Initiatives & Impact
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl text-brand-navy dark:text-white md:text-6xl">
            Policy-Led Action for Jobs, Growth and Local Opportunity
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {initiatives.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <SectionReveal key={item.title} delay={0.08 * index}>
                <Card className="h-full border-brand-navy/10 bg-white dark:border-white/10 dark:bg-white/5">
                  <span className="inline-flex rounded-2xl border border-brand-saffron/30 bg-brand-saffron/10 p-3 text-brand-saffron dark:border-brand-gold/40 dark:bg-brand-gold/10 dark:text-brand-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-brand-navy dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
