# Configurazione Google Sheets per il form "Registra la tua Bottiglia"

Il form invia i dati a un Google Apps Script che li scrive su un foglio Google.

## Passaggi

### 1. Crea il foglio Google Sheets

Vai su [sheets.google.com](https://sheets.google.com) e crea un nuovo foglio.
Nella prima riga aggiungi le intestazioni: `Timestamp | Nome | Email | Telefono | Codice Bottiglia`

### 2. Crea il Google Apps Script

1. Nel foglio, clicca su **Estensioni → Apps Script**
2. Cancella il codice esistente e incolla questo:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.nome || "",
      data.email || "",
      data.telefono || "",
      data.codicebottiglia || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Salva (Ctrl+S) e dagli un nome (es. "Oliopietra Registrazioni")

### 3. Pubblica come Web App

1. Clicca su **Distribuisci → Nuova distribuzione**
2. Tipo: **App Web**
3. Esegui come: **Me** (il tuo account Google)
4. Chi ha accesso: **Chiunque** (obbligatorio per ricevere i POST dal sito)
5. Clicca **Distribuisci** e autorizza l'accesso
6. Copia l'URL della Web App (es. `https://script.google.com/macros/s/ABC.../exec`)

### 4. Aggiungi l'URL come variabile d'ambiente

Crea un file `.env.local` nella root del progetto (copia da `.env.local.example`):

```
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/TUO_SCRIPT_ID/exec
```

Su Vercel, aggiungi la stessa variabile in **Settings → Environment Variables**.

---

> Senza `GOOGLE_APPS_SCRIPT_URL` il form funziona ugualmente ma i dati
> vengono solo stampati nel log del server (utile per test locali).
