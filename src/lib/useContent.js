import { useEffect, useState } from "react";
import { sanityClient, isSanityConfigured } from "./sanity";

/**
 * Recupera dati da Sanity con una query GROQ. Se Sanity non è ancora
 * configurato (o la richiesta fallisce), usa `fallbackData` — così il sito
 * funziona anche prima che l'admin sia collegato, con i dati di src/config/.
 */
export function useContent(query, fallbackData) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(isSanityConfigured);

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;
    sanityClient
      .fetch(query)
      .then((result) => {
        if (!cancelled && result) setData(result);
      })
      .catch((err) => {
        console.error("Errore nel recupero dati da Sanity:", err);
        // in caso di errore resta il fallback già impostato
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { data, loading };
}
