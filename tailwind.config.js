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
                'regal-green-500': '#024F4B',
                'regal-yellow': '#E2B887',
                'regal-yellow-500': '#EBCCA8',
                'regal-footer': '#0B0D17',
            },
        },
    },
    plugins: [],
};
