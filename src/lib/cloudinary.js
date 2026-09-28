import { cloudinaryConfig } from "../config/cloudinary.config";

/** true solo se il cloud name è impostato in .env */
export const isCloudinaryConfigured = Boolean(cloudinaryConfig.cloudName);

/**
 * Costruisce un URL Cloudinary con ottimizzazioni automatiche:
 * f_auto → AVIF/WebP quando il browser li supporta, q_auto → qualità adattiva.
 * Restituisce null se Cloudinary non è configurato o manca il public ID
 * (i componenti mostrano allora un placeholder visibile, non un'immagine rotta).
 *
 * @param {string} publicId - Public ID su Cloudinary
 * @param {object} opts - { width, height, crop, gravity }
 */
export function cldUrl(publicId, opts = {}) {
  if (!isCloudinaryConfigured || !publicId) return null;

  const { width, height, gravity = "auto" } = opts;
  const t = ["f_auto", "q_auto"];

  if (width && height) {
    // crop intelligente sul soggetto (g_auto)
    t.push(`c_${opts.crop || "fill"}`, `g_${gravity}`, `w_${width}`, `h_${height}`);
  } else if (width) {
    t.push("c_limit", `w_${width}`); // non ingrandisce mai oltre l'originale
  } else if (height) {
    t.push("c_limit", `h_${height}`);
  }

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${t.join(",")}/${publicId}`;
}

/**
 * srcset responsive. Se `ratio` (larghezza/altezza) è fornito, ogni variante
 * viene ritagliata con lo stesso rapporto, così il layout non "salta".
 */
export function cldSrcSet(publicId, widths = [480, 768, 1024, 1440, 1920], ratio) {
  const parts = widths
    .map((w) => {
      const url = cldUrl(publicId, { width: w, height: ratio ? Math.round(w / ratio) : undefined });
      return url ? `${url} ${w}w` : null;
    })
    .filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}
