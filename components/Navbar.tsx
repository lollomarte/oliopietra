"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/valori-nutrizionali", label: "Valori Nutrizionali" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl tracking-[0.35em] text-gold font-light shrink-0"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          OLIOPIETRA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.15em] text-ivory/60 hover:text-gold transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-ivory/60 hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Apri menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark border-t border-gold/10 px-6 py-5 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.15em] text-ivory/60 hover:text-gold transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
