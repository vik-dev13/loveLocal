import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#1E293B",
      white: "#fff",
      light: "#E2E8F0",
      "dark-40": "#27354c",
    },
    extend: {
      fontFamily: {
        mont: '"Montserrat"',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        header: "url('/images/bg-header.png')",
      },
    },
  },
  plugins: [],
};
export default config;
