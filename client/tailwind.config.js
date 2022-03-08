module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        mblue: "#052272",
        bkblue: "#F5F7F9",
        bdblue: "#B8C3E0",
        ablue: "#DBE0ED",
        lemon: "#C1FF3D"
      }),
      borderColor: theme => ({
        bdblue: "#B8C3E0"
      }),
      textColor: {
        mblue: "#052272",
        white: "#FFFFFF"
      },
      borderWidth: {
        3: "3px"
      },
      fontSize: {
        sml: ".8rem"
      },
      margin: {
        3: "6px"
      }
    },
    fontFamily: {
      sans: ["Geometria"],
      mono: ['"Source Code Pro"']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
