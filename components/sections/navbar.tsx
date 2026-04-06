"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ModeToggle } from "@/components/sections/mode-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link href="#" className="flex items-center gap-3 text-white">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-brand-gold/50">
            <Image src="/images/navbar/chirag-nav.jpg" alt="Chirag Paswan" fill className="object-cover" />
          </span>
          <span className="font-serif text-sm uppercase tracking-[0.2em] md:text-base">Chirag Paswan</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/85 transition hover:text-brand-gold">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />
          <Button className="text-xs uppercase tracking-[0.14em]">Bihar First Bihari First</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#070d1f]/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/90" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-1 flex items-center gap-2">
              <ModeToggle />
              <Button className="w-full text-xs uppercase tracking-[0.14em]">Bihar First Bihari First</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
