module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: "3px"
      },
      ringWidth: {
        DEFAULT: "1.8px"
      },
      fontSize: {
        xxs: "0.55rem",
        xsm: "0.7rem",
        sml: "0.8rem",
        msm: "0.85rem",
        sm: "0.95rem"
      },
      margin: {
        3: "6px",
        4: "10px"
      },
      padding: {
        1.5: "6px",
        2.5: "10px",
        7.5: "30px"
      },
      height: {
        2.5: "10px",
        30: "120px",
        "90/0": "90%",
        "95/0": "95%"
      },
      width: {
        2.5: "10px",
        "14/0": "14%",
        "15/0": "15%",
        "90/0": "90%",
        "22/1": "22rem"
      },
      inset: {
        0.5: "3px"
      },
      spacing: {
        "14/0": "14%",
        "15/0": "15%"
      },
      zIndex: {
        "-1": "-1"
      },
      screens: {
        xs: "400px"
      }
    },
    backgroundColor: theme => ({
      mblue: "#052272",
      bkblue: "#F5F7F9",
      bdblue: "#B8C3E0",
      ablue: "#DBE0ED",
      lemon: "#C1FF3D",
      dmblue: "#051d61",
      dablue: "#c9d0e0",
      white: "#FFFFFF",
      gray: "#6b7280",
      black: "#000000"
    }),
    borderColor: theme => ({
      bdblue: "#B8C3E0",
      mblue: "#052272",
      ablue: "#DBE0ED"
    }),
    textColor: {
      mblue: "#052272",
      bkblue: "#F5F7F9",
      white: "#FFFFFF"
    },
    fontFamily: {
      sans: ["Geometria", "sans-serif"],
      mono: ["Source Code Pro", "monospace"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
