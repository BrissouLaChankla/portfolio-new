/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui, require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          primary: "#00dc82",
          "base-content": "#E2E8F0",
          "neutral-content": "#f4f4f5",
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#00dc82",
        },
      },
    ],
  },
};
