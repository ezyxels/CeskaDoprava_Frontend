/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: "hsla(var(--color-primary), <alpha-value>)",
        secondary: "hsla(var(--color-secondary), <alpha-value>)",
        tertiary: "hsla(var(--color-tertiary), <alpha-value>)",

        // Status colors
        success: "hsla(var(--color-success), <alpha-value>)",
        error: "hsla(var(--color-error), <alpha-value>)",
        warning: "hsla(var(--color-warning), <alpha-value>)",
        info: "hsla(var(--color-info), <alpha-value>)",

        // Text colors
        muted: "hsla(var(--color-muted), <alpha-value>)",
        rich: "hsla(var(--color-rich), <alpha-value>)",
        invert: "hsla(var(--color-invert), <alpha-value>)",

        // Background colors
        body: "hsla(var(--color-body), <alpha-value>)",
        "body-50": "hsla(var(--color-body-50), <alpha-value>)",
        "body-100": "hsla(var(--color-body-100), <alpha-value>)",
        "body-200": "hsla(var(--color-body-200), <alpha-value>)",

        // Default grays override
        gray: {
          50: "hsla(var(--color-gray-50), <alpha-value>)",
          100: "hsla(var(--color-gray-100), <alpha-value>)",
          200: "hsla(var(--color-gray-200), <alpha-value>)",
          300: "hsla(var(--color-gray-300), <alpha-value>)",
          400: "hsla(var(--color-gray-400), <alpha-value>)",
          500: "hsla(var(--color-gray-500), <alpha-value>)",
          600: "hsla(var(--color-gray-600), <alpha-value>)",
          700: "hsla(var(--color-gray-700), <alpha-value>)",
          800: "hsla(var(--color-gray-800), <alpha-value>)",
          900: "hsla(var(--color-gray-900), <alpha-value>)",
        },
      },
    },
  },
};
