"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

const builtTitling = localFont({ src: "../builtTitling.woff" });

function ScrollingBar() {
	const [repetitions, setRepetitions] = useState(1); // Default number of repetitions

	useEffect(() => {
		// Function to update the number of repetitions based on viewport width
		function updateRepetitions() {
			const viewportWidth = window.innerWidth;
			let reps = Math.ceil(viewportWidth / 400);
			setRepetitions(reps);
		}

		// Add an event listener to update repetitions when the viewport size changes
		window.addEventListener("resize", updateRepetitions);

		// Initial setup
		updateRepetitions();

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", updateRepetitions);
		};
	}, []);

	// Generate an array of repetitions
	const textRepetitions = Array(repetitions).fill("INSPIRE YOUR ZEST");

	return (
		<div className="relative bottom-0 left-0 right-0 h-[100px] bg-darkzestygreen flex items-center justify-start overflow-hidden whitespace-nowrap">
			<div className={builtTitling.className}>
				{textRepetitions.map((text, index) => (
					<p className="text-black text-6xl inline-block mx-2 px-0" key={index}>
						{text}
						<img
							className="inline-block ml-4"
							src="icon.png"
							width="50px"
							height="auto"
						></img>
					</p>
				))}
			</div>
		</div>
	);
}

export default ScrollingBar;
