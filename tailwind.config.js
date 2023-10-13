/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footerbg:
          "url('https://ik.imagekit.io/fluxy/CoffeeFolder/footer-bg.png?tr=w-1200')",
        clientbg:
          "url('https://ik.imagekit.io/fluxy/CoffeeFolder/client-bg.png?tr=w-1200')",
      },
      fontFamily: {
        raleway: ["Raleway", "sans"], // Replace 'Raleway' with the actual font name if needed
      },
    },
  },
  plugins: [],
};
