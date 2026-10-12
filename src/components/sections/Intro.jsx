import Img from "../ui/Img";
import Reveal from "../ui/Reveal";
import { Link } from "react-router-dom";
import { homeConfig } from "../../config/home.config";

export default function Intro() {
  const { intro } = homeConfig;
  // La frase del brief si divide in due: la seconda (la promessa) va in corsivo editoriale
  const [first, ...rest] = intro.statement.split(/(?<=\.)\s+/);

  return (
    <section className="relative overflow-x-clip py-24 md:py-40">
      <div className="container">
        <Reveal>
          <p className="label">({intro.kicker})</p>
        </Reveal>

        <div className="relative mt-10 md:mt-14">
          <Reveal>
            <h2 className="relative z-10 font-display text-[clamp(2.3rem,6.4vw,7.2rem)] leading-[0.98] tracking-[-0.02em] md:max-w-[84%]">
              {first} <em className="font-display italic">{rest.join(" ")}</em>
            </h2>
          </Reveal>

          {/* Ritratto: sovrapposto al bordo del testo, come le foto della hero */}
          <Reveal delay={150} className="mt-10 ml-auto w-[58%] rotate-[2deg] md:absolute md:right-0 md:top-[34%] md:mt-0 md:w-[23%] md:rotate-[3deg]">
            <figure>
              <Img
                publicId={intro.portrait?.imageId ?? null}
                alt={intro.portrait?.alt ?? "[DA COMPILARE] Ritratto"}
                aspect={[4, 5]}
                sizes="(min-width: 768px) 24vw, 58vw"
                className="!bg-accent"
              />
              <figcaption className="label mt-2">{intro.portrait?.caption ?? "[RITRATTO DA CARICARE]"}</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 md:mt-12 md:ml-[8.5%] max-w-md">
          <p className="leading-relaxed">{intro.body}</p>
          <Link
            to="/servizi"
            className="mt-6 inline-block rounded-full border border-primary px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-accent"
          >
            Scopri i servizi
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
