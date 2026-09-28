import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../config/site.config";
import Button from "../ui/Button";

export default function Footer() {
  const { pathname } = useLocation();
  // La CTA finale non ha senso nella pagina dei contatti stessa
  const showCta = pathname !== "/contatti";

  return (
    <footer className="bg-primary text-inverse">
      {showCta && (
        <div className="border-b border-inverse/15">
          <div className="container py-24 md:py-36">
            <h2 className="font-display text-display-xl whitespace-pre-line max-w-4xl">
              {siteConfig.closingCta.headline}
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button to="/contatti" variant="accent">
                {siteConfig.ctaPrimary.label} →
              </Button>
              <p className="text-inverse/70">{siteConfig.closingCta.text}</p>
            </div>
          </div>
        </div>
      )}

      <div className="container py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-inverse/70">
          <span className="font-display text-lg text-inverse">{siteConfig.name}</span>
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
