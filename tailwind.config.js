const { nextui } = require("@nextui-org/react");
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg_contact-us-1": "url(/image/VFM-official-logo.webp)",
      },
      colors: {
        primary: "#025030",
      },
      fontFamily: {
        open: ["var(--font-open)"],
        mont: ["var(--font-mont)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
