import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1320px"
      }
    },
    extend: {
      colors: {
        brand: {
          saffron: "#d97706",
          navy: "#0c1f4f",
          gold: "#f5b84e",
          slate: "#0f172a"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(245, 184, 78, 0.25)",
        soft: "0 20px 60px rgba(11, 17, 33, 0.2)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(217,119,6,0.3), transparent 35%), radial-gradient(circle at 80% 30%, rgba(12,31,79,0.45), transparent 35%), radial-gradient(circle at 40% 80%, rgba(245,184,78,0.2), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
