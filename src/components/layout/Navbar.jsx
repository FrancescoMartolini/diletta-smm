import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../config/site.config";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-bg/90 backdrop-blur border-b border-muted" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <NavLink to="/" className="font-display text-xl">
          {/* Logo esistente: sostituire con <img> quando fornito dalla cliente */}
          {siteConfig.name}
        </NavLink>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-text hover:text-accent transition-colors"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to={siteConfig.ctaPrimary.path}>{siteConfig.ctaPrimary.label} →</Button>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-6 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-text transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Menu mobile dedicato, non un semplice resize del desktop */}
      {open && (
        <nav className="md:hidden container pb-8 flex flex-col gap-6 text-lg">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Button to={siteConfig.ctaPrimary.path} onClick={() => setOpen(false)}>
            {siteConfig.ctaPrimary.label} →
          </Button>
        </nav>
      )}
    </header>
  );
}
