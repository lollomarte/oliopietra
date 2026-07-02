import Image from "next/image";
import Link from "next/link";

const BOTTLE_IMGS = [
  {
    src: "https://www.oliopietra.it/wp-content/uploads/2024/12/Screenshot-2024-12-13-143320.png",
    alt: "Oliopietra — bottiglia etichetta blu",
  },
  {
    src: "https://www.oliopietra.it/wp-content/uploads/2024/12/Screenshot-2024-12-13-144132.png",
    alt: "Oliopietra — bottiglia etichetta scura",
  },
  {
    src: "https://www.oliopietra.it/wp-content/uploads/2024/12/Screenshot-2024-12-13-144107.png",
    alt: "Oliopietra — bottiglia etichetta chiara",
  },
];

const features = [
  {
    title: "Estratto a Freddo",
    body: "Il nostro olio extravergine d'oliva è ottenuto tramite estrazione a freddo, preservando al massimo il gusto autentico e i benefici naturali delle olive.",
  },
  {
    title: "100% Italiano",
    body: "Oliopietra è prodotto interamente in Italia, sinonimo di tradizione, autenticità e rispetto per il territorio. Una scelta che fa la differenza.",
  },
  {
    title: "Edizione Limitata",
    body: "Con una produzione limitata a 10.000 bottiglie, Oliopietra garantisce l'unicità e la qualità di ogni singolo prodotto, ideale per veri intenditori.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            'url("https://www.oliopietra.it/wp-content/uploads/2024/12/frantoio-01.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dark/72" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-gold/70 uppercase mb-8">
            Tuscia, Lazio · Edizione Limitata
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-ivory mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Oliopietra nasce dalla passione per l&apos;olio extravergine di qualità.
          </h1>
          <p
            className="text-xl font-light italic text-ivory/70 mb-14"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ogni bottiglia rappresenta l&apos;eccellenza e la tradizione del nostro territorio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chi-siamo"
              className="border border-gold text-gold hover:bg-gold hover:text-dark text-xs tracking-[0.2em] uppercase px-10 py-3.5 transition-colors"
            >
              Chi Siamo
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-ivory/20 mx-auto" />
        </div>
      </section>

      {/* Features */}
      <section className="bg-dark-mid py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map(({ title, body }) => (
            <div key={title} className="border-t border-gold/20 pt-8">
              <h3
                className="text-gold text-xl font-light tracking-wide mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {title}
              </h3>
              <p className="text-ivory/55 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottle gallery */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs tracking-[0.4em] text-gold/40 uppercase mb-12">
            La Bottiglia
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BOTTLE_IMGS.map(({ src, alt }, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
