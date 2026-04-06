"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    src: "/images/hero/hero-bg-1.webp",
    alt: "Chirag Paswan with Bihar leadership"
  },
  {
    src: "/images/hero/hero-bg-2.jpg",
    alt: "Chirag Paswan with national leaders"
  },
  {
    src: "/images/hero/hero-bg-3.webp",
    alt: "Chirag Paswan oath ceremony"
  }
];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-slate text-white">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[activeSlide].src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeSlide].src}
              alt={heroSlides[activeSlide].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-mesh opacity-25" />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,6,18,0.38),rgba(6,14,35,0.58),rgba(6,12,31,0.74))]" />
      <div className="pointer-events-none absolute -top-24 right-0 z-10 h-64 w-64 rounded-full bg-brand-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-8 z-10 h-48 w-48 rounded-full bg-brand-saffron/20 blur-3xl" />

      <div className="container relative z-20 pt-28 pb-14 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <Badge className="border-brand-gold/60 bg-brand-gold/10 text-brand-gold">
            Official Digital Headquarters
          </Badge>

          <h1 className="mt-6 font-serif text-5xl leading-[1.06] text-white md:text-7xl lg:text-8xl">
            Voice of New India.
            <br />
            Vision for Bihar.
          </h1>

          <p className="mt-6 max-w-3xl text-base text-white/80 md:text-xl">
            Union Minister | Member of Parliament | National Leader
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#media">
              <Button size="lg" className="gap-2">
                <PlayCircle className="h-4 w-4" /> Watch Vision
              </Button>
            </a>
            <a href="#initiatives">
              <Button variant="secondary" size="lg" className="gap-2">
                Explore Work <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:-translate-y-0.5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Position</p>
              <p className="mt-2 text-sm text-white">Union Minister, Food Processing Industries</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:-translate-y-0.5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Constituency</p>
              <p className="mt-2 text-sm text-white">Lok Sabha MP, Hajipur (Bihar)</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:-translate-y-0.5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Leadership</p>
              <p className="mt-2 text-sm text-white">National President, LJP (Ram Vilas)</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/30 p-2 text-white/80"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>

      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-2 md:flex">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setActiveSlide(index)}
            aria-label={`View hero slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index ? "w-8 bg-brand-gold" : "w-2.5 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
