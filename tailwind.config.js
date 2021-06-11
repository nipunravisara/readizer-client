module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      background: "#F8F3EB",
      backgroundHover: "#F3ECE0",
    }),
    fontFamily: {
      title: ["Abril Fatface", "sans-serif"],
      body: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-texture": "url('/src/assets/images/landing_background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
