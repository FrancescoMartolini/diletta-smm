import { useState } from "react";
import { siteConfig } from "../config/site.config";
import { pagesConfig } from "../config/pages.config";
import { services as fallbackServices } from "../config/services.config";
import { useContent } from "../lib/useContent";
import { servicesQuery } from "../lib/queries";
import Reveal from "../components/ui/Reveal";

const field =
  "mt-1 block w-full border-0 border-b border-primary/30 bg-transparent py-3 text-base transition-colors duration-300 focus:border-primary";

export default function Contatti() {
  const page = pagesConfig.contatti;
  const { contact } = siteConfig;
  const { data: services } = useContent(servicesQuery, fallbackServices);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | unconfigured

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return; // honeypot anti-spam: i bot compilano il campo nascosto
    if (!contact.formEndpoint) {
      setStatus("unconfigured"); // nessun invio finto finché il servizio non è collegato
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const mail = (
    <a href={`mailto:${contact.email}`} className="link-underline">
      {contact.email}
    </a>
  );

  return (
    <section className="container pt-14 pb-24 md:pt-20 md:pb-40">
      <Reveal>
        <p className="label">({page.kicker})</p>
      </Reveal>

      <div className="mt-6 grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Titolo oversize + contatti diretti */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-between gap-14">
          <h1
            className="font-display uppercase text-[clamp(3.8rem,11vw,12rem)] leading-[0.86] tracking-[-0.03em]"
            aria-label={page.title.join(" ")}
          >
            {page.title.map((line) => (
              <span key={line} className="block" aria-hidden="true">
                {line}
              </span>
            ))}
          </h1>

          <dl className="grid gap-5 text-sm md:order-none order-last">
            <div>
              <dt className="label opacity-70">Email</dt>
              <dd className="mt-1">{mail}</dd>
            </div>
            <div>
              <dt className="label opacity-70">Instagram</dt>
              <dd className="mt-1">
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
                  Instagram
                </a>
              </dd>
            </div>
            {contact.linkedin && (
              <div>
                <dt className="label opacity-70">LinkedIn</dt>
                <dd className="mt-1">
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {siteConfig.name}
                  </a>
                </dd>
              </div>
            )}
            {siteConfig.location && (
              <div>
                <dt className="label opacity-70">Base</dt>
                <dd className="mt-1">{siteConfig.location}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* Form */}
        <Reveal delay={120} className="col-span-12 md:col-span-4 md:col-start-9">
          <h2 className="font-display italic text-3xl md:text-4xl">{page.formTitle}</h2>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6" noValidate={false}>
            <label className="block">
              <span className="label">Nome*</span>
              <input name="nome" required autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="label">Email*</span>
              <input type="email" name="email" required autoComplete="email" className={field} />
            </label>
            <label className="block">
              <span className="label">Azienda / Brand</span>
              <input name="azienda" autoComplete="organization" className={field} />
            </label>
            <label className="block">
              <span className="label">Servizio richiesto</span>
              <select name="servizio" defaultValue="" className={field}>
                <option value="">Seleziona</option>
                {services.map((s) => (
                  <option key={s.slug?.current || s.slug || s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Altro">Altro</option>
              </select>
            </label>
            <label className="block">
              <span className="label">Messaggio*</span>
              <textarea name="messaggio" rows={4} required className={`${field} resize-y`} />
            </label>

            {/* Honeypot: nascosto agli utenti e agli screen reader */}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-full bg-primary py-4 text-sm tracking-wide text-bg transition-colors duration-300 hover:bg-accent hover:text-primary disabled:opacity-60"
            >
              {status === "sending" ? "Invio in corso…" : `${page.submit} →`}
            </button>

            <p role="status" aria-live="polite" className="min-h-[3rem] text-sm leading-relaxed">
              {status === "sent" && page.messages.sent}
              {status === "unconfigured" && (
                <>
                  {page.messages.unconfigured} {mail}.
                </>
              )}
              {status === "error" && (
                <>
                  {page.messages.error} {mail}.
                </>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
