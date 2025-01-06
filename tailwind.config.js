const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#EAE0C8",
        accent: "#536878",
      },
      fontFamily: {
        sans: ["CustomFont", "sans-serif"], // Add your custom font
        bebas: ["CustomFont"], // Alias for direct usage
        nohemi: ["Nohemi", "sans-serif"],
        generalsans: ["General Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    addVariablesForColors, // Add the custom plugin
  ],
};

// Custom Plugin: Adds each Tailwind color as a global CSS variable (e.g., var(--gray-200)).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
