/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     'montserrat': ['var(--font-montserrat)', 'sans-serif'],
            //     'playfair': ['var(--font-playfair)', 'serif'],
            // },
            colors: {
                // AIMS Brand Colors - 5 Main Colors Only
                aimsPurple: '#6E3299',
                aimsOrange: '#FF853A',
                aimsTeal: '#62C9B5',
                aimsBlue: '#2828A2',
                aimsPink: '#FF98B5',
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'marquee2': 'marquee2 25s linear infinite',
                'pause': 'pause 0s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                pause: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },

            // Custom CSS variables
            // backgroundColor: {
            //     aimsPurple: 'var(--color-aims-purple, #6E3299)',
            //     aimsOrange: 'var(--color-aims-orange, #FF853A)',
            //     aimsTeal: 'var(--color-aims-teal, #62C9B5)',
            //     aimsBlue: 'var(--color-aims-blue, #2828A2)',
            //     aimsPink: 'var(--color-aims-pink, #FF98B5)',
            // },

            // textColor: {
            //     aimsPurple: 'var(--color-aims-purple, #6E3299)',
            //     aimsOrange: 'var(--color-aims-orange, #FF853A)',
            //     aimsTeal: 'var(--color-aims-teal, #62C9B5)',
            //     aimsBlue: 'var(--color-aims-blue, #2828A2)',
            //     aimsPink: 'var(--color-aims-pink, #FF98B5)',
            // },

            // borderColor: {
            //     aimsPurple: 'var(--color-aims-purple, #6E3299)',
            //     aimsOrange: 'var(--color-aims-orange, #FF853A)',
            //     aimsTeal: 'var(--color-aims-teal, #62C9B5)',
            //     aimsBlue: 'var(--color-aims-blue, #2828A2)',
            //     aimsPink: 'var(--color-aims-pink, #FF98B5)',
            // },
        },
    },
    plugins: [],
}