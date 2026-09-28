// Contenuti della Home. Tutto ciò che è "[DA COMPILARE]" è un segnaposto:
// nessun dato, numero o cliente è stato inventato.
// Servizi e portfolio NON stanno qui: vengono da services.config.js e
// portfolio.config.js (o da Sanity, se configurato).

export const homeConfig = {
  hero: {
    eyebrow: "Social Media Manager",
    // una stringa per riga (animate a maschera). PROVVISORIO: da validare con la cliente
    headlineLines: ["Faccio parlare", "i brand che", "hanno qualcosa", "da dire."],
    ctaSecondary: { label: "Guarda i lavori", href: "#selected-work" },
    imageId: null, // public ID Cloudinary del ritratto
    imageAlt: "[DA COMPILARE] Ritratto della professionista",
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
    kicker: "Cosa faccio",
    headline: "Cosa posso fare\nper il tuo brand.",
    cta: { label: "Tutti i servizi", path: "/servizi" },
  },

  work: {
    id: "selected-work",
    kicker: "Selected work",
    headline: "Lavori\nselezionati.",
    // Layout visibile finché portfolio.config.js / Sanity sono vuoti
    placeholders: [
      { orientation: "vertical" },
      { orientation: "horizontal" },
      { orientation: "full" },
    ],
  },
};
