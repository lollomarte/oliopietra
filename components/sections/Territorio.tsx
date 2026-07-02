"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "@/components/Reveal";

export default function Territorio() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="territorio"
      ref={ref}
      className="relative min-h-[85vh] flex items-center px-6 py-32 overflow-hidden"
    >
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url("/images/uliveto-tuscia.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 scale-110"
      />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-dark/40" />

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold/70 uppercase mb-6">
            Il territorio
          </p>
          <h2
            className="text-4xl sm:text-6xl font-light text-ivory mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Tuscia, Lazio
          </h2>
          <p
            className="text-xl sm:text-2xl italic font-light text-ivory/75 leading-relaxed text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Tra le verdi colline della Tuscia, dove il suolo vulcanico e il clima mite del
            Lazio regalano agli ulivi le condizioni ideali, nasce Oliopietra. Un territorio
            antico, custodito con la stessa cura che dedichiamo a ogni bottiglia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
