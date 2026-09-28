export default {
  name: "testimonial",
  title: "Recensione",
  type: "document",
  fields: [
    { name: "quote", title: "Testo della recensione", type: "text", validation: (Rule) => Rule.required() },
    { name: "author", title: "Nome e cognome", type: "string", validation: (Rule) => Rule.required() },
    { name: "role", title: "Ruolo / Brand", type: "string" },
    {
      name: "source",
      title: "Fonte",
      type: "string",
      options: { list: ["Google", "Instagram", "LinkedIn", "Sito web", "Altro"] },
      initialValue: "Google",
    },
    { name: "sourceUrl", title: "Link alla recensione originale", type: "url" },
    {
      name: "rating",
      title: "Voto (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5).integer(),
    },
    { name: "order", title: "Ordine di visualizzazione", type: "number" },
  ],
  orderings: [{ title: "Ordine", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "author", subtitle: "source" },
  },
};
