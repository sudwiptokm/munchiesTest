/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1AC073",
        "primary-light": "#2EBF91",
        secondary: "#F3BA00",
        caption: "#929292",
      },
    },
    plugins: [],
  },
};
