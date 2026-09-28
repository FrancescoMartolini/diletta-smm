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
    <section className="border-t border-muted py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <p className="text-sm text-accent mb-4">{copy.kicker}</p>
            <h2 className="font-display text-display-lg whitespace-pre-line">{copy.headline}</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to={copy.cta.path} className="link-underline text-sm whitespace-nowrap">
              {copy.cta.label}
            </Link>
          </Reveal>
        </div>

        {/* Elenco editoriale (non icon-card): tutta la riga è un link */}
        <ul className="border-b border-muted min-h-[12rem]">
          {!loading &&
            services.map((s, i) => (
              <li key={s.slug?.current || s.slug || s.title} className="border-t border-muted">
                <Reveal delay={i * 60}>
                  <Link
                    to="/servizi"
                    className="group grid grid-cols-12 items-baseline gap-x-6 py-6 md:py-8"
                  >
                    <span className="col-span-2 md:col-span-1 text-sm text-secondary">{s.number}</span>
                    <span className="col-span-9 md:col-span-6 font-display text-2xl md:text-4xl transition-colors duration-300 group-hover:text-accent">
                      {s.title}
                    </span>
                    <span className="hidden md:block md:col-span-4 text-sm text-secondary">{s.short}</span>
                    <span
                      aria-hidden="true"
                      className="col-span-1 justify-self-end text-xl transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
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
