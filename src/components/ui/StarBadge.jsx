import { Link } from "react-router-dom";
import { STAR_POINTS } from "../../lib/star";

/** Badge a stella rosa usato come CTA (stessa forma del badge in hero). */
export default function StarBadge({ to, href, children, className = "" }) {
  const cls = `group relative grid place-items-center text-center aspect-square ${className}`;
  const inner = (
    <>
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full transition-transform duration-700 ease-editorial group-hover:rotate-[30deg]"
      >
        <polygon points={STAR_POINTS} fill="rgb(var(--color-accent))" />
      </svg>
      <span className="relative text-primary">{children}</span>
    </>
  );
  return to ? (
    <Link to={to} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}
