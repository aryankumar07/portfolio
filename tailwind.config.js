/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        highlight: "var(--highlight)",
        greyish: "var(--greyish)",
        "greyish-transparent": "var(--greyish-transparent)",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"]
      },
      boxShadow: {
        "1xl": 'rgb(204, 219, 232) 1px 1px 6px -5px inset',
        "2xl": 'rgb(204, 219, 232) 2px 3px 6px -5px inset'
      },

    },
  },
  plugins: [],
}
