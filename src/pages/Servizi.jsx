import { services as fallbackServices } from "../config/services.config";
import { useContent } from "../lib/useContent";
import { servicesQuery } from "../lib/queries";
import Img from "../components/ui/Img";

export default function Servizi() {
  const { data: services } = useContent(servicesQuery, fallbackServices);

  return (
    <section className="container py-32">
      <h1 className="font-display text-display-lg mb-16">Servizi</h1>
      <ul>
        {services.map((s) => (
          <li key={s.slug?.current || s.slug} className="border-b border-muted py-8 flex gap-8">
            <span className="text-secondary">{s.number}</span>
            <div>
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="text-secondary mt-2">{s.short}</p>
              {s.imageId && (
                <Img publicId={s.imageId} alt={s.title} aspect={[4, 3]} sizes="28rem" className="mt-4 w-full max-w-md" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
