import Reveal from "../ui/Reveal";
import { homeConfig } from "../../config/home.config";

/** Renderizza SOLO con homeConfig.stats.enabled = true (dati reali confermati). */
export default function Stats() {
  const { stats } = homeConfig;
  if (!stats.enabled || !stats.items.length) return null;

  return (
    <section className="bg-primary text-inverse py-20 md:py-28">
      <div className="container">
        <p className="text-sm text-inverse/70 mb-10">{stats.kicker}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.items.map((item, i) => (
            <Reveal key={item.label + i} delay={i * 90}>
              <p className="font-display text-display-lg">{item.value}</p>
              <p className="mt-2 text-sm text-inverse/70">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
