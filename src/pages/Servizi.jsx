import { useState } from "react";
import { services as fallbackServices } from "../config/services.config";
import { pagesConfig } from "../config/pages.config";
import { useContent } from "../lib/useContent";
import { servicesQuery } from "../lib/queries";
import Img from "../components/ui/Img";
import Reveal from "../components/ui/Reveal";

export default function Servizi() {
  const page = pagesConfig.servizi;
  const { data: services } = useContent(servicesQuery, fallbackServices);
  const [active, setActive] = useState(0);
  const current = services[active] || services[0];

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
          {services.map((s, i) => (
            <li
              key={s.slug?.current || s.slug || s.title}
              className="border-t border-primary/20"
              onMouseEnter={() => setActive(i)}
            >
              <Reveal delay={i * 60}>
                <div className="grid grid-cols-[3.75rem_1fr] md:grid-cols-[6rem_1fr] gap-x-4 py-8 md:py-11">
                  <span
                    className={`font-display text-[clamp(2rem,4vw,3.75rem)] leading-none transition-all duration-500 ease-editorial ${
                      i === active ? "italic" : ""
                    }`}
                  >
                    {s.number}
                  </span>
                  <div>
                    <h2 className="font-display text-[clamp(1.75rem,3vw,3rem)] leading-[1.05] tracking-[-0.01em]">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed">{s.short}</p>
                    {s.includes?.length > 0 && (
                      <p className="label mt-4 max-w-md opacity-70">{s.includes.join(" / ")}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
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
