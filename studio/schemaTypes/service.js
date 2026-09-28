export default {
  name: "service",
  title: "Servizio",
  type: "document",
  fields: [
    { name: "number", title: "Numero (es. 01)", type: "string" },
    { name: "title", title: "Titolo", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "short", title: "Descrizione breve", type: "text" },
    {
      name: "includes",
      title: "Cosa comprende",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "imageId", title: "Immagine (Cloudinary public ID)", type: "string", description: "Public ID dell'immagine su Cloudinary (es. clienti/nome-progetto)" },
    { name: "order", title: "Ordine di visualizzazione", type: "number" },
  ],
  orderings: [
    {
      title: "Ordine",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
