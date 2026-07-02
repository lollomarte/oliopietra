import Image from "next/image";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";

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
    body: "Con una produzione limitata a 10.000 bottiglie, ogni esemplare è numerato: la tua bottiglia è un pezzo unico, non riproducibile.",
    icon: SealIcon,
  },
];

const DETAILS = [
  { src: "/images/bottiglia-blu.png", alt: "Etichetta numerata Oliopietra", caption: "Etichetta numerata" },
  { src: "/images/bottiglia-chiara.png", alt: "Sigillo di garanzia Oliopietra", caption: "Sigillo di garanzia" },
];

export default function Edizione() {
  return (
    <section id="edizione" className="bg-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mb-16">
          <p className="text-xs tracking-[0.4em] text-gold/50 uppercase mb-4">
            L&apos;edizione
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light text-ivory text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Cosa rende unica questa bottiglia
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 mb-24">
          {features.map(({ n, title, body, icon: Icon }) => (
            <StaggerItem key={title} className="group bg-dark">
              <TiltCard className="p-8 sm:p-10 h-full">
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
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Detail close-ups */}
        <Reveal className="text-center mb-10">
          <p className="text-xs tracking-[0.4em] text-gold/40 uppercase mb-4">
            I dettagli che raccontano l&apos;autenticità
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
          {DETAILS.map(({ src, alt, caption }, i) => (
            <Reveal key={src} delay={i * 0.12} className="group relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/15 group-hover:ring-gold/40 transition-colors duration-500" />
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/60 transition-colors duration-500" />
              <p className="absolute bottom-4 left-4 text-ivory/80 text-xs tracking-[0.2em] uppercase">
                {caption}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="relative bg-dark-mid border border-gold/10 rounded-sm py-16 px-6 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #f0ebe0 0, transparent 40%), radial-gradient(circle at 80% 70%, #c9a96e 0, transparent 40%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
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
        </div>
      </div>
    </section>
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
