export default {
  name: "siteSettings",
  title: "Impostazioni sito",
  type: "document",
  // Documento singolo: nella struttura dello Studio verrà mostrato
  // come una scheda unica, non come una lista (vedi structure.js)
  fields: [
    { name: "name", title: "Nome", type: "string" },
    { name: "tagline", title: "Sottotitolo", type: "string" },
    { name: "description", title: "Descrizione breve (hero)", type: "text" },

    { name: "logo", title: "Logo", type: "image", options: { hotspot: true } },
    { name: "heroImageId", title: "Foto Hero (Cloudinary public ID)", type: "string", description: "Public ID dell'immagine su Cloudinary (es. clienti/nome-progetto)" },

    { name: "email", title: "Email", type: "string" },
    { name: "instagram", title: "Link Instagram", type: "url" },
    { name: "whatsapp", title: "Numero WhatsApp", type: "string" },

    {
      name: "stats",
      title: "Numeri / Social proof",
      type: "array",
      description: "Es. '50+' / 'Brand seguiti'. Lasciare vuoto se non ci sono ancora dati reali.",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Valore", type: "string" },
            { name: "label", title: "Etichetta", type: "string" },
          ],
        },
      ],
    },
  ],
};
