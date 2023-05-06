/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8462c9",
          "secondary": "#c60fc6",
          "accent": "#efdda7",
          "neutral": "#201221",
          "base-100": "#2B2744",
          "info": "#4983CA",
          "success": "#198041",
          "warning": "#E57F0B",
          "error": "#DF2647",
        },
      }
    ]
  }
}
