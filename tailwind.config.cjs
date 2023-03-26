/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  // 使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化；
  // darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
