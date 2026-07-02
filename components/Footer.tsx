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

      <div className="relative max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        <p
          className="text-2xl tracking-[0.35em] text-gold font-light"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          OLIOPIETRA
        </p>
        <p className="text-ivory/40 text-sm leading-relaxed">
          Olio extravergine d&apos;oliva · Edizione limitata · Tuscia, Lazio
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ivory/50 mt-2">
          <a href="mailto:contact@oliopietra.it" className="hover:text-gold transition-colors">
            contact@oliopietra.it
          </a>
        </div>

        <a
          href="#hero"
          className="mt-6 text-[0.65rem] tracking-[0.3em] text-gold/40 hover:text-gold uppercase transition-colors"
        >
          Torna all&apos;inizio ↑
        </a>
      </div>

      <div className="relative border-t border-gold/10 py-6 text-center text-ivory/20 text-xs tracking-wider">
        © {new Date().getFullYear()} Oliopietra. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
