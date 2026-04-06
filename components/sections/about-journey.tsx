import { SectionReveal } from "@/components/sections/section-reveal";

export function AboutJourney() {
  return (
    <section id="about" className="bg-[#fff9ef] py-24 dark:bg-[#061025]">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-brand-saffron dark:text-brand-gold">
            About | Journey
          </p>
          <h2 className="mt-4 font-serif text-4xl text-brand-navy dark:text-white md:text-6xl">
            Legacy-Carrying Leadership for a New India
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            <p>
              Born on 31 October 1982 in Delhi, Chirag Paswan represents a modern, youth-facing political voice rooted in social commitment and mass outreach.
            </p>
            <p>
              After his acting phase in <span className="italic">Miley Naa Miley Hum</span> (2011), he chose public service, entering politics with a development-first approach focused on employment and dignity.
            </p>
            <p>
              As the son of Ram Vilas Paswan, he carries a legacy of social justice while shaping a contemporary national narrative through policy, governance and grassroots connect.
            </p>
            <p>
              He currently serves as Union Minister of Food Processing Industries, Lok Sabha MP from Hajipur, and National President of Lok Janshakti Party (Ram Vilas).
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <div className="relative overflow-hidden rounded-3xl border border-brand-saffron/20 bg-gradient-to-br from-brand-navy via-[#122f6f] to-[#08142d] p-8 text-white shadow-soft">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-gold/25 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Leadership Snapshot</p>
            <div className="mt-6 space-y-4 text-sm md:text-base">
              <p><span className="text-brand-gold">DOB:</span> 31 October 1982</p>
              <p><span className="text-brand-gold">Birthplace:</span> Delhi, India</p>
              <p><span className="text-brand-gold">Current Role:</span> Union Minister of Food Processing Industries</p>
              <p><span className="text-brand-gold">Parliament:</span> Lok Sabha, Hajipur (Bihar)</p>
              <p><span className="text-brand-gold">Party:</span> National President, LJP (Ram Vilas)</p>
              <p><span className="text-brand-gold">Core Line:</span> Bihar First, Youth First</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
