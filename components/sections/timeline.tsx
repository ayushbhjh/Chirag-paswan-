"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { SectionReveal } from "@/components/sections/section-reveal";
import { timeline } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PoliticalTimeline() {
  const [activeYear, setActiveYear] = useState<string>(timeline[0].year);

  return (
    <section id="timeline" className="bg-white py-24 dark:bg-[#040a1a]">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-brand-saffron dark:text-brand-gold">
            Political Timeline
          </p>
          <h2 className="mt-4 font-serif text-4xl text-brand-navy dark:text-white md:text-6xl">
            Milestones of National Leadership
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {timeline.map((item, index) => {
            const active = activeYear === item.year;
            return (
              <SectionReveal key={item.year} delay={0.08 * index}>
                <button
                  onMouseEnter={() => setActiveYear(item.year)}
                  onFocus={() => setActiveYear(item.year)}
                  onClick={() => setActiveYear(item.year)}
                  className={cn(
                    "group relative h-full w-full overflow-hidden rounded-3xl border p-6 text-left transition duration-300",
                    active
                      ? "border-brand-saffron/55 bg-gradient-to-br from-brand-saffron/10 via-brand-gold/5 to-transparent shadow-soft"
                      : "border-slate-200 bg-slate-50 hover:border-brand-saffron/30 dark:border-white/10 dark:bg-white/5"
                  )}
                >
                  <motion.span
                    layoutId="active-year-pill"
                    className={cn(
                      "absolute right-4 top-4 h-2.5 w-2.5 rounded-full",
                      active ? "bg-brand-gold" : "bg-slate-300 dark:bg-white/20"
                    )}
                  />
                  <p className="font-serif text-4xl text-brand-navy dark:text-white">{item.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </button>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
