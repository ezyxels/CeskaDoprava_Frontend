/** @type {import('tailwindcss').Config} */
// Todo

module.exports = {
  theme: {
    screens: {
      xs: "352px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1600px",
    },
    fontFamily: {
      sans: "var(--font-sans)",
      display: "var(--font-display)",
      serif: "var(--font-serif)",
      mono: "var(--font-mono)",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      animation: {
        spinner: "spin .6s linear infinite",
      },
      opacity: {
        15: "0.15",
        85: "0.85",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.035)",
        shadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.07), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.035)",
        none: "0 0 #000",
      },
      transitionTimingFunction: {
        "in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
};
