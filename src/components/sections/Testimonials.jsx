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
    <section className="pb-24 md:pb-40">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="label mb-6">({copy.kicker})</p>
            <h2 className="font-display text-display-lg whitespace-pre-line">{copy.headline}</h2>
          </Reveal>

          {!hasReal ? (
            // Stato vuoto: nessuna recensione finta, un solo pannello chiaramente segnaposto.
            <Reveal delay={120} className="col-span-12 md:col-span-6 md:col-start-7 md:mt-16">
              <div className="bg-muted px-8 py-12 md:px-12 md:py-16">
                <p className="font-display italic text-2xl md:text-3xl leading-snug">{copy.emptyNotice}</p>
              </div>
            </Reveal>
          ) : (
            // Scorrimento orizzontale con snap: nessuna libreria di carosello.
            <div className="col-span-12 -mx-6 md:mx-0 flex gap-6 overflow-x-auto px-6 md:px-0 pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.map((t, i) => (
                <Reveal
                  key={t._id || t.author + i}
                  delay={i * 80}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[31%]"
                >
                  <figure className={`h-full p-8 md:p-10 flex flex-col justify-between ${i % 2 ? "bg-accent" : "bg-muted"}`}>
                    <div>
                      {t.rating ? <Stars rating={t.rating} /> : null}
                      <blockquote className="mt-4 font-display italic text-2xl leading-snug">“{t.quote}”</blockquote>
                    </div>
                    <figcaption className="label mt-10 flex items-end justify-between gap-4">
                      <span>
                        <span className="block">{t.author}</span>
                        {t.role && <span className="block opacity-70">{t.role}</span>}
                      </span>
                      {t.sourceUrl ? (
                        <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                          {t.source}
                        </a>
                      ) : (
                        <span>{t.source}</span>
                      )}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
