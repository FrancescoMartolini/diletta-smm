import Img from "../ui/Img";
import Reveal from "../ui/Reveal";
import { homeConfig } from "../../config/home.config";
import { portfolio as fallbackPortfolio } from "../../config/portfolio.config";
import { useContent } from "../../lib/useContent";
import { portfolioQuery } from "../../lib/queries";
import "./sections.css";

// Ogni formato ha rapporto e `sizes` propri; la posizione in griglia alterna sinistra/destra
const FORMATS = {
  vertical: { aspect: [4, 5], sizes: "(min-width: 768px) 34vw, 100vw", left: "md:col-start-2 md:col-span-4", right: "md:col-start-8 md:col-span-4" },
  horizontal: { aspect: [3, 2], sizes: "(min-width: 768px) 50vw, 100vw", left: "md:col-start-1 md:col-span-6", right: "md:col-start-7 md:col-span-6" },
  full: { aspect: [21, 9], sizes: "(min-width: 768px) 83vw, 100vw", left: "md:col-start-2 md:col-span-10", right: "md:col-start-2 md:col-span-10" },
};

export default function SelectedWork() {
  const { work } = homeConfig;
  const { data, loading } = useContent(portfolioQuery, fallbackPortfolio);
  const [lineA, lineB] = work.headline.split("\n");

  const hasRealWork = data && data.length > 0;
  const items = hasRealWork
    ? data
    : work.placeholders.map((p, i) => ({
        ...p,
        client: `[CLIENTE ${String(i + 1).padStart(2, "0")}]`,
        category: "[CATEGORIA]",
        year: "",
        imageId: null,
      }));

  return (
    <section id={work.id} className="scroll-mt-20 overflow-x-clip pt-24 pb-24 md:pt-40 md:pb-40">
      <div className="container">
        <Reveal>
          <p className="label">
            ({work.kicker}{hasRealWork ? ` — ${items.length}` : ""})
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-8 md:mt-12">
        <h2 className="big-title" aria-label={work.headline.replace("\n", " ")}>
          <span className="big-title__a" aria-hidden="true">{lineA}</span>
          <span className="big-title__b" aria-hidden="true">{lineB}</span>
        </h2>
      </Reveal>

      {/* La prima foto risale sul titolo (come nel collage della hero) */}
      <div className="container relative z-10 mt-12 md:-mt-[4.5vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-14 md:gap-y-16 min-h-[20rem]">
          {!loading &&
            items.map((item, i) => {
              const f = FORMATS[item.orientation] || FORMATS.vertical;
              const isRight = i % 2 === 1;
              const pos = isRight ? f.right : f.left;
              const offset = item.orientation !== "full" && isRight ? "md:mt-[9vw]" : "";
              const tilt = item.orientation !== "full" && isRight ? "md:rotate-[-1.5deg]" : "";
              return (
                <Reveal key={item._id || item.client + i} delay={(i % 2) * 100} className={`${pos} ${offset} ${tilt}`}>
                  <figure className="group">
                    <Img
                      publicId={item.imageId}
                      alt={item.client}
                      aspect={f.aspect}
                      sizes={f.sizes}
                      className={i % 3 === 0 ? "!bg-accent" : i % 3 === 1 ? "!bg-muted" : "!bg-secondary !text-inverse"}
                      imgClassName="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                    <figcaption className="label mt-3 flex justify-between gap-4">
                      <span>{item.client}</span>
                      <span>{[item.category, item.year].filter(Boolean).join(" · ")}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
        </div>
      </div>
    </section>
  );
}
