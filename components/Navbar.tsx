"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#storia", label: "Storia" },
  { href: "#edizione", label: "L'Edizione" },
  { href: "#territorio", label: "Territorio" },
  { href: "#valori", label: "Valori Nutrizionali" },
  { href: "#abbinamenti", label: "Abbinamenti" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-gold/10 py-0"
          : "bg-linear-to-b from-black/50 to-transparent border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="group relative text-xl tracking-[0.35em] text-gold font-light shrink-0 z-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          OLIOPIETRA
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`group relative text-xs tracking-[0.15em] transition-colors uppercase py-2 ${
                active === href.slice(1) ? "text-gold" : "text-ivory/60 hover:text-gold"
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                  active === href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden relative z-10 text-ivory/70 hover:text-gold transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
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

      <motion.div
        style={{ scaleX: progress }}
        className="h-px w-full origin-left bg-gold/60"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-dark/98 backdrop-blur-sm flex flex-col justify-center px-10 gap-6 overflow-y-auto py-16"
          >
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light text-ivory hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
