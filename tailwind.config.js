/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footerbg: "url('./images/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
