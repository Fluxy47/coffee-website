/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        clientbg: "url('./images/client-bg.png')",
      },
    },
  },
  plugins: [],
};
