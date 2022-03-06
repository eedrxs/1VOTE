module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {}
    backgroundColor: theme => ({
      mblue: "#052272",
      bkblue: "#F5F7F9",
      bdblue: "#B8C3E0",
      ablue: "#DBE0ED",
      lemon: "#C1FF3D"
    }),
    fontFamily: {
      sans: ["Geometria"],
      mono: ['"Source Code Pro"']
    },
    textColor: {
      mblue: "#052272",
      white: "#FFFFFF"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
