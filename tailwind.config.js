/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#fcb900",
        textRed: "#ff3131",
        footerBgColor: "#ebebf1",
        dropdownColor: "#f2f2f2",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};