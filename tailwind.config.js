/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footerbg: "url('./images/footer-bg.png')",
        clientbg: "url('./images/client-bg.png')",
      },
      fontFamily: {
        raleway: ["Raleway", "sans"], // Replace 'Raleway' with the actual font name if needed
      },
    },
  },
  plugins: [],
};
