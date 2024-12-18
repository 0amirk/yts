/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        charm: ["Charm", "sans-serif"],
        mySoul: ["My-Soul", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        abril: ['"Abril Fatface"', "sans-serif"],
        oswald: ['"Oswald"', "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
