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
                secondary: "var(--secondary)"
            },
            fontFamily: {
                outfit: ["Outfit", "serif"]
            },
            boxShadow: {
                "1xl": 'rgb(204, 219, 232) 3px 3px 6px -4px inset'
            },

        },
    },
    plugins: [],
}
