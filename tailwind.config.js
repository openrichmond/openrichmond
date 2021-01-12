module.exports = {
  purge: ["./src/*.html", "./src/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "#00cccc",
          light: "#00a3a3",
          DEFAULT: "#005e5e",
          dark: "#005252",
          darkest: "#002929",
        },
        secondary: {
          lightest: "#0a85ff",
          light: "#0066cc",
          DEFAULT: "#00458b",
          dark: "#003366",
          darkest: "#001f3d",
        },
        trinary: {
          lightest: "#c2c2c2",
          light: "#adadad",
          DEFAULT: "#959595",
          dark: "#525252",
          darkest: "#1f1f1f",
        },
        info: {
          lightest: "#70ffff",
          light: "#47ffff",
          DEFAULT: "#00ffff",
          dark: "#00a3a3",
          darkest: "#005252",
        },
        warning: {
          lightest: "#fffaad",
          light: "#fff785",
          DEFAULT: "#fff44f",
          dark: "#ccbe00",
          darkest: "#8f8500",
        },
        danger: {
          lightest: "#ff99a1",
          light: "#ff4f5e",
          DEFAULT: "#ff0a1f",
          dark: "#f50014",
          darkest: "#8f000c",
        },
        cyan: {
          lightest: "#85ffd0",
          light: "#47ffb9",
          DEFAULT: "#0affa1",
          dark: "#00cc7e",
          darkest: "#00663f",
        },
        purple: {
          lightest: "#e485ff",
          light: "#d747ff",
          DEFAULT: "#ca0aff",
          dark: "#9000b8",
          darkest: "#60007a",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
