import Link from "next/link";

const navLinks = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/valori-nutrizionali", label: "Valori Nutrizionali" },
  { href: "/contatti", label: "Contatti" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-gold/10 overflow-hidden">
      <p
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-10 sm:-bottom-16 left-1/2 -translate-x-1/2 text-[18vw] leading-none whitespace-nowrap font-light text-ivory/[0.03]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        OLIOPIETRA
      </p>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p
            className="text-2xl tracking-[0.35em] text-gold font-light mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            OLIOPIETRA
          </p>
          <p className="text-ivory/40 text-sm leading-relaxed">
            Olio extravergine d&apos;oliva
            <br />
            Edizione limitata · Tuscia, Lazio
          </p>
        </div>

        <div>
          <p className="text-gold/50 text-xs tracking-widest uppercase mb-5">
            Pagine
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-ivory/50 hover:text-gold text-sm transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gold/50 text-xs tracking-widest uppercase mb-5">
            Contatti
          </p>
          <div className="flex flex-col gap-3 text-sm text-ivory/50">
            <a href="tel:+393401756876" className="hover:text-gold transition-colors w-fit">
              +39 340 175 6876
            </a>
            <a href="mailto:contact@oliopietra.it" className="hover:text-gold transition-colors w-fit">
              contact@oliopietra.it
            </a>
            <a
              href="https://www.instagram.com/Oliopietra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-flex items-center gap-2 mt-2 w-fit"
            >
              <InstagramIcon />
              @Oliopietra
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-gold/10 py-6 text-center text-ivory/20 text-xs tracking-wider">
        © {new Date().getFullYear()} Oliopietra. Tutti i diritti riservati.
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
