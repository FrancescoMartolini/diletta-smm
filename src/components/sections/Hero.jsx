import Button from "../ui/Button";
import Img from "../ui/Img";
import Reveal from "../ui/Reveal";
import { siteConfig } from "../../config/site.config";
import { homeConfig } from "../../config/home.config";

export default function Hero() {
  const { hero } = homeConfig;

  return (
    <section className="pt-10 md:pt-16 lg:pt-20 pb-20 md:pb-28">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:items-end">
          {/* Testo: parte da sinistra, non centrato */}
          <div className="col-span-12 lg:col-span-8 lg:pb-6">
            <p className="text-sm text-accent mb-6 md:mb-8">{hero.eyebrow}</p>

            <h1 className="font-display text-display-hero md:[font-size:clamp(3.5rem,9vw,5rem)] lg:[font-size:clamp(3rem,7.2vw,6.5rem)]" aria-label={hero.headlineLines.join(" ")}>
              {hero.headlineLines.map((line, i) => (
                <span key={line} className="line-mask" aria-hidden="true">
                  <span style={{ "--d": `${120 + i * 110}ms` }}>{line}</span>
                </span>
              ))}
            </h1>

            <Reveal delay={500} className="mt-8 md:mt-10 max-w-md">
              <p className="text-base md:text-lg text-secondary">{siteConfig.description}</p>
            </Reveal>

            <Reveal delay={650} className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button to={siteConfig.ctaPrimary.path}>{siteConfig.ctaPrimary.label} →</Button>
              <a href={hero.ctaSecondary.href} className="link-underline text-sm">
                {hero.ctaSecondary.label}
              </a>
            </Reveal>
          </div>

          {/* Immagine: su tablet sfalsata a destra, su desktop colonna stretta abbassata */}
          <Reveal
            delay={300}
            className="col-span-10 col-start-3 md:col-span-7 md:col-start-6 lg:col-span-4 lg:col-start-9 lg:mt-24"
          >
            <Img
              publicId={hero.imageId}
              alt={hero.imageAlt}
              aspect={[4, 5]}
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 55vw, 80vw"
              priority
            />
            <p className="mt-3 flex justify-between text-xs text-secondary">
              <span>{siteConfig.tagline}</span>
              <span>{siteConfig.location}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
