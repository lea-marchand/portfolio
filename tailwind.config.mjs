export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fbfbff",
      orange: "#FB8500",
      blackblue: "#023047",
      error: "#898989",
      bluegrey: "#4a6b7c",
    },
    fontFamily: {
      titre: ["/fonts/ExpletusSans-Medium.ttf"],
      texte: ["/fonts/hind/Hind-Regular.ttf"],
    },
    fontSize: {
      xs: ["14px", "20px"],
      sm: ["15px", "22px"],
      base: ["16px", "24px"],
      md: ["18px", "26px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["30px", "40px"],
      xxxl: ["36px", "48px"],
      xxxxl: ["40px", "50px"],
      jumbo: ["60px", "80px"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme("public/expletus-sans/ExpletusSans-Bold.ttf"),
          color: theme("colors.blackblue"),
          fontSize: theme("fontSize.xxxxl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontFamily: theme("public/expletus-sans/ExpletusSans-Bold.ttf"),
          color: theme("colors.blackblue"),
          fontSize: theme("fontSize.xxxl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          color: theme("colors.blackblue"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.regular"),
        },
        h4: {
          color: theme("colors.white"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.regular"),
        },
        h5: {
          color: theme("colors.white"),
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.regular"),
        },
      });
    },
  ],
};
