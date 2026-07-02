export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((text, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center whitespace-nowrap px-6 text-sm tracking-[0.3em] uppercase"
              >
                <span>{text}</span>
                <span className="ml-6 text-gold/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
