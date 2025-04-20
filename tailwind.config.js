module.exports = {
  content: [
    "./index.html",  // Your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if needed
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        grayBlue: "#344a6c",
        lightGray: "#e2e2e2",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      fontFamily: {
        mullish: ["Mulish", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};
