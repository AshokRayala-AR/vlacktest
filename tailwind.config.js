/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        customBeige: "rgba(252, 217, 128, 1)",
        customHomeBack: "rgba(28,30,83,255)",
        projectsprimarygradient1: "rgba(244,240,231,255)",
        projectsprimarygradient2: "rgba(189,213,231,255)",
        projecttransparantcard: "rgba(28, 30, 83, 0.62)",
      },
      backgroundImage: {
        "projects-primary": "url('/src/assets/projects-primary.jpg')",
        "projects-secondary": "url('/src/assets/projects-secondary.webp')",
      },
    },
  },
  plugins: [],
};