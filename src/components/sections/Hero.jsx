import Img from "../ui/Img";
import { siteConfig } from "../../config/site.config";
import { homeConfig } from "../../config/home.config";
import { STAR_POINTS } from "../../lib/star";
import "./hero.css";

// Aspect e colore del placeholder per ciascuna foto (i colori restano nella palette)
const PHOTO_STYLE = {
  a: { aspect: [4, 5], sizes: "(min-width: 1024px) 22vw, 42vw", ph: "!bg-accent" },
  b: { aspect: [4, 5], sizes: "(min-width: 1024px) 11vw, 22vw", ph: "!bg-secondary !text-inverse" },
  c: { aspect: [4, 5], sizes: "(min-width: 1024px) 18vw, 36vw", ph: "!bg-muted" },
};

export default function Hero() {
  const { hero } = homeConfig;

  return (
    <section className="hero">
      <div className="hero__stage">
        {/* Il motto è l'h1: aria-label con descrizione completa, le righe sono solo visive */}
        <h1
          className="hero__title"
          aria-label={`${siteConfig.name}, ${siteConfig.tagline}: ${hero.headline.map((l) => l.text).join(" ")}`}
        >
          {hero.headline.map((line, i) => (
            <span key={line.text} className={`hero__line hero__line--${line.font}`} aria-hidden="true">
              <span style={{ "--d": `${150 + i * 140}ms` }}>{line.text}</span>
            </span>
          ))}
        </h1>

        {hero.photos.map((p, i) => {
          const st = PHOTO_STYLE[p.id];
          return (
            <figure key={p.id} className={`hero__photo hero__photo--${p.id}`} style={{ "--d": `${650 + i * 160}ms` }}>
              <Img
                publicId={p.imageId}
                alt={p.alt}
                aspect={st.aspect}
                sizes={st.sizes}
                priority={p.id === "a"}
                className={st.ph}
              />
              <figcaption>{p.caption}</figcaption>
            </figure>
          );
        })}

        {/* Bollini CTA: rosa = lavori, beige = servizi */}
        {hero.badges.map((b) => (
          <a key={b.id} href={b.href} className={`hero__badge hero__badge--${b.id}`}>
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <polygon points={STAR_POINTS} fill={`rgb(var(--color-${b.tone}))`} />
            </svg>
            <span>
              {b.line1}
              <br />
              {b.line2} ↓
            </span>
          </a>
        ))}
      </div>

      <div className="hero__foot">
        <p className="hero__about">
          {siteConfig.tagline}. {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
