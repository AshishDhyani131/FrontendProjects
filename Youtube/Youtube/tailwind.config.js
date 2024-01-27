/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      boxShadow: {
        inset: "inset 0 2px 2px  rgb(229, 229, 229)",
      },
    },
  },
  plugins: [],
};
