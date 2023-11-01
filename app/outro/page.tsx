"use client";
import React from "react";
import { Figtree } from "next/font/google";
import ScrollingBar from "../components/scrollingBar";
import ScrollLeft from "../components/scrollLeft";

const figtreeBold = Figtree({
	weight: "900",
	subsets: ["latin"],
});

const figtreeNormal = Figtree({
	weight: "700",
	subsets: ["latin"],
});

const Home = () => {
	const cans = 5;
	const amount = 25;
	/*const cans = localStorage.getItem("cans");
	let amount = 0;
	if (cans) {
		amount = parseInt(cans) * 5;
	}*/

	return (
		<div className="h-[100dvh] flex-col justify-center items-center">
			<div className="flxed bg-darkzestygreen">
				<ScrollingBar />
			</div>
			<div
				className={`grad h-[calc(100dvh-140px)] sm:h-[calc(100dvh-140px)] md:h-[calc(100vh-180px)] ${figtreeBold.className}`}
			>
				<div className="sect">
					<div className="flex flex-col items-center md:justify-center pt-[7.5vh] md:py-[0px] items-center h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] pb-[7.5vh] overflow-y-scroll">
						<h1 className="flex text-7xl pb-[4vh] text-center max-w-[75vw] text-white">
							ORDER PLACED
						</h1>
						<div
							className={`md:w-[770px] w-[75vw] text-lg ${figtreeNormal.className}`}
						>
							<p className="indent-[30px] text-justify">
								Thank you for your order of {cans} cans. You are currently
								[position + idk, 50?] in line. An invoice for {amount} dollars
								will be sent to your email as soon as your order is ready. In
								the meantime, if you&apos;d like to stay informed about what
								we&apos;re up to, make sure to find us on Instagram&nbsp;
								<a
									href="https://www.instagram.com/rishizest/"
									target="new"
									className="social link"
								>
									@rishizest
								</a>
								.
							</p>
						</div>
						<div
							className={`flex items-center justify-center mb-[7.5dvh] ${figtreeBold.className}`}
						>
							<a href="/">
								<button
									className="text-3xl bg-black px-[32px] py-[15px] rounded-full mt-[15px] text-white"
									type="submit"
								>
									DONE
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="block fixed bottom-0 left-0 right-0 bg-darkzestygreen">
				<ScrollLeft />
			</div>
		</div>
	);
};

export default Home;
