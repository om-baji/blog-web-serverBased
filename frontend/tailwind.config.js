/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    fontFamily : {
      spaceGrotesk : ["static/SpaceGrotesk-Bold.ttf","SpaceGrotesk-SemiBold", "SpaceGrotesk-Bold", "san-serif"]
    },
    extend: {},
  },
  plugins: [],
}

