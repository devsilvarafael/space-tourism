/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'body': ['Barlow Condensed', 'sans-serif'],
                'heading': ['Bellefair', 'sans-serif']
            },
            colors: {
                'dark': '#0B0D17',
                'light-blue': '#D0D6F9',
                'white': '#FFFFFF'
            },
            backgroundImage: {
                'home-sm': "url('./src/assets/home/background-home-mobile.jpg')",
                'home-md': "url('./src/assets/home/background-home-tablet.jpg')",
                'home-lg': "url('./src/assets/home/background-home-desktop.jpg')",
                'destination-sm': "url('./src/assets/destination/background-destination-mobile.jpg')",
                'destination-md': "url('./src/assets/destination/background-destination-tablet.jpg')",
                'destination-lg': "url('./src/assets/destination/background-destination-desktop.jpg')",
                'crew-sm': "url('./src/assets/crew/background-crew-mobile.jpg')",
                'crew-md': "url('./src/assets/crew/background-crew-tablet.jpg')",
                'crew-lg': "url('./src/assets/crew/background-crew-desktop.jpg')",
                'technology-sm': "url('./src/assets/technology/background-technology-mobile.jpg')",
                'technology-md': "url('./src/assets/technology/background-technology-tablet.jpg')",
                'technology-lg': "url('./src/assets/technology/background-technology-desktop.jpg')",
            },
            fontSize: {
                'heading-1': '9.37rem',
                'heading-2': '6.25rem',
                'heading-3': '3.5rem',
                'heading-4': '2rem',
                'heading-5': '1.75rem',
                'heading-6': '1.5rem',
                'heading': '5rem'
            }
        },
        screens: {
            'sm': "375px",
            'md': "768px",
            'lg': "1440px",
        },
    },
    plugins: [],
}