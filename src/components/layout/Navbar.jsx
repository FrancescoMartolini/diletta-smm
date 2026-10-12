import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../../config/site.config";
import Logo from "../ui/Logo";

const linkClass = "text-xs tracking-[0.08em] uppercase";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-bg/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="flex h-[72px] items-center justify-between px-[clamp(1.25rem,2.8vw,2.5rem)]">
        <Link to="/" aria-label={`${siteConfig.name} — Home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Nav desktop/tablet: link essenziali, l'ultimo è il pill */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Principale">
          {siteConfig.nav.map((item) =>
            item.pill ? (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${linkClass} rounded-full border border-primary px-4 py-2 transition-colors duration-300 hover:bg-accent ${
                    isActive ? "bg-accent" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <Link key={item.path} to={item.path} className={`${linkClass} link-underline`}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile: testo "Menu" (più chiaro di tre lineette) */}
        <button
          className={`md:hidden ${linkClass} rounded-full border border-primary px-4 py-2`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>

      {/* Menu mobile dedicato: voci grandi in serif, non un semplice resize del desktop */}
      {open && (
        <nav id="mobile-nav" aria-label="Principale" className="md:hidden px-5 pb-10 pt-4 flex flex-col gap-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="font-display text-5xl leading-none py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
