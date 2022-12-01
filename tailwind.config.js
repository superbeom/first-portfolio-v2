/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          80: "var(--primary-80)",
          DEFAULT: "var(--primary)",
        },
        background: "var(--background)",
        "background-light": "var(--background-light)",
        content: {
          10: "var(--content-10)",
          DEFAULT: "var(--content)",
        },
        "content-light": "var(--content-light)",
        "dark-background-50": "rgba(54, 54, 54, 0.5)",
        "white-light": "#F0F0F0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
