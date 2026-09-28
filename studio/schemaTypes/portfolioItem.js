export default {
  name: "portfolioItem",
  title: "Progetto Portfolio",
  type: "document",
  fields: [
    { name: "client", title: "Nome cliente", type: "string" },
    { name: "category", title: "Categoria", type: "string" },
    { name: "year", title: "Anno", type: "string" },
    { name: "imageId", title: "Immagine (Cloudinary public ID)", type: "string", description: "Public ID dell'immagine su Cloudinary (es. clienti/nome-progetto)" },
    {
      name: "orientation",
      title: "Formato immagine",
      type: "string",
      options: {
        list: [
          { title: "Verticale", value: "vertical" },
          { title: "Orizzontale", value: "horizontal" },
          { title: "Full width", value: "full" },
        ],
      },
    },
    { name: "order", title: "Ordine di visualizzazione", type: "number" },
  ],
};
