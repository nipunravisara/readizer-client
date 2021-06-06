module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ["Abril Fatface", "sans-serif"],
      body: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-texture": "url('/src/assets/images/landing_background.png')",
        // "hero-texture": "url('/src/assets/svgs/hero_bg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
