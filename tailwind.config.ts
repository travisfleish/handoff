import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "400px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      "960": "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1420px",
      "3xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        navy: "#0D1226",
        blue: "#0000DC",
        lightBlue: "#95ECFD",
        brightGreen: "#E1FF67",
        lightGreen: "#18C971",
        green: "#047C40",
        lightPurple: "#C2D1FF",
        purple: "#4337A8",
        lightOrange: "#FFEBAF",
        orange: "#FA5D00",
        lightRed: "#F76B6A",
        red: "#C20000",
        black: "#000",
        lightGrey: "#F6F7F9",
        lavenderGrey: "#E7E7E9",
        white: "#ffffff",
        snow: "#FAFAFA",
      },
      fontFamily: {
        heading: [
          "KlarheitKurrent",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        body: [
          "RedHatText",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      spacing: {
        "4.25": "1.063rem",
        "7.5": "1.875rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "18.875": "4.719rem",
        "51": "12.75rem",
        "272": "68rem",
      },
      keyframes: {
        imageOpacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        opacity: "imageOpacity 300ms ease-in-out",
      },
      transitionTimingFunction: {
        "slide": "cubic-bezier(0.68, -0.2, 0.15, 0.98)",
        "bounce-brand": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
};

export default config;
