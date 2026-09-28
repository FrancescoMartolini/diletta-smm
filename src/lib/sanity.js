import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// projectId/dataset arrivano dalle variabili d'ambiente (.env), NON hardcoded,
// così restano fuori dal codice versionato. Vedi .env.example.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

// isConfigured = false finché la cliente/lo sviluppatore non ha creato
// il progetto Sanity e impostato le variabili d'ambiente.
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true, // letture veloci; per anteprime live si può passare a false
    })
  : null;

const builder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

/** Costruisce un URL immagine ottimizzato da un riferimento Sanity. */
export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source).auto("format").url();
}
