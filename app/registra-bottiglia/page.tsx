import type { Metadata } from "next";
import RegistraForm from "@/components/RegistraForm";

export const metadata: Metadata = {
  title: "Registra la tua Bottiglia — Oliopietra",
  description:
    "Registra la tua bottiglia Oliopietra inserendo il codice univoco sull'etichetta.",
};

export default function RegistraBottiglia() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.4em] text-gold/60 uppercase mb-6">
          Edizione Limitata
        </p>
        <h1
          className="text-4xl sm:text-5xl font-light text-ivory mb-4 leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Registra la tua Bottiglia
        </h1>
        <p className="text-ivory/45 text-sm mb-14 leading-relaxed">
          Hai acquistato una bottiglia Oliopietra? Registrala inserendo il codice
          univoco riportato sull&apos;etichetta per garantirne l&apos;autenticità e
          accedere ai contenuti esclusivi.
        </p>

        <RegistraForm />
      </div>
    </div>
  );
}
