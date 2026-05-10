import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef8ef",
          100: "#d9edda",
          300: "#91c28d",
          500: "#3e7a35",
          600: "#2f6b34",
          700: "#21552e",
          800: "#173f27",
          950: "#092417"
        },
        olive: "#7b9441",
        sunset: "#e88922",
        cream: "#fbf7ec",
        sand: "#efe4cc"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(25, 70, 39, 0.14)",
        glass: "0 24px 80px rgba(18, 61, 34, 0.2)",
        insetSoft: "inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(20,65,38,0.08)"
      },
      borderRadius: {
        organic: "2rem"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        drift: "drift 18s linear infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(-1deg)" },
          "50%": { transform: "translate3d(0, -16px, 0) rotate(1deg)" }
        },
        drift: {
          "0%": { transform: "translate3d(-12vw, 0, 0) rotate(0deg)", opacity: "0" },
          "10%, 90%": { opacity: "0.65" },
          "100%": { transform: "translate3d(112vw, -24px, 0) rotate(360deg)", opacity: "0" }
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.75" },
          "50%": { transform: "scale(1.08)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
