import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        '--linearPrimarySecondary': 'linear-gradient(#c8b6c5, #5d5146)',
        '--linearPrimaryAccent': 'linear-gradient(#c8b6c5, #a5a288)',
        '--linearSecondaryAccent': 'linear-gradient(#5d5146, #a5a288)',
        '--radialPrimarySecondary': 'radial-gradient(#c8b6c5, #5d5146)',
        '--radialPrimaryAccent': 'radial-gradient(#c8b6c5, #a5a288)',
        '--radialSecondaryAccent': 'radial-gradient(#5d5146, #a5a288)',
      },
      colors: {
        transparent: "transparent",
        textColor: "#efeaee",
        backgroundColor: "#0a0709",
        primaryColor: "#c8b6c5",
        secondaryColor: "#5d5146",
        accentColor: "#a5a288",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    darkMode: "class",
  })],
};
export default config;
