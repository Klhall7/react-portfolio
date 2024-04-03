/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                literata: ["Literata", "serif"], // Add this line
                neuton: ["Neuton", "serif"], // And this line
            },
            fontWeight: {
                200: "200",
                300: "300",
            },
        },
    },
    plugins: [],
};
