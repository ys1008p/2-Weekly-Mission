/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./shared/Page.jsx"],
  theme: {
    extend: {
      spacing: {},
      colors: {
        "u-primary": "#6d6afe",
        "u-red": "#ff5b56",
        "u-skyblue": "#f0f6ff",
        "u-black": "#111322",
        "u-white": "#ffffff",
        "u-gray-1": "#3e3e43",
        "u-gray-2": "#9fa6b2",
        "u-gray-3": "#ccd5e3",
        "u-gray-4": "#e7effb",
        "u-gray-5": "#f0f6ff",
      },
      backgroundImage: {
        "gradient-purple-skyblue":
          "linear-gradient(135deg,#6d6afe 0%,#6ae3fe 100%)",
        "gradient-purple-orange":
          "linear-gradient(119deg, #6d6afe 0%, #ff9f9f 100%)",
        "gradient-orange-blue":
          "linear-gradient(117deg,#fe8a8a 2.29%,#a4ceff 100%)",
        "gradient-blue-yellow":
          "linear-gradient(304deg, #6fbaff 0%, #ffd88b 100%)",
        "gradient-blue-gray":
          "linear-gradient(133deg, #2945c7 0%, #dbe1f8 100%)",
        "gradient-red-blue":
          "linear-gradient(310deg, #fe578f 0%, #68e8f9 100%)",
      },
    },
  },
  plugins: [],
};
