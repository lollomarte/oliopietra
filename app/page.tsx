import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Storia from "@/components/sections/Storia";
import Edizione from "@/components/sections/Edizione";
import Territorio from "@/components/sections/Territorio";
import ValoriNutrizionali from "@/components/sections/ValoriNutrizionali";
import Abbinamenti from "@/components/sections/Abbinamenti";
import Contatti from "@/components/sections/Contatti";

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
      <Territorio />
      <ValoriNutrizionali />
      <Abbinamenti />
      <Contatti />
    </>
  );
}
