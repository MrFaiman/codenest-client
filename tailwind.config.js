/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		spacing: {
			navbar: "3.5rem",
		},
		colors: {
			navbar: "#F7F7F7",
			blue: "#0085FF",
			dark: "#1E1E1E",
			secondary_dark: "#10141b",
		},
		extend: {},
	},
	plugins: [require("@headlessui/tailwindcss")],
};
