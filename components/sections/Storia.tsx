"use client";

import Image from "next/image";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import Reveal from "@/components/Reveal";

export default function Storia() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section id="storia" className="relative bg-beige-page text-dark py-28 px-6 overflow-hidden">
      <p
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 sm:top-0 right-0 text-[16vw] leading-none whitespace-nowrap font-light text-dark/[0.035]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        DAL 2024
      </p>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-stone/60 uppercase mb-6">
            La nostra storia
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light text-dark mb-8 leading-tight text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Storia e Filosofia
          </h2>
          <div ref={textRef} className="relative space-y-6 text-dark/65 text-base leading-relaxed md:pl-8">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="hidden md:block absolute left-0 top-1 bottom-1 w-px bg-gold/50 origin-top"
            />
            <p>
              Oliopietra è il risultato di una passione che si tramanda di generazione in
              generazione: l&apos;amore per l&apos;olio extravergine d&apos;oliva di qualità.
              La nostra storia inizia nelle campagne italiane, dove l&apos;arte della
              coltivazione degli ulivi e la maestria nell&apos;estrazione dell&apos;olio si
              intrecciano con il rispetto per la terra e per i suoi frutti. Ogni goccia del
              nostro olio racconta una storia di dedizione, autenticità e ricerca
              dell&apos;eccellenza.
            </p>
            <p>
              Crediamo che la qualità non sia un compromesso, ma un valore imprescindibile.
              Per questo seguiamo ogni fase della produzione con cura maniacale, dalla
              selezione delle migliori olive alla loro spremitura a freddo, garantendo un
              prodotto che conserva intatte le sue proprietà organolettiche e il sapore
              unico. Oliopietra non è solo un olio, ma un simbolo del nostro impegno a
              valorizzare il territorio italiano e le sue tradizioni.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative aspect-[3/4] overflow-hidden shadow-2xl group">
          <Image
            src="/images/bottiglia-scura.png"
            alt="Bottiglia Oliopietra"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-dark/10" />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative max-w-3xl mx-auto text-center mt-24">
        <span className="block text-stone/40 text-3xl mb-6" aria-hidden>
          &ldquo;
        </span>
        <p
          className="text-2xl sm:text-3xl italic font-light text-dark/80 leading-relaxed text-balance"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Ogni bottiglia è numerata, ogni goccia è un atto di rispetto per la terra e per chi
          la coltiva.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 text-stone/50">
          <span className="h-px w-10 bg-stone/30" />
          <span className="text-xs tracking-[0.3em] uppercase">Oliopietra</span>
          <span className="h-px w-10 bg-stone/30" />
        </div>
      </Reveal>
    </section>
  );
}
