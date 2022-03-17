module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocistock: "#FF9900",
        redBtn: "#FF4D00",
      },
      width: {
        searchBar: "473px",
        card: "198px",
      },
      height: {
        card: "274px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
