"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/team", label: "Our Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-screen-xl px-8 lg:px-16 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-base font-bold tracking-tight text-bone hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-ink"
        >
          WORK HARD
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[10px] tracking-[0.2em] uppercase text-dim hover:text-bone transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:rounded-sm active:opacity-50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="text-[10px] tracking-[0.2em] uppercase border border-gold/60 text-gold px-5 py-2.5
                     hover:border-gold hover:bg-gold/10 transition-colors duration-200
                     focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-ink
                     active:opacity-70"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
