import { cldUrl, cldSrcSet } from "../../lib/cloudinary";

/**
 * Immagine responsive servita da Cloudinary.
 * - srcset multi-risoluzione, formato automatico (AVIF/WebP), lazy loading
 * - `aspect` [larghezza, altezza] riserva lo spazio → nessun layout shift
 * - priority: solo per l'immagine principale above-the-fold (LCP)
 * - se manca il public ID o Cloudinary non è configurato → placeholder visibile
 */
export default function Img({
  publicId,
  alt,
  aspect = [4, 5],
  sizes = "100vw",
  widths,
  priority = false,
  className = "",
  imgClassName = "",
}) {
  const [aw, ah] = aspect;
  const ratio = aw / ah;
  const src = cldUrl(publicId, { width: 1200, height: Math.round(1200 / ratio) });
  const srcSet = cldSrcSet(publicId, widths, ratio);

  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-end bg-muted/60 border border-dashed border-secondary/40 p-4 text-xs text-secondary ${className}`}
        style={{ aspectRatio: `${aw} / ${ah}` }}
      >
        [IMMAGINE DA CARICARE]
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-muted ${className}`} style={{ aspectRatio: `${aw} / ${ah}` }}>
      <img
        src={src}
        srcSet={srcSet || undefined}
        sizes={sizes}
        alt={alt}
        width={aw * 100}
        height={ah * 100}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // attributo minuscolo: React 18 non riconosce ancora `fetchPriority`
        {...(priority ? { fetchpriority: "high" } : {})}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
