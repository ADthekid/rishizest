import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "520px",

			md: "870px",

			lg: "1027px",

			xl: "1280px",

			"2xl": "1536px",
		},
		extend: {
			colors: {
				zestygreen: "#e6f50e",
				darkzestygreen: "#b0f50e",
				zestypurple: "#770cff",
				darkpurple: "#c400ff",
				lightpurple: "#780bff",
			},
			height: {
				calc: "calc(100vh-112px)",
			},
		},
	},
	plugins: [],
};
export default config;
