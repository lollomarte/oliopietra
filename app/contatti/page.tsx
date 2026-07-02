import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contatti — Oliopietra",
  description:
    "Contattaci e vieni a trovarci nelle verdi colline della Tuscia, Lazio.",
};

export default function Contatti() {
  return (
    <div className="bg-beige-page text-dark min-h-screen pt-16">
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.4em] text-stone/60 uppercase mb-6">
            Vieni a trovarci
          </p>
          <h1
            className="text-4xl sm:text-5xl font-light text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Contattaci
          </h1>
          <p
            className="text-xl italic text-dark/55 mb-14 font-light leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            … o vieni a trovarci nelle verdi colline della Tuscia!
          </p>

          <div className="space-y-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-stone/60 uppercase mb-4">
                Telefono &amp; Email
              </p>
              <div className="space-y-2 text-dark/70">
                <a
                  href="tel:+393401756876"
                  className="block hover:text-dark transition-colors"
                >
                  +39 340 175 6876
                </a>
                <a
                  href="mailto:contact@oliopietra.it"
                  className="block hover:text-dark transition-colors"
                >
                  contact@oliopietra.it
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] text-stone/60 uppercase mb-4">
                Orari
              </p>
              <div className="space-y-1 text-dark/65 text-sm">
                <p>Lun – Ven &nbsp;·&nbsp; 9:00 – 17:00</p>
                <p>Sab – Dom &nbsp;·&nbsp; 9:00 – 14:00</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] text-stone/60 uppercase mb-4">
                Social
              </p>
              <a
                href="https://www.instagram.com/Oliopietra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark/60 hover:text-dark transition-colors text-sm"
              >
                <InstagramIcon />
                @Oliopietra
              </a>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-stone/20">
            <Link
              href="/registra-bottiglia"
              className="inline-block border border-stone/40 text-dark/60 hover:bg-dark hover:text-ivory text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors"
            >
              Registra la tua Bottiglia →
            </Link>
          </div>
        </div>

        {/* Right — circle image */}
        <div className="flex justify-center md:justify-end items-start pt-4">
          <div className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-2xl">
            <Image
              src="https://www.oliopietra.it/wp-content/uploads/2024/12/360_F_86470153_MKENqMIxb82dgXxmdMPccfrl6FaIvtC8.jpg"
              alt="Uliveto nella Tuscia, Lazio"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 400px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
