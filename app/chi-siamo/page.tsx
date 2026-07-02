import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export const metadata: Metadata = {
  title: "Chi Siamo — Oliopietra",
  description:
    "La storia di Oliopietra: passione, tradizione e dedizione alla qualità dell'olio extravergine d'oliva.",
};

const valori = [
  { n: "01", label: "Estratto a freddo", desc: "Preserva le proprietà organolettiche naturali delle olive." },
  { n: "02", label: "100% Italiano", desc: "Prodotto interamente in Italia, dalla coltivazione all'imbottigliamento." },
  { n: "03", label: "Edizione limitata", desc: "Soli 10.000 esemplari per anno, per garantire unicità e qualità assoluta." },
];

export default function ChiSiamo() {
  return (
    <div className="relative bg-beige-page text-dark min-h-screen pt-16 overflow-hidden">
      <p
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 sm:top-0 right-0 text-[16vw] leading-none whitespace-nowrap font-light text-dark/[0.035]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        DAL 2024
      </p>

      {/* Intro */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-stone/60 uppercase mb-6">
            La nostra storia
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-dark mb-8 leading-tight text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Chi Siamo
          </h1>
          <div className="space-y-6 text-dark/65 text-base leading-relaxed">
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
      </section>

      {/* Values + second image */}
      <section className="relative max-w-6xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal className="relative aspect-[3/4] overflow-hidden shadow-2xl order-2 md:order-1 group">
          <Image
            src="/images/bottiglia-chiara.png"
            alt="Bottiglia Oliopietra"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-dark/10" />
        </Reveal>

        <StaggerGroup className="order-1 md:order-2 divide-y divide-stone/20">
          {valori.map(({ n, label, desc }) => (
            <StaggerItem key={label} className="group py-8 first:pt-0">
              <div className="flex items-baseline gap-4">
                <span
                  className="text-xl text-stone/30 group-hover:text-olive transition-colors duration-500"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {n}
                </span>
                <div>
                  <h3
                    className="text-xl font-light text-dark mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {label}
                  </h3>
                  <p className="text-dark/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Editorial band */}
      <section className="relative bg-olive py-20 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #f0ebe0 0, transparent 35%), radial-gradient(circle at 85% 80%, #c9a96e 0, transparent 35%)",
          }}
        />
        <Reveal className="relative max-w-2xl mx-auto">
          <p
            className="text-2xl sm:text-3xl italic font-light text-ivory/90 leading-relaxed text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Coltiviamo la terra come fosse un&apos;eredità da custodire, non una risorsa da
            sfruttare.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
