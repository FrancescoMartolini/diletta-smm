import { Link } from "react-router-dom";

/**
 * Button/CTA unico e coerente in tutto il sito.
 * variant: "primary" | "ghost" | "accent" (accent = su sfondo scuro)
 */
export default function Button({ to, href, children, variant = "primary", onClick }) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition-colors duration-300 ease-editorial";
  const variants = {
    primary: "bg-primary text-bg hover:bg-accent",
    ghost: "border border-primary text-primary hover:border-accent hover:text-accent",
    accent: "bg-accent text-inverse hover:bg-inverse hover:text-primary",
  };
  const styles = `${base} ${variants[variant] || variants.primary}`;

  if (to) {
    // onClick ora è passato anche al Link (prima veniva ignorato:
    // il menu mobile non si chiudeva cliccando la CTA)
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
