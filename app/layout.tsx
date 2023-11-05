import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Head from "next/head";
import ScrollingBar from "./components/scrollingBar";
import ScrollLeft from "./components/scrollLeft";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Reserve your RishiZest",
	description:
		"We're trying to shake things up as an independent energy drink company and make the most intense energy drink we legally can. Reserve a can of our flagship flavor today.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className="oveflow-y-auto oveflow-x-hidden max-h-[100dvh] max-w-[100vw]"
			lang="en"
		>
			<Head>
				<meta property="og:image" content="/opengraph-image.png" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</Head>
			<body>{children}</body>
		</html>
	);
}
