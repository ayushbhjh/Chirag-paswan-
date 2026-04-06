import Image from "next/image";

import { SectionReveal } from "@/components/sections/section-reveal";
import { galleryImages } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section className="bg-[#08132f] py-24 text-white">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Gallery</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">Public Life in Motion</h2>
        </SectionReveal>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.06}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border border-white/15 ${
                  index === 0 ? "xl:col-span-2 xl:row-span-2" : ""
                } ${index === 3 ? "xl:row-span-2" : ""}`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white">{item.title}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
