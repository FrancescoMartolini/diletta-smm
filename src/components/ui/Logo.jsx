import { siteConfig } from "../../config/site.config";

// Prefissa il base path (GitHub Pages) ai percorsi locali tipo "/brand/logo.svg".
const withBase = (p) =>
  p.startsWith("/") ? import.meta.env.BASE_URL + p.slice(1) : p;

/**
 * Logo del brand (file originale, mai ridisegnato).
 * - `inverse` per sfondi scuri (footer): inverte il logo scuro in chiaro via CSS.
 * - Senza `siteConfig.logo.src` mostra il nome in testo: è un SEGNAPOSTO, non il logo.
 */
export default function Logo({ inverse = false, className = "" }) {
  const { logo, name } = siteConfig;
  if (logo.src) {
    return (
      <img
        src={withBase(logo.src)}
        alt={name}
        height={logo.height}
        style={{ height: logo.height, width: "auto" }}
        className={`${inverse ? "invert" : ""} ${className}`}
      />
    );
  }
  return <span className={`text-sm tracking-tight ${className}`}>{name}</span>;
}
