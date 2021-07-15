module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // for adding custom backgroundImage
      backgroundImage: (theme) => ({
        "hero-image": "url('/img/main-bg.jpg')",
      }),
      colors: {
        // for adding custom colors
        brand: "#187BCD",
        navzColor: "#10696F",
        navyBlue: "#0F777D",
        navyBlueHover: "#10696F",
      },
      fontFamily: {
        // for adding custom fonts
        headline: "Roboto, sans-serif",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
