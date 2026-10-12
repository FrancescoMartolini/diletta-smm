// Testi delle pagine interne (Servizi, Contatti). Provvisori: da validare con la cliente.
// Struttura ispirata al moodboard "Pink, but premium".

export const pagesConfig = {
  servizi: {
    kicker: "Servizi",
    title: "Servizi",
    intro: "Strategie su misura e contenuti che parlano alle persone. Ogni progetto è pensato per far crescere il tuo brand.",
  },
  contatti: {
    kicker: "Contatti",
    // righe del titolo oversize
    title: ["LET'S", "MAKE IT", "HAPPEN."],
    formTitle: "Scrivimi",
    submit: "Invia",
    // Messaggi del form (lo stato "non collegato" sparisce quando si imposta siteConfig.contact.formEndpoint)
    messages: {
      unconfigured: "[DA COLLEGARE] Il form non è ancora attivo: per ora scrivimi direttamente a",
      sent: "Grazie, ho ricevuto la tua richiesta. Ti rispondo al più presto.",
      error: "Qualcosa non ha funzionato. Riprova, oppure scrivimi a",
    },
  },
};
