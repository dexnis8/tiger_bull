/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "bounce-left-right": "bounce 1s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "h-grad":
          "linear-gradient(172deg, rgba(2,0,36,1) 0%, rgba(233,233,233,1) 35%, rgba(62,81,85,1) 100%)",
      },
      colors: {
        primary: {
          100: "#E9E9E9",
          200: "#739EFC",
          300: "#3B3795",
        },
        black: {
          200: "#383838",
        },
      },
    },
  },
  plugins: [],
};
