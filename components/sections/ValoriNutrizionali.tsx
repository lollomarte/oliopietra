"use client";

import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import CountUp from "@/components/CountUp";

const GRASSI_TOTALI = 91.6;
const SATURI = 13.5;
const INSATURI = 78.1;
const SATURI_PCT = (SATURI / GRASSI_TOTALI) * 100;
const INSATURI_PCT = (INSATURI / GRASSI_TOTALI) * 100;

const secondari = [
  { label: "Carboidrati", value: "0 g" },
  { label: "di cui zuccheri", value: "0 g" },
  { label: "Proteine", value: "0 g" },
  { label: "Sale", value: "0 g" },
];

export default function ValoriNutrizionali() {
  return (
    <section id="valori" className="bg-beige-page text-dark py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-stone/60 uppercase mb-4">
            Valori nutrizionali
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light text-dark text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Cosa contiene, cosa non contiene
          </h2>
          <p className="text-dark/45 text-sm mt-3 tracking-wide">su 100 ml di prodotto</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-14 items-center mb-16">
          <Reveal className="flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex flex-col items-center justify-center shrink-0">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone/20" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="text-gold"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
              <svg className="absolute inset-3" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-olive/25" />
              </svg>
              <CountUp
                to={824}
                className="text-5xl sm:text-6xl font-light text-dark"
              />
              <span className="text-xs tracking-[0.25em] text-stone/60 uppercase mt-2">kcal</span>
              <span className="text-[0.7rem] text-dark/35 mt-1">3389 kJ</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.3em] text-stone/60 uppercase mb-4">
              Grassi — {GRASSI_TOTALI.toString().replace(".", ",")} g
            </p>
            <div className="h-3 w-full rounded-full overflow-hidden bg-stone/15 flex">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${SATURI_PCT}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gold"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${INSATURI_PCT}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-olive"
              />
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-sm text-dark/60">
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
                Saturi — 13,5 g
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-olive inline-block" />
                Insaturi — 78,1 g
              </span>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone/15 mb-14">
          {secondari.map(({ label, value }) => (
            <StaggerItem key={label} className="bg-beige-page px-4 py-8 text-center">
              <p
                className="text-2xl text-dark font-light mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {value}
              </p>
              <p className="text-dark/45 text-[0.65rem] tracking-[0.15em] uppercase leading-tight">
                {label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="max-w-2xl mx-auto text-center border-t border-stone/20 pt-8">
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
  );
}
