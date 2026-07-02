import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

const abbinamenti = [
  {
    title: "Pane e Bruschette",
    body: "A crudo, su pane casereccio appena tostato: il modo più puro per apprezzarne l'aroma fruttato.",
    icon: BreadIcon,
  },
  {
    title: "Verdure Grigliate",
    body: "Esalta il carattere di verdure e ortaggi grigliati, aggiungendo profondità senza coprirne il sapore.",
    icon: VegIcon,
  },
  {
    title: "Carpacci e Crudi",
    body: "Un filo a crudo su carpacci di carne o pesce arricchisce senza sovrastare la delicatezza del piatto.",
    icon: FishIcon,
  },
  {
    title: "Legumi e Zuppe",
    body: "Completa zuppe e legumi con una nota vellutata, portando equilibrio a piatti di tradizione contadina.",
    icon: BowlIcon,
  },
];

export default function Abbinamenti() {
  return (
    <section id="abbinamenti" className="bg-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mb-16">
          <p className="text-xs tracking-[0.4em] text-gold/50 uppercase mb-4">
            In cucina
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light text-ivory text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Abbinamenti consigliati
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10">
          {abbinamenti.map(({ title, body, icon: Icon }) => (
            <StaggerItem key={title} className="group bg-dark p-8 sm:p-10 flex gap-6">
              <Icon />
              <div>
                <h3
                  className="text-gold text-xl font-light tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {title}
                </h3>
                <p className="text-ivory/55 text-sm leading-relaxed">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function BreadIcon() {
  return (
    <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 10v4M12 9v5M15 10v4" />
    </svg>
  );
}

function VegIcon() {
  return (
    <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 21c-4 0-7-3-7-7 0-3 2-5 3-7 1 1 2 2 2 3.5C10 8 11 5 14 3c0 2 1 3 2 4.5 1 1.5 3 3 3 6.5 0 4-3 7-7 7Z" />
    </svg>
  );
}

function FishIcon() {
  return (
    <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12s4-5 10-5 8 5 8 5-2 5-8 5-10-5-10-5Z" />
      <circle cx="16" cy="11" r="0.8" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12c0-1.5 1-2.5 2-3M3 12c0 1.5 1 2.5 2 3" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12h18c0 4.4-4 8-9 8s-9-3.6-9-8Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 12c0-2.5 1.5-4 4-4s4 1.5 4 4" />
    </svg>
  );
}
