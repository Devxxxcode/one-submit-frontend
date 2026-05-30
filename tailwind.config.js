/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Magistral", "sans-serif"], // Sets Magistral as default font
      primary: ["Magistral", "sans-serif"],
      body: ["Magistral", "sans-serif"],
    },
    extend: {
      fontWeight: {
        light: 300,
        book: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        "extra-bold": 800,
      },
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
      },
      colors: {
        background: "#050806",
        primary: "#22C55E",
        primarylight: "#E9FBEF",
        secondary: "#0E1511",
        card: "#FFFFFF",

        hint: "#605E5E",
        darkhint: "#B0B5BE",

        tertiary: "#131419",

        dark: "#22242F",
        light: "#ECF0F3",

        xdarkshadow: "#373C45",
        ydarkshadow: "#181920",

        xlightshadow: "#A3B1C6",
        ylightshadow: "#FFFFFF",

        accent: {
          DEFAULT: "#ac6b34",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
