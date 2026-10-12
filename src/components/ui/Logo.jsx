import { siteConfig } from "../../config/site.config";

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
        src={logo.src}
        alt={name}
        height={logo.height}
        style={{ height: logo.height, width: "auto" }}
        className={`${inverse ? "invert" : ""} ${className}`}
      />
    );
  }
  return <span className={`text-sm tracking-tight ${className}`}>{name}</span>;
}
