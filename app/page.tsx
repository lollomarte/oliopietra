import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Storia from "@/components/sections/Storia";
import Edizione from "@/components/sections/Edizione";
import ValoriNutrizionali from "@/components/sections/ValoriNutrizionali";

const ticker = [
  "Tuscia, Lazio",
  "Estratto a Freddo",
  "Edizione Limitata",
  "10.000 Bottiglie",
  "100% Italiano",
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative bg-dark-mid border-y border-gold/10 text-gold/50 py-4">
        <Marquee items={ticker} />
      </div>

      <Storia />
      <Edizione />
      <ValoriNutrizionali />
    </>
  );
}
