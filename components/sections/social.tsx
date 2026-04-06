import { ExternalLink, Facebook, Instagram, Youtube } from "lucide-react";
import type { ComponentType } from "react";

import { SectionReveal } from "@/components/sections/section-reveal";
import { socialCards } from "@/lib/site-data";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  X: ExternalLink
};

export function SocialPresence() {
  return (
    <section className="bg-[#f8fafc] py-24 dark:bg-[#050d20]">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-saffron dark:text-brand-gold">
            Social Presence
          </p>
          <h2 className="mt-4 font-serif text-4xl text-brand-navy dark:text-white md:text-6xl">
            Mass Connect Across Digital Platforms
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {socialCards.map((card, index) => {
            const Icon = icons[card.name];
            return (
              <SectionReveal key={card.name} delay={index * 0.08}>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-saffron/35 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-gold/30"
                >
                  <Icon className="h-5 w-5 text-brand-saffron dark:text-brand-gold" />
                  <h3 className="mt-4 text-2xl font-semibold text-brand-navy dark:text-white">{card.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.followers}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-brand-saffron dark:text-brand-gold">
                    Open profile <ExternalLink className="h-3.5 w-3.5" />
                  </p>
                </a>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
