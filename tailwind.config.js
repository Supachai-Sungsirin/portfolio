/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: 'class', // <--- สำคัญมากสำหรับสลับโหมดขาว/ดำ
      theme: {
        extend: {},
      },
      plugins: [],
    }