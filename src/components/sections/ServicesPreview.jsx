import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import { homeConfig } from "../../config/home.config";
import { services as fallbackServices } from "../../config/services.config";
import { useContent } from "../../lib/useContent";
import { servicesQuery } from "../../lib/queries";

export default function ServicesPreview() {
  const { services: copy } = homeConfig;
  const { data: services, loading } = useContent(servicesQuery, fallbackServices);

  return (
    <section className="bg-muted py-24 md:py-40">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-14 md:mb-24">
          <Reveal>
            <p className="label mb-6">({copy.kicker})</p>
            <h2 className="font-display text-display-lg whitespace-pre-line">{copy.headline}</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to={copy.cta.path}
              className="inline-block rounded-full border border-primary px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-accent"
            >
              {copy.cta.label}
            </Link>
          </Reveal>
        </div>

        {/* Elenco editoriale: titoli giganti, descrizione sobria. Tutta la riga è un link. */}
        <ul className="border-b border-primary/20 min-h-[12rem]">
          {!loading &&
            services.map((s, i) => (
              <li key={s.slug?.current || s.slug || s.title} className="border-t border-primary/20">
                <Reveal delay={i * 60}>
                  <Link to="/servizi" className="group flex items-center gap-6 py-6 md:py-9">
                    <span className="flex-1 min-w-0">
                      <span className="block font-display text-[clamp(2rem,6.2vw,6.5rem)] leading-[1] tracking-[-0.02em] transition-all duration-500 ease-editorial group-hover:italic group-hover:translate-x-[1.2vw]">
                        {s.title}
                      </span>
                      <span className="mt-2 block text-sm md:hidden">{s.short}</span>
                    </span>
                    <span className="hidden md:block max-w-[16rem] text-sm leading-snug">{s.short}</span>
                    <span
                      aria-hidden="true"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary transition-colors duration-300 group-hover:bg-accent md:h-14 md:w-14"
                    >
                      <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-0.5">→</span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
