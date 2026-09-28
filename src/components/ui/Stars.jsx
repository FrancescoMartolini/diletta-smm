/** Stelline disegnate a mano (nessun logo/marchio esterno), 1-5. */
export default function Stars({ rating }) {
  if (!rating) return null;
  return (
    <div className="flex gap-0.5" aria-label={`Valutazione ${rating} su 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.5l2.9 6.2 6.7.7-5 4.6 1.4 6.7-6-3.5-6 3.5 1.4-6.7-5-4.6 6.7-.7L12 2.5z"
            fill={i < rating ? "rgb(var(--color-accent))" : "none"}
            stroke={i < rating ? "rgb(var(--color-accent))" : "rgb(var(--color-secondary))"}
            strokeWidth="1.2"
          />
        </svg>
      ))}
    </div>
  );
}
