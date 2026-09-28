# Sito SMM — Social Media Manager

Sito web sviluppato in **React + Vite + Tailwind CSS**, con routing tramite `react-router-dom`.

## Requisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (versione 18 o superiore) → [scaricalo qui](https://nodejs.org/)
- **npm** (incluso automaticamente con Node.js)

Per verificare cosa hai già installato, apri il terminale e digita:

```bash
node -v
npm -v
```

Se questi comandi restituiscono un numero di versione, sei pronta/o.

## 1. Scompatta il progetto

Estrai lo zip che hai ricevuto in una cartella a tua scelta, poi apri il terminale in quella cartella (su Mac: tasto destro sulla cartella → "Nuovo terminale nella cartella"; su Windows: Shift + tasto destro → "Apri finestra PowerShell qui").

## 2. Installa le dipendenze

Nel terminale, dentro la cartella del progetto, esegui:

```bash
npm install
```

Questo comando scarica tutte le librerie necessarie (React, Vite, Tailwind, ecc.) dentro una cartella `node_modules`. La prima volta può richiedere un minuto o due.

## 3. Avvia il sito in locale

```bash
npm run dev
```

Il terminale mostrerà un indirizzo simile a:

```
➜  Local:   http://localhost:5173/
```

Apri quell'indirizzo nel browser: il sito è ora attivo sul tuo computer. Ogni modifica ai file si aggiorna automaticamente nel browser, senza bisogno di ricaricare la pagina a mano.

Per fermare il sito, torna nel terminale e premi `Ctrl + C`.

## 4. Comandi disponibili

| Comando           | Cosa fa                                                        |
|--------------------|-----------------------------------------------------------------|
| `npm run dev`     | Avvia il sito in locale, in modalità sviluppo                   |
| `npm run build`   | Genera la versione ottimizzata e pronta per la pubblicazione online, nella cartella `dist/` |
| `npm run preview` | Fa vedere in locale come apparirà la versione di produzione, dopo `npm run build` |

## 5. Pannello admin (Sanity) — caricare foto e modificare testi

Il sito legge i contenuti testuali (servizi, portfolio) da **Sanity**; le **immagini** sono gestite da **Cloudinary** (Sanity conserva solo il public ID), un servizio gratuito che fornisce un pannello admin già pronto. Finché non è configurato, il sito usa automaticamente i dati statici in `src/config/`, quindi funziona comunque.

### 5.1 Crea il progetto Sanity

1. Vai su [sanity.io](https://www.sanity.io/) e crea un account gratuito.
2. Nel terminale, dentro la cartella `studio/`, esegui:
   ```bash
   cd studio
   npm install
   npx sanity init
   ```
3. Segui le domande: crea un nuovo progetto, dataset `production`, e rispondi "no" quando chiede di usare uno schema di esempio (lo schema è già pronto in `schemaTypes/`).
4. Al termine, `sanity init` stampa un **Project ID**: copialo.

### 5.2 Collega lo Studio al progetto

Apri `studio/sanity.config.js` e `studio/sanity.cli.js` e sostituisci `"REPLACE_ME"` con il Project ID ottenuto al passo precedente.

### 5.3 Pubblica il pannello admin online

Sempre dentro `studio/`:

```bash
npx sanity deploy
```

Ti verrà chiesto un nome (es. `nome-cliente-admin`): il pannello sarà disponibile su `https://nome-cliente-admin.sanity.studio`. È l'indirizzo che darai alla cliente per accedere e modificare i contenuti — basta il login, nessuna installazione richiesta da parte sua.

### 5.4 Collega il sito allo stesso progetto

Nella cartella principale del progetto (non `studio/`):

```bash
cp .env.example .env
```

Apri `.env` e inserisci lo stesso Project ID:

```
VITE_SANITY_PROJECT_ID=il-tuo-project-id
VITE_SANITY_DATASET=production
```

Riavvia `npm run dev`: da questo momento il sito legge i contenuti da Sanity invece che dai file statici.

### 5.5 Uso quotidiano per la cliente

Una volta pubblicato lo Studio (passo 5.3), la cliente:
- va su `https://nome-cliente-admin.sanity.studio`
- fa login con email
- modifica testi, aggiunge o riordina servizi e progetti del portfolio
- per le foto: le carica su Cloudinary e incolla il **public ID** nel campo "Immagine (Cloudinary public ID)"

Le modifiche compaiono sul sito pubblicato all'aggiornamento successivo della pagina (non serve toccare il codice). Se il sito è a generazione statica (build), potrebbe servire un redeploy automatico: se vuoi, quando scegli l'hosting possiamo impostare un webhook che ricostruisce il sito automaticamente a ogni modifica su Sanity.

## 6. Cosa serve ancora prima di andare online

Il codice è predisposto; mancano questi contenuti/decisioni (tutto ciò che è provvisorio è marcato `[DA COMPILARE]` o `PROVVISORIO` nel codice):

- **Cloudinary** → creare l'account e inserire `VITE_CLOUDINARY_CLOUD_NAME` in `.env`. Finché manca, le immagini mostrano un placeholder visibile ("[IMMAGINE DA CARICARE]"). Nessuna API secret va mai nel frontend.
- **Palette colori** → quella attuale è provvisoria (carta / inchiostro / rosso scarlatto). Si cambia solo in `src/styles/global.css`, variabili `--color-*` (formato "R G B").
- **Font** → Fraunces (titoli) + Work Sans (testi), self-hosted via `@fontsource-variable`, caricati in `src/main.jsx`. Nessuna chiamata a Google Fonts.
- **Logo** → da inserire nella Navbar (`Navbar.jsx`) e nel Footer (`Footer.jsx`); oggi c'è il nome in testo.
- **Testi Home** → `src/config/home.config.js` (headline e frase di presentazione sono proposte provvisorie da validare).
- **Numeri / social proof** → sezione nascosta: si attiva con `stats.enabled = true` in `home.config.js`, solo con dati reali.
- **Sanity** → seguire i passi del punto 5.
- **Invio del form contatti** → il form in `src/pages/Contatti.jsx` non invia ancora dati; va collegato a Formspree, Resend o simili.
- **Recensioni** → sezione "Cosa dicono di me" pronta ma vuota (`src/config/testimonials.config.js`); finché non ci sono recensioni reali mostra solo un avviso, non recensioni finte. Vanno inserite a mano (da Sanity o nel file di config) — non c'è recupero automatico da Google/altre fonti.
- **Favicon** → `public/favicon.svg` è un segnaposto.

## Struttura del progetto

```
sito-smm/
├── index.html
├── package.json
├── src/
│   ├── config/        contenuti modificabili (sito, home, servizi, portfolio, Cloudinary)
│   ├── styles/         design tokens globali (colori, font, spaziature)
│   ├── lib/             funzioni di supporto (es. URL Cloudinary)
│   ├── components/
│   │   ├── layout/     Navbar, Footer (con CTA finale), Layout
│   │   ├── sections/   sezioni della Home (Hero, Intro, Stats, ServicesPreview, SelectedWork, Testimonials)
│   │   └── ui/          Button, Img (immagini Cloudinary responsive), Reveal (animazioni), Stars
│   └── pages/           Home, Servizi, Contatti
├── studio/               pannello admin (Sanity): schemi di contenuto, config
└── public/               file statici (robots.txt, favicon, ecc.)
```

## Problemi comuni

**`npm install` dà errori di permessi**
Su Mac/Linux, evita `sudo npm install`. Se il problema persiste, controlla di avere Node.js installato correttamente (non tramite `sudo`).

**La porta 5173 è già in uso**
Vite propone automaticamente una porta alternativa (es. 5174): controlla l'indirizzo mostrato nel terminale dopo `npm run dev`.

**Le modifiche non si vedono nel browser**
Controlla di aver salvato il file. Se il problema persiste, ferma il server (`Ctrl + C`) e riavvialo con `npm run dev`.
