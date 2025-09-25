/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-dmSans)",
      secondary: "var(--font-barlow)",
    },
    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#0765A1",
        border: "#d7d7d7",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/eppstein-burg.jpg')",
        hero2: "url('/assets/img/hero/eppstein-burg1.jpg')",
        hero3: "url('/assets/img/hero/eppstein-burg2.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
