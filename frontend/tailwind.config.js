module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        jerinTheme: {
          primary: "#F63E7B",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          bg1: "#f4f7fc",
          bg2: "#fff8f5",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
