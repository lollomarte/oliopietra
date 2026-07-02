"use client";

import { useState } from "react";

interface FormState {
  nome: string;
  email: string;
  telefono: string;
  codicebottiglia: string;
}

const fields: {
  name: keyof FormState;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
}[] = [
  { name: "nome", label: "Nome e Cognome", type: "text", required: true, placeholder: "Mario Rossi" },
  { name: "email", label: "Indirizzo Email", type: "email", required: true, placeholder: "mario@esempio.it" },
  { name: "telefono", label: "Telefono", type: "tel", required: false, placeholder: "+39 333 000 0000" },
  { name: "codicebottiglia", label: "Codice Bottiglia", type: "text", required: true, placeholder: "es. OP-00001" },
];

export default function RegistraForm() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    telefono: "",
    codicebottiglia: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/registra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ nome: "", email: "", telefono: "", codicebottiglia: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center mx-auto mb-6">
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p
          className="text-3xl font-light text-ivory mb-3"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Registrazione completata!
        </p>
        <p className="text-ivory/50 text-sm mb-8">
          La tua bottiglia è stata registrata con successo. Grazie.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-gold/50 hover:text-gold tracking-widest uppercase underline underline-offset-4 transition-colors"
        >
          Registra un&apos;altra bottiglia
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {fields.map(({ name, label, type, required, placeholder }) => (
        <div key={name}>
          <label
            htmlFor={name}
            className="block text-xs tracking-[0.2em] text-ivory/50 uppercase mb-3"
          >
            {label}
            {required && <span className="text-gold ml-1">*</span>}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={form[name]}
            onChange={handleChange}
            required={required}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-ivory/20 focus:border-gold text-ivory text-sm py-2.5 outline-none transition-colors placeholder:text-ivory/15"
          />
        </div>
      ))}

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Si è verificato un errore. Riprova o scrivici a{" "}
          <a href="mailto:contact@oliopietra.it" className="underline">
            contact@oliopietra.it
          </a>
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold text-dark text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold-light transition-colors disabled:opacity-60 font-medium"
        >
          {status === "loading" ? "Registrazione in corso…" : "Registra la Bottiglia"}
        </button>
        <p className="text-ivory/25 text-xs mt-4 text-center">
          I campi con <span className="text-gold">*</span> sono obbligatori
        </p>
      </div>
    </form>
  );
}
