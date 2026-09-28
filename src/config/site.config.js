// Config centrale: la cliente potrà modificare questi valori
// senza toccare i componenti o il layout.

export const siteConfig = {
  name: "Nome Cliente",
  tagline: "Social Media Manager",
  description:
    "Creo contenuti, strategie e identità digitali che fanno parlare i brand.",
  url: "https://example.com", // dominio definitivo da confermare
  location: "Toscana, Italia",

  contact: {
    email: "hello@example.com",
    instagram: "https://instagram.com/",
    whatsapp: null, // opzionale, da confermare
  },

  nav: [
    { label: "Home", path: "/" },
    { label: "Servizi", path: "/servizi" },
    { label: "Contatti", path: "/contatti" },
  ],

  ctaPrimary: { label: "Parliamone", path: "/contatti" },

  // CTA finale, mostrata nel Footer su tutte le pagine tranne /contatti
  closingCta: {
    headline: "Il tuo brand\nha qualcosa\nda dire?",
    text: "Raccontami il progetto.",
  },
};
