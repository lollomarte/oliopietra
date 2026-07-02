import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export const metadata: Metadata = {
  title: "Valori Nutrizionali — Oliopietra",
  description:
    "Valori nutrizionali dell'olio extravergine d'oliva Oliopietra su 100 ml di prodotto.",
};

const valori = [
  { label: "Energia", value: "824 kcal / 3389 kJ", indent: false },
  { label: "Grassi", value: "91,6 g", indent: false },
  { label: "di cui acidi grassi saturi", value: "13,5 g", indent: true },
  { label: "di cui acidi grassi insaturi", value: "78,1 g", indent: true },
  { label: "Carboidrati", value: "0 g", indent: false },
  { label: "di cui zuccheri", value: "0 g", indent: true },
  { label: "Proteine", value: "0 g", indent: false },
  { label: "Sale", value: "0 g", indent: false },
];

export default function ValoriNutrizionali() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[55vh] flex items-end px-6 pb-16 overflow-hidden"
        style={{
          backgroundImage: 'url("/images/frantoio-01.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/60 to-dark/30" />
        <Reveal className="relative z-10 max-w-6xl w-full mx-auto">
          <p className="text-xs tracking-[0.4em] text-gold/70 uppercase mb-4">
            Informazioni nutrizionali
          </p>
          <h1
            className="text-5xl sm:text-7xl font-light text-ivory"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Oliopietra
          </h1>
          <p className="text-ivory/50 mt-2 text-sm tracking-wide">
            su 100 ml di prodotto
          </p>
        </Reveal>
      </section>

      {/* Table */}
      <section className="bg-beige-page py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <StaggerGroup className="divide-y divide-stone/20">
            {valori.map(({ label, value, indent }) => (
              <StaggerItem key={label}>
                <div
                  className={`flex items-baseline justify-between py-5 ${indent ? "pl-5" : ""}`}
                >
                  <span
                    className={`${indent ? "text-dark/50 text-sm" : "text-dark"}`}
                    style={
                      !indent
                        ? { fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }
                        : {}
                    }
                  >
                    {label}
                  </span>
                  <span className="text-dark/70 text-sm font-medium tabular-nums">
                    {value}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2} className="mt-14 border-t border-stone/20 pt-8">
            <p className="text-dark/40 text-xs leading-relaxed">
              I valori nutrizionali sono calcolati su 100 ml di olio extravergine
              d&apos;oliva Oliopietra. Il prodotto è naturalmente privo di carboidrati,
              zuccheri, proteine e sale. L&apos;olio extravergine d&apos;oliva è una fonte
              naturale di vitamina E, polifenoli e antiossidanti, con un profilo lipidico
              ricco di acidi grassi monoinsaturi.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
