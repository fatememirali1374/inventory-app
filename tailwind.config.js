module.exports = {
  content: ["./public/**/*.{html,js}",
"./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),],
}
