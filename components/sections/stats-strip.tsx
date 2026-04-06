import { Counter } from "@/components/sections/counter";
import { SectionReveal } from "@/components/sections/section-reveal";
import { stats } from "@/lib/site-data";

export function StatsStrip() {
  return (
    <section className="section-space bg-[#030816]">
      <div className="container">
        <SectionReveal className="grid gap-4 rounded-3xl border border-white/15 bg-[#050b1f]/90 p-5 text-white shadow-soft backdrop-blur-xl md:grid-cols-4 md:p-7">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
              <p className="font-serif text-3xl text-brand-gold md:text-4xl">
                <Counter target={item.value} suffix={item.suffix === "M+" ? "M+" : ""} />
                {item.suffix === "Years" || item.suffix === "Terms" ? ` ${item.suffix}` : ""}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/65 md:text-sm">{item.label}</p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
