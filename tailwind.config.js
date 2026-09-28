/** @type {import('tailwindcss').Config} */
// I colori puntano a variabili CSS in formato "R G B" (vedi src/styles/global.css)
// così Tailwind può applicare l'opacità: bg-bg/90, text-inverse/70, ecc.
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", md: "2.5rem" },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px", // max-width coerente anche oltre i 1440px
      },
    },
    extend: {
      colors: {
        bg: token("bg"),
        text: token("text"),
        primary: token("primary"),
        secondary: token("secondary"),
        accent: token("accent"),
        muted: token("muted"),
        inverse: token("inverse"), // testo/elementi su sfondo scuro (primary)
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        // type scale editoriale: titoli grandi su desktop
        "display-hero": ["clamp(2.5rem, 7.2vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
