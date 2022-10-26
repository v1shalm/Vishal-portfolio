/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/public/static/hero-gradient.jpg')",
			},
		},
	},
	plugins: [],
};
