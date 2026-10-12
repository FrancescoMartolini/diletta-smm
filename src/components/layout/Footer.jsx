import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../config/site.config";
import StarBadge from "../ui/StarBadge";
import Logo from "../ui/Logo";

export default function Footer() {
  const { pathname } = useLocation();
  // La CTA finale non ha senso nella pagina dei contatti stessa
  const showCta = pathname !== "/contatti";

  return (
    <footer className="bg-primary text-inverse">
      {showCta && (
        <div className="relative overflow-x-clip border-b border-inverse/15">
          <div className="container relative py-24 md:py-40">
            <h2 className="font-display text-[clamp(3.4rem,17vw,16rem)] md:text-[clamp(3.4rem,14vw,16rem)] leading-[0.9] tracking-[-0.03em] whitespace-pre-line">
              {siteConfig.closingCta.headline}
            </h2>
            <p className="mt-10 max-w-sm text-inverse/70">{siteConfig.closingCta.text}</p>

            {/* CTA principale: stesso badge a stella della hero, sul bordo del titolo */}
            <StarBadge
              to="/contatti"
              className="mt-10 w-36 md:absolute md:left-[45vw] md:bottom-[17%] md:mt-0 md:w-[clamp(9rem,16vw,18rem)] text-sm md:text-base"
            >
              {siteConfig.ctaPrimary.label}
              <br />→
            </StarBadge>
          </div>
        </div>
      )}

      <div className="container py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-inverse/70">
          <Logo inverse />
          <nav className="flex gap-6" aria-label="Footer">
            {siteConfig.nav.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-inverse transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-inverse transition-colors">
              {siteConfig.contact.email}
            </a>
            <a href={siteConfig.contact.instagram} className="hover:text-inverse transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-inverse/50">
          © {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
