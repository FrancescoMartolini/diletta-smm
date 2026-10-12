// Stella a 18 punte (viewBox 0 0 100 100): forma del badge-CTA, colore da --color-accent.
export const STAR_POINTS = Array.from({ length: 36 }, (_, i) => {
  const r = i % 2 ? 43 : 50;
  const a = (Math.PI * 2 * i) / 36;
  return `${(50 + r * Math.sin(a)).toFixed(2)},${(50 - r * Math.cos(a)).toFixed(2)}`;
}).join(" ");
