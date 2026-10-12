// Config centrale: la cliente potrà modificare questi valori
// senza toccare i componenti o il layout.

export const siteConfig = {
  name: "21 Communication Agency",
  // Logo originale: inserire il file in public/brand/ e impostare il percorso qui.
  // Finché è null, header e footer mostrano il nome in testo (segnaposto, NON il logo).
  logo: { src: null, height: 28 },
  tagline: "Social Media Manager",
  description:
    "Creo contenuti, strategie e identità digitali che fanno parlare i brand.",
  url: "https://example.com", // dominio definitivo da confermare
  location: "Toscana, Italia",

  contact: {
    email: "hello@example.com",
    instagram: "https://instagram.com/",
    whatsapp: null, // opzionale, da confermare
    linkedin: null, // opzionale: URL del profilo, compare nei contatti solo se impostato
    // Endpoint del servizio di invio form (es. Formspree: "https://formspree.io/f/xxxx").
    // Finché è null il form mostra un avviso e rimanda all'email: nessun invio finto.
    formEndpoint: null,
  },

  nav: [
    { label: "Lavori", path: "/#selected-work" },
    { label: "Servizi", path: "/servizi" },
    { label: "Contatti", path: "/contatti", pill: true },
  ],

  ctaPrimary: { label: "Parliamone", path: "/contatti" },

  // CTA finale, mostrata nel Footer su tutte le pagine tranne /contatti
  closingCta: {
    headline: "Il tuo brand\nha qualcosa\nda dire?",
    text: "Raccontami il progetto.",
  },
};
