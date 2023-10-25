import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				zestygreen: "#e6f50e",
				darkzestygreen: "#b0f50e",
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
