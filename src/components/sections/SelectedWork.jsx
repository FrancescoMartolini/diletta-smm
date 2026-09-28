import Img from "../ui/Img";
import Reveal from "../ui/Reveal";
import { homeConfig } from "../../config/home.config";
import { portfolio as fallbackPortfolio } from "../../config/portfolio.config";
import { useContent } from "../../lib/useContent";
import { portfolioQuery } from "../../lib/queries";

// Ogni formato ha larghezza di colonna, rapporto e `sizes` propri → composizione irregolare
const FORMATS = {
  vertical: { col: "md:col-span-5", aspect: [4, 5], sizes: "(min-width: 768px) 40vw, 100vw" },
  horizontal: { col: "md:col-span-7", aspect: [3, 2], sizes: "(min-width: 768px) 55vw, 100vw" },
  full: { col: "md:col-span-12", aspect: [16, 9], sizes: "100vw" },
};

export default function SelectedWork() {
  const { work } = homeConfig;
  const { data, loading } = useContent(portfolioQuery, fallbackPortfolio);

  const hasRealWork = data && data.length > 0;
  const items = hasRealWork
    ? data
    : work.placeholders.map((p, i) => ({
        ...p,
        client: `[DA COMPILARE] Progetto ${String(i + 1).padStart(2, "0")}`,
        category: "Categoria",
        year: "",
        imageId: null,
      }));

  return (
    <section id={work.id} className="scroll-mt-24 border-t border-muted py-20 md:py-32">
      <div className="container">
        <Reveal className="mb-12 md:mb-20">
          <p className="text-sm text-accent mb-4">{work.kicker}</p>
          <h2 className="font-display text-display-lg whitespace-pre-line">{work.headline}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-14 md:gap-y-20 min-h-[20rem]">
          {!loading &&
            items.map((item, i) => {
              const f = FORMATS[item.orientation] || FORMATS.vertical;
              // sfalsatura: i verticali in posizione dispari scendono → ritmo editoriale
              const offset = item.orientation !== "full" && i % 2 === 1 ? "md:mt-24" : "";
              return (
                <Reveal key={item._id || item.client + i} delay={(i % 2) * 100} className={`${f.col} ${offset}`}>
                  <figure className="group">
                    <Img
                      publicId={item.imageId}
                      alt={item.client}
                      aspect={f.aspect}
                      sizes={f.sizes}
                      imgClassName="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                    <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="font-display text-xl">{item.client}</span>
                      <span className="text-xs text-secondary">
                        {[item.category, item.year].filter(Boolean).join(" · ")}
                      </span>
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
