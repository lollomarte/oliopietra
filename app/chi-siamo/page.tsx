import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chi Siamo — Oliopietra",
  description:
    "La storia di Oliopietra: passione, tradizione e dedizione alla qualità dell'olio extravergine d'oliva.",
};

export default function ChiSiamo() {
  return (
    <div className="bg-beige-page text-dark min-h-screen pt-16">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs tracking-[0.4em] text-stone/60 uppercase mb-6">
            La nostra storia
          </p>
          <h1
            className="text-4xl sm:text-5xl font-light text-dark mb-8 leading-tight"
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
        </div>

        <div className="relative aspect-[3/4] rounded overflow-hidden shadow-2xl">
          <Image
            src="https://www.oliopietra.it/wp-content/uploads/2024/12/Screenshot-2024-12-13-144132.png"
            alt="Bottiglia Oliopietra"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Values + second image */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] rounded overflow-hidden shadow-2xl order-2 md:order-1">
          <Image
            src="https://www.oliopietra.it/wp-content/uploads/2024/12/Screenshot-2024-12-13-144107.png"
            alt="Bottiglia Oliopietra"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="order-1 md:order-2 divide-y divide-stone/20">
          {[
            { label: "Estratto a freddo", desc: "Preserva le proprietà organolettiche naturali delle olive." },
            { label: "100% Italiano", desc: "Prodotto interamente in Italia, dalla coltivazione all'imbottigliamento." },
            { label: "Edizione limitata", desc: "Soli 10.000 esemplari per anno, per garantire unicità e qualità assoluta." },
          ].map(({ label, desc }) => (
            <div key={label} className="py-8">
              <h3
                className="text-xl font-light text-dark mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {label}
              </h3>
              <p className="text-dark/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
