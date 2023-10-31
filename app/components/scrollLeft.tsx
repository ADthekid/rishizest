"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

const builtTitling = localFont({ src: "../builtTitling.woff" });

function ScrollLeft() {
	const [repetitions, setRepetitions] = useState(1); // Default number of repetitions

	useEffect(() => {
		// Function to update the number of repetitions based on viewport width
		function updateRepetitions() {
			const viewportWidth = window.innerWidth;
			let reps = Math.ceil(viewportWidth / 200) + 4;
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
		<div className="bottom-0 left-0 right-0 h-[70px] md:h-[90px] bg-darkzestygreen flex items-center whitespace-nowrap w-[100vw] overflow-hidden">
			<div className={`marquee-left ${builtTitling.className}`}>
				{textRepetitions.map((text, index) => (
					<p
						className="text-black text-[35px] md:text-[50px] inline-block mx-2 px-0"
						key={index}
					>
						{text}
						<img
							className="inline-block ml-4 w-[29px] md:w-[39px]"
							src="icon.png"
							width="39px"
							height="auto"
						></img>
					</p>
				))}
			</div>
		</div>
	);
}

export default ScrollLeft;
