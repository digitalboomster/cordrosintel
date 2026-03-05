/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cordros: {
          bg: "#06060a",
          surface: "#0c0c12",
          surfaceElevated: "#12121a",
          border: "rgba(255,255,255,0.06)",
          borderHover: "rgba(255,255,255,0.1)",
          accent: "#22d3ee",
          accentMuted: "rgba(34,211,238,0.15)",
          gold: "#fbbf24",
          goldMuted: "rgba(251,191,36,0.12)",
          muted: "#71717a",
          text: "#fafafa",
          textSecondary: "#a1a1aa",
          textTertiary: "#71717a",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-lg": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "display-sm": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(34, 211, 238, 0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.03), 0 4px 24px -4px rgba(0,0,0,0.4)",
        cardHover: "0 1px 0 0 rgba(255,255,255,0.05), 0 8px 32px -8px rgba(0,0,0,0.5)",
        feature: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px -8px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        mesh: "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(34,211,238,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 20% 100%, rgba(251,191,36,0.04) 0%, transparent 50%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.25s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
