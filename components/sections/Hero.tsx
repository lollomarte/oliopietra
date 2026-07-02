"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url("/images/frantoio-01.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-b from-dark/60 via-dark/75 to-dark" />

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-[0.4em] text-gold/70 uppercase mb-8"
        >
          Tuscia, Lazio · Edizione Limitata a 10.000 Bottiglie
        </motion.p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-ivory mb-8 text-balance"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {"Hai tra le mani un'edizione che racconta una storia."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.035, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl font-light italic text-ivory/70"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Scopri il territorio, il metodo e i valori dietro alla bottiglia che stai vivendo.
        </motion.p>
      </motion.div>

      <motion.a
        href="#storia"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory/40 hover:text-gold transition-colors"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scopri di più</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-linear-to-b from-gold/60 to-transparent"
        />
      </motion.a>
    </section>
  );
}
