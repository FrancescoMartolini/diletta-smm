import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { services as fallbackServices } from "../config/services.config";
import { pagesConfig } from "../config/pages.config";
import { useContent } from "../lib/useContent";
import { servicesQuery } from "../lib/queries";
import Img from "../components/ui/Img";
import Reveal from "../components/ui/Reveal";

export default function Servizi() {
  const page = pagesConfig.servizi;
  const { data: services } = useContent(servicesQuery, fallbackServices);
  const { hash } = useLocation();
  const slugOf = (s) => s.slug?.current || s.slug;
  const [active, setActive] = useState(0); // indice del servizio aperto, -1 = tutti chiusi
  const current = services[active] || services[0];

  // Arrivo da home (/servizi#slug): apre il servizio scelto e scorre fino a lì.
  useEffect(() => {
    if (!hash) return;
    const i = services.findIndex((s) => slugOf(s) === hash.slice(1));
    if (i < 0) return;
    setActive(i);
    const id = requestAnimationFrame(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(id);
  }, [hash, services]);

  return (
    <section className="container pt-14 pb-24 md:pt-20 md:pb-40">
      <Reveal>
        <p className="label">({page.kicker})</p>
      </Reveal>

      <div className="mt-6 grid grid-cols-12 items-end gap-x-6 gap-y-8">
        <h1 className="col-span-12 md:col-span-8 font-display uppercase text-[clamp(4.2rem,15vw,16rem)] leading-[0.82] tracking-[-0.03em]">
          {page.title}
        </h1>
        <Reveal delay={120} className="col-span-12 md:col-span-3 md:col-start-10">
          <p className="text-sm leading-relaxed">{page.intro}</p>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-28 grid grid-cols-12 gap-x-6">
        {/* Elenco: numeri in Garamond, titolo, descrizione e cosa comprende */}
        <ul className="col-span-12 md:col-span-7 border-b border-primary/20">
          {services.map((s, i) => {
            const open = i === active;
            const slug = slugOf(s);
            return (
              <li
                key={slug || s.title}
                id={slug}
                className="border-t border-primary/20 scroll-mt-28"
              >
                <Reveal delay={i * 60}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`panel-${slug}`}
                    onClick={() => setActive(open ? -1 : i)}
                    className="group grid w-full grid-cols-[3.75rem_1fr_auto] md:grid-cols-[6rem_1fr_auto] items-center gap-x-4 py-8 md:py-11 text-left"
                  >
                    <span
                      className={`font-display text-[clamp(2rem,4vw,3.75rem)] leading-none transition-all duration-500 ease-editorial ${
                        open ? "italic" : ""
                      }`}
                    >
                      {s.number}
                    </span>
                    <h2 className="font-display text-[clamp(1.75rem,3vw,3rem)] leading-[1.05] tracking-[-0.01em]">
                      {s.title}
                    </h2>
                    <span
                      aria-hidden="true"
                      className="grid h-11 w-11 place-items-center rounded-full border border-primary transition-colors duration-300 group-hover:bg-accent md:h-14 md:w-14"
                    >
                      <span className={`transition-transform duration-500 ease-editorial ${open ? "rotate-45" : ""}`}>+</span>
                    </span>
                  </button>

                  {/* Pannello: transizione di altezza con grid-rows, senza JS di misura */}
                  <div
                    id={`panel-${slug}`}
                    role="region"
                    aria-label={s.title}
                    className={`grid transition-[grid-template-rows] duration-500 ease-editorial motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-[3.75rem_1fr] md:grid-cols-[6rem_1fr] gap-x-4 pb-8 md:pb-11">
                        <div className="col-start-2">
                          <p className="max-w-md text-sm leading-relaxed">{s.short}</p>
                          {s.description && (
                            <p className="mt-3 max-w-md text-sm leading-relaxed">{s.description}</p>
                          )}
                          {s.includes?.length > 0 && (
                            <p className="label mt-4 max-w-md opacity-70">{s.includes.join(" / ")}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Immagine alta che segue la riga attiva (solo da tablet in su) */}
        <div className="hidden md:block md:col-span-4 md:col-start-9 self-start">
          <div className="sticky top-28">
            <Img
              key={current?.title}
              publicId={current?.imageId ?? null}
              alt={current ? `${current.title}: immagine` : "[DA COMPILARE]"}
              aspect={[3, 4]}
              sizes="(min-width: 768px) 30vw, 0px"
              className="!bg-accent"
            />
            <p className="label mt-3">{current?.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
