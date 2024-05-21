/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				sora: ["Sora", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(90deg, #F87516 16%, #5E11FF 43%)",
				"rev-custom-gradient":
					"linear-gradient(90deg, #5E11FF 30%, #F87516 100%)",
				"apply-custom-gradient":
					"linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
				"footer-custom-gradient":
					"linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
			},
		},
	},
	plugins: [],
};
