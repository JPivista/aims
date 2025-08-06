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
            fontFamily: {
                'montserrat': ['var(--font-montserrat)', 'sans-serif'],
                'playfair': ['var(--font-playfair)', 'serif'],
            },
            colors: {
                // AIMS Brand Colors - 5 Main Colors Only
                'aims-purple': '#6E3299',
                'aims-orange': '#FF853A',
                'aims-teal': '#62C9B5',
                'aims-blue': '#2828A2',
                'aims-pink': '#FF98B5',
            },

            // Custom CSS variables
            backgroundColor: {
                'aims-purple': 'var(--color-aims-purple, #6E3299)',
                'aims-orange': 'var(--color-aims-orange, #FF853A)',
                'aims-teal': 'var(--color-aims-teal, #62C9B5)',
                'aims-blue': 'var(--color-aims-blue, #2828A2)',
                'aims-pink': 'var(--color-aims-pink, #FF98B5)',
            },

            textColor: {
                'aims-purple': 'var(--color-aims-purple, #6E3299)',
                'aims-orange': 'var(--color-aims-orange, #FF853A)',
                'aims-teal': 'var(--color-aims-teal, #62C9B5)',
                'aims-blue': 'var(--color-aims-blue, #2828A2)',
                'aims-pink': 'var(--color-aims-pink, #FF98B5)',
            },

            borderColor: {
                'aims-purple': 'var(--color-aims-purple, #6E3299)',
                'aims-orange': 'var(--color-aims-orange, #FF853A)',
                'aims-teal': 'var(--color-aims-teal, #62C9B5)',
                'aims-blue': 'var(--color-aims-blue, #2828A2)',
                'aims-pink': 'var(--color-aims-pink, #FF98B5)',
            },
        },
    },
    plugins: [],
}