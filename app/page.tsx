"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";

const BOTTLE_IMGS = [
  { src: "/images/bottiglia-blu.png", alt: "Oliopietra — bottiglia etichetta blu" },
  { src: "/images/bottiglia-scura.png", alt: "Oliopietra — bottiglia etichetta scura" },
  { src: "/images/bottiglia-chiara.png", alt: "Oliopietra — bottiglia etichetta chiara" },
];

const features = [
  {
    n: "01",
    title: "Estratto a Freddo",
    body: "Il nostro olio extravergine d'oliva è ottenuto tramite estrazione a freddo, preservando al massimo il gusto autentico e i benefici naturali delle olive.",
    icon: DropIcon,
  },
  {
    n: "02",
    title: "100% Italiano",
    body: "Oliopietra è prodotto interamente in Italia, sinonimo di tradizione, autenticità e rispetto per il territorio. Una scelta che fa la differenza.",
    icon: LeafIcon,
  },
  {
    n: "03",
    title: "Edizione Limitata",
    body: "Con una produzione limitata a 10.000 bottiglie, Oliopietra garantisce l'unicità e la qualità di ogni singolo prodotto, ideale per veri intenditori.",
    icon: SealIcon,
  },
];

const ticker = [
  "Tuscia, Lazio",
  "Estratto a Freddo",
  "Edizione Limitata",
  "10.000 Bottiglie",
  "100% Italiano",
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
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
            Tuscia, Lazio · Edizione Limitata
          </motion.p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-ivory mb-8 text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {"Oliopietra nasce dalla passione per l'olio extravergine di qualità."
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
            className="text-xl font-light italic text-ivory/70 mb-14"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ogni bottiglia rappresenta l&apos;eccellenza e la tradizione del nostro territorio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/chi-siamo"
              className="group relative overflow-hidden border border-gold text-gold text-xs tracking-[0.2em] uppercase px-10 py-3.5"
            >
              <span className="absolute inset-0 bg-gold origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative transition-colors duration-500 group-hover:text-dark">
                Chi Siamo
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[0.65rem] tracking-[0.3em] text-ivory/40 uppercase">Scorri</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-linear-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="relative bg-dark-mid border-y border-gold/10 text-gold/50 py-4">
        <Marquee items={ticker} />
      </div>

      {/* Features */}
      <section className="bg-dark py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-xl mb-16">
            <p className="text-xs tracking-[0.4em] text-gold/50 uppercase mb-4">
              Perché sceglierci
            </p>
            <h2
              className="text-3xl sm:text-4xl font-light text-ivory text-balance"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Tre ragioni per amare Oliopietra
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
            {features.map(({ n, title, body, icon: Icon }) => (
              <StaggerItem key={title} className="group bg-dark p-8 sm:p-10">
                <div className="flex items-start justify-between mb-8">
                  <Icon />
                  <span
                    className="text-4xl text-ivory/[0.08] group-hover:text-gold/20 transition-colors duration-500"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {n}
                  </span>
                </div>
                <h3
                  className="text-gold text-xl font-light tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {title}
                </h3>
                <p className="text-ivory/55 text-sm leading-relaxed mb-6">{body}</p>
                <div className="h-px w-8 bg-gold/40 group-hover:w-16 transition-all duration-500" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative bg-olive py-20 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #f0ebe0 0, transparent 40%), radial-gradient(circle at 80% 70%, #c9a96e 0, transparent 40%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {[
            { to: 10000, suffix: "", label: "Bottiglie numerate" },
            { to: 100, suffix: "%", label: "Italiano" },
            { to: 0, suffix: "", label: "Additivi o conservanti" },
          ].map(({ to, suffix, label }) => (
            <Reveal key={label}>
              <CountUp
                to={to}
                suffix={suffix}
                className="block text-5xl sm:text-6xl font-light text-ivory mb-3"
              />
              <p className="text-ivory/60 text-xs tracking-[0.25em] uppercase">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottle gallery */}
      <section className="bg-dark py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.4em] text-gold/40 uppercase mb-4">
              La Collezione
            </p>
            <h2
              className="text-3xl sm:text-4xl font-light text-ivory"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              La Bottiglia
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            <Reveal className="sm:col-span-3 sm:row-span-2 relative aspect-[3/4] sm:aspect-auto sm:h-full min-h-[420px] overflow-hidden group">
              <BottleFrame src={BOTTLE_IMGS[0].src} alt={BOTTLE_IMGS[0].alt} sizes="(max-width: 640px) 100vw, 50vw" />
            </Reveal>
            <Reveal delay={0.1} className="sm:col-span-3 relative aspect-[4/3] overflow-hidden group">
              <BottleFrame src={BOTTLE_IMGS[1].src} alt={BOTTLE_IMGS[1].alt} sizes="(max-width: 640px) 100vw, 50vw" />
            </Reveal>
            <Reveal delay={0.2} className="sm:col-span-3 relative aspect-[4/3] overflow-hidden group">
              <BottleFrame src={BOTTLE_IMGS[2].src} alt={BOTTLE_IMGS[2].alt} sizes="(max-width: 640px) 100vw, 50vw" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-dark-mid py-28 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="block text-gold/40 text-3xl mb-6" aria-hidden>
            &ldquo;
          </span>
          <p
            className="text-2xl sm:text-3xl italic font-light text-ivory/90 leading-relaxed text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ogni bottiglia è numerata, ogni goccia è un atto di rispetto per la terra e per chi
            la coltiva.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-gold/50">
            <span className="h-px w-10 bg-gold/30" />
            <span className="text-xs tracking-[0.3em] uppercase">Oliopietra</span>
            <span className="h-px w-10 bg-gold/30" />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative bg-dark py-28 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-3xl"
        />
        <Reveal className="relative">
          <p className="text-gold/50 text-xs tracking-[0.4em] uppercase mb-6">
            Scopri di più
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light text-ivory mb-10 text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            La nostra storia, la nostra terra.
          </h2>
          <Link
            href="/chi-siamo"
            className="group inline-flex items-center gap-3 bg-gold text-dark text-xs tracking-[0.2em] uppercase px-12 py-4 hover:bg-gold-light transition-colors"
          >
            Chi Siamo
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function BottleFrame({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-gold/15 group-hover:ring-gold/40 transition-colors duration-500" />
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
    </>
  );
}

function DropIcon() {
  return (
    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3.5c3.2 4 6 7.6 6 10.9a6 6 0 1 1-12 0c0-3.3 2.8-6.9 6-10.9Z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 20c8 0 16-4 16-16C12 4 4 12 4 20Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 20c3-6 7-10 13-13" />
    </svg>
  );
}

function SealIcon() {
  return (
    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="9.5" r="6" strokeWidth={1.2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 14.5 7.5 21 12 18.5 16.5 21 15 14.5" />
    </svg>
  );
}
