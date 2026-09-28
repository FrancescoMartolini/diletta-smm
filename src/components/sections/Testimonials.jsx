import Reveal from "../ui/Reveal";
import Stars from "../ui/Stars";
import { homeConfig } from "../../config/home.config";
import { testimonials as fallbackTestimonials } from "../../config/testimonials.config";
import { useContent } from "../../lib/useContent";
import { testimonialsQuery } from "../../lib/queries";

export default function Testimonials() {
  const { testimonials: copy } = homeConfig;
  const { data, loading } = useContent(testimonialsQuery, fallbackTestimonials);

  if (loading) return null;
  const hasReal = data && data.length > 0;

  return (
    <section className="border-t border-muted py-20 md:py-32">
      <div className="container">
        <Reveal className="mb-12 md:mb-16">
          <p className="text-sm text-accent mb-4">{copy.kicker}</p>
          <h2 className="font-display text-display-lg whitespace-pre-line">{copy.headline}</h2>
        </Reveal>

        {!hasReal ? (
          // Stato vuoto: nessuna recensione finta. Un unico avviso chiaro,
          // non tre card fittizie che sembrerebbero recensioni vere.
          <Reveal>
            <div className="border border-dashed border-secondary/40 bg-muted/40 px-6 py-14 text-center">
              <p className="text-sm text-secondary max-w-sm mx-auto">{copy.emptyNotice}</p>
            </div>
          </Reveal>
        ) : (
          // Galleria a scorrimento orizzontale con snap: nessuna libreria di carosello.
          <div className="-mx-6 md:mx-0 flex gap-6 overflow-x-auto px-6 md:px-0 pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {data.map((t, i) => (
              <Reveal
                key={t._id || t.author + i}
                delay={i * 80}
                className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[31%]"
              >
                <figure className="h-full border border-muted p-8 flex flex-col justify-between">
                  <div>
                    <Stars rating={t.rating} />
                    <blockquote className="mt-4 font-display text-xl leading-snug">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 flex items-center justify-between gap-4 text-sm">
                    <span>
                      <span className="block">{t.author}</span>
                      {t.role && <span className="block text-secondary">{t.role}</span>}
                    </span>
                    {t.sourceUrl ? (
                      <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-secondary">
                        {t.source}
                      </a>
                    ) : (
                      <span className="text-secondary">{t.source}</span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
