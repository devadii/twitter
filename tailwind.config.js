/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  images: {
    domains: ["https://lh3.googleusercontent.com/"],
  },

  plugins: [require("@tailwindcss/forms")],
};
