/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '15px',
            base: '16px',
            lg: '18px',
            xl: '20px',
            '2xl': '24px',
            '3xl': '28px',
            '4xl': '32px',
            '5xl': '38px',
        },

        extend: {
            fontFamily: {
                Poppins: ['poppins', 'sans-serif'],
            },
            colors: {
                'regal-green': '#00302E',
                'regal-green-500': '#024F4B',
                'regal-yellow': '#E2B887',
                'regal-yellow-500': '#EBCCA8',
                'regal-blue': '#53E8F0',
                'regal-blue-500': '#A9E5F0',
                'regal-footer': '#0B0D17',
                'regal-white-400': '#FBFBFB',
                'regal-white-200': '#EFEFEF',
            },
        },
    },
    plugins: [],
};
