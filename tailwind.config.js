/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['poppins', 'sans-serif'],
            },
            colors: {
                'regal-green': '#00302E',
                'regal-yellow': '#E2B887',
            },
        },
    },
    plugins: [],
};
