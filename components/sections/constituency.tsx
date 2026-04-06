import { MapPinned } from "lucide-react";

import { SectionReveal } from "@/components/sections/section-reveal";
import { constituencyItems } from "@/lib/site-data";

export function ConstituencyConnect() {
  return (
    <section className="bg-gradient-to-br from-brand-navy via-[#143477] to-[#050f2a] py-24 text-white">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-brand-gold">Constituency Connect</p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">Hajipur: Leadership Grounded in People</h2>
          <p className="mt-4 max-w-2xl text-white/75">
            On-ground presence, public dialogue and development-focused follow-through define constituency leadership.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {constituencyItems.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <MapPinned className="h-5 w-5 text-brand-gold" />
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
