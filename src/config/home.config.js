// Contenuti della Home. Tutto ciò che è "[DA COMPILARE]" è un segnaposto:
// nessun dato, numero o cliente è stato inventato.
// Servizi e portfolio NON stanno qui: vengono da services.config.js e
// portfolio.config.js (o da Sanity, se configurato).

export const homeConfig = {
  hero: {
    // Il motto ufficiale è la parola protagonista. font: "sans" (Neue Montreal) | "serif" (Garamond)
    headline: [
      { text: "NOT JUST", font: "sans" },
      { text: "AN IDEA", font: "serif" },
    ],
    // Fotografie del collage: public ID Cloudinary dei lavori REALI. Finché sono null
    // compaiono placeholder identificabili. Didascalie: nome cliente + progetto reali.
    photos: [
      { id: "a", imageId: null, alt: "[DA COMPILARE] Lavoro 1", caption: "[CLIENTE · PROGETTO]" },
      { id: "b", imageId: null, alt: "[DA COMPILARE] Lavoro 2", caption: "[CLIENTE]" },
      { id: "c", imageId: null, alt: "[DA COMPILARE] Lavoro 3", caption: "[CLIENTE · PROGETTO]" },
    ],
    // Bollini CTA: il rosa porta ai lavori, il beige ai servizi (sezione "Cosa faccio" della home)
    badges: [
      { id: "work", line1: "Scopri", line2: "i lavori", href: "#selected-work", tone: "accent" },
      { id: "services", line1: "Scopri", line2: "i servizi", href: "#servizi", tone: "muted" },
    ],
  },

  intro: {
    kicker: "Chi sono",
    // PROVVISORIO: traduce il posizionamento del brief, da riscrivere con la cliente
    statement: "Giovane, creativa, digitale. Ma quando lavoro con un brand, sono una professionista.",
    body: "[DA COMPILARE] Due o tre frasi in prima persona: come lavori, per chi, cosa ti distingue.",
  },

  // Sezione numeri: resta nascosta finché la cliente non conferma dati REALI.
  // Per attivarla: enabled: true e sostituire gli items.
  stats: {
    enabled: false,
    kicker: "In numeri",
    items: [
      { value: "[N]", label: "[DA COMPILARE]" },
      { value: "[N]", label: "[DA COMPILARE]" },
      { value: "[N]", label: "[DA COMPILARE]" },
    ],
  },

  testimonials: {
    kicker: "Feedback",
    headline: "Cosa dicono\ndi me.",
    emptyNotice:
      "[DA COMPILARE] Sezione pronta per le recensioni reali (Google, Instagram o altre fonti) — al momento non ce ne sono ancora da mostrare.",
  },

  services: {
    id: "servizi",
    kicker: "Cosa faccio",
    headline: "Cosa posso fare\nper il tuo brand.",
    cta: { label: "Tutti i servizi", path: "/servizi" },
  },

  work: {
    id: "selected-work",
    kicker: "Selected work",
    headline: "Lavori\nselezionati",
    // Layout visibile finché portfolio.config.js / Sanity sono vuoti
    placeholders: [
      { orientation: "vertical" },
      { orientation: "horizontal" },
      { orientation: "full" },
    ],
  },
};
