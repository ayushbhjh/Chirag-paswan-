import { Mail, Phone } from "lucide-react";

import { SectionReveal } from "@/components/sections/section-reveal";
import { profile, socialCards } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-brand-navy to-[#030a1f] py-24 text-white">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Contact</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">Official Office Connect</h2>
          <p className="mt-4 max-w-3xl text-white/75">
            {profile.name} | {profile.line}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
            >
              <Mail className="h-5 w-5 text-brand-gold" />
              <span>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/-/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
            >
              <Phone className="h-5 w-5 text-brand-gold" />
              <span>{profile.phone}</span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialCards.map((card) => (
              <a
                key={card.name}
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/80 transition hover:border-brand-gold/50 hover:text-brand-gold"
              >
                {card.name}
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
