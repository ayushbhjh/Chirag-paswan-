"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useMemo, useState } from "react";

import { SectionReveal } from "@/components/sections/section-reveal";
import { Badge } from "@/components/ui/badge";
import { featuredMedia, mediaItems, type MediaCategory } from "@/lib/site-data";

const tabs: MediaCategory[] = ["Lok Sabha Speeches", "Public Rallies", "Interviews"];

export function SpeechesMedia() {
  const [activeTab, setActiveTab] = useState<MediaCategory>("Lok Sabha Speeches");

  const filteredItems = useMemo(
    () => mediaItems.filter((item) => item.category === activeTab),
    [activeTab]
  );

  return (
    <section id="media" className="bg-gradient-to-b from-brand-slate to-[#040817] py-24 text-white">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-brand-gold">Media Command Center</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">Speeches, Rallies, and National Conversations</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            A curated media wall featuring parliamentary interventions, constituency engagement and long-form interviews.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-8 overflow-hidden rounded-3xl border border-white/15 bg-black/30 p-3" delay={0.08}>
          <div className="aspect-video overflow-hidden rounded-2xl">
            <video
              controls
              playsInline
              className="h-full w-full object-cover"
              poster="/images/hero-poster.svg"
            >
              <source src={featuredMedia.videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 pb-1">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{featuredMedia.sourceLabel}</p>
              <p className="mt-1 font-serif text-xl">{featuredMedia.title}</p>
            </div>
            <a
              href="https://youtube.com/@chiragpaswanoffice"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 transition hover:text-brand-gold"
            >
              View Official Channel
            </a>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-8 flex flex-wrap gap-2" delay={0.12}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                activeTab === tab
                  ? "rounded-full border border-brand-gold/60 bg-brand-gold/20 px-4 py-2 text-sm font-medium text-brand-gold"
                  : "rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-brand-gold/40"
              }
            >
              {tab}
            </button>
          ))}
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.08}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-3xl border border-white/15 bg-white/5"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-4 left-4 inline-flex items-center gap-2"
                  >
                    <span className="rounded-full border border-white/35 bg-black/30 p-2 backdrop-blur-md">
                      <Play className="h-4 w-4 fill-white text-white" />
                    </span>
                    <Badge className="bg-black/40 text-white">{item.platform}</Badge>
                  </motion.div>
                </div>

                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{item.dateLabel}</p>
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-white/70">
                    Open media <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
