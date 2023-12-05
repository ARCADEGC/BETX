/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        extend: {
            colors: {
                signature: '#00F0FFFF',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
