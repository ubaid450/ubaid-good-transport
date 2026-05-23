import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dff1ff",
          500: "#1677c7",
          600: "#0f62a8",
          700: "#0a4f88",
          900: "#082f51"
        },
        ink: "#122033"
      },
      boxShadow: {
        premium: "0 18px 55px rgba(8, 47, 81, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
