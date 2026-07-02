import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email, telefono, codicebottiglia } = body ?? {};

  if (!nome || !email || !codicebottiglia) {
    return NextResponse.json(
      { error: "Campi obbligatori mancanti: nome, email, codicebottiglia" },
      { status: 400 }
    );
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    console.log("[registra] nuova registrazione (dev mode):", {
      nome,
      email,
      telefono: telefono || "",
      codicebottiglia,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  }

  const payload = {
    nome,
    email,
    telefono: telefono || "",
    codicebottiglia,
    timestamp: new Date().toISOString(),
  };

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error("[registra] errore dal Google Apps Script:", res.status);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
