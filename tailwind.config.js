/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require("./src/styles/configs/tw-framework-colors"),
    require("./src/styles/configs/tw-framework-base"),
  ],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
