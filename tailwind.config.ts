import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/hero_bg.png')",
      },
      colors: {
        primary: {
          900: "#FF7239",
          100: "#FFF7F4",
          200: "#FFE3D7",
        },
        pink: {
          900: "#F24D5D",
          100: "#FEF5F6",
          200: "#FCDBDF",
        },
        voilet: {
          900: "#8E65FF",
          100: "#F8F7FF",
          200: "#F4F0FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
