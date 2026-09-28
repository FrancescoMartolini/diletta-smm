import Reveal from "../ui/Reveal";
import { homeConfig } from "../../config/home.config";

export default function Intro() {
  const { intro } = homeConfig;

  return (
    <section className="border-t border-muted py-20 md:py-32">
      <div className="container grid grid-cols-12 gap-x-6 gap-y-6">
        <Reveal className="col-span-12 md:col-span-3">
          <p className="text-sm text-accent">{intro.kicker}</p>
        </Reveal>
        <div className="col-span-12 md:col-span-9 lg:col-span-8">
          <Reveal>
            <p className="font-display text-display-md">{intro.statement}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-prose text-secondary leading-relaxed">{intro.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
