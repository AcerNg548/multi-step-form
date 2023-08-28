import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Ubuntu"],
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      marineBlue: "#02295a",
      purplishBlue: "#473dff",
      pastelBlue: "#473dff",
      lightBlue: "#bfe2fd",
      strawberryRed: "#ed3548",

      coolGray: "#9699ab",
      lightGray: "#d6d9e6",
      magnolia: "#f0f6ff",
      alabaster: "#fafbff",
      white: "#ffffff",
    },
    screens: {
      desktop: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      macAir: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      tablet: { max: "834px" },
      // => @media (max-width: 834px) { ... }

      mobile: { max: "375px" },
      // => @media (max-width: 375px) { ... }

      mobile1: { max: "360px" },
      // => @media (max-width: 360px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
