"use client";
import React from "react";
import { Figtree } from "next/font/google";

const figtreeBold = Figtree({
	weight: "900",
	subsets: ["latin"],
});

const figtreeNormal = Figtree({
	weight: "700",
	subsets: ["latin"],
});

const Home = () => {
	const cans = localStorage.getItem("cans");
	let amount = 0;
	if (cans) {
		amount = parseInt(cans) * 5;
	}

	return (
		<div>
			<div className="flex flex-col min-h-[550px] items-center md:justify-center pt-[7.5vh] md:py-[0px] items-center h-[calc(100vh-180px)] pb-[7.5vh] overflow-y-scroll">
				<h1 className="flex text-7xl pb-[4vh] text-center max-w-[75vw]">
					ORDER PLACED
				</h1>
				<div
					className={`md:w-[770px] w-[75vw] text-lg ${figtreeNormal.className}`}
				>
					<p className="indent-[30px] text-justify">
						Thank you for your order of {cans} cans. You are currently [position
						+ idk, 50?] in line. An invoice for {amount} dollars will be sent to
						your email as soon as your order is ready. In the meantime, if you’d
						like to stay informed about what we’re up to, make sure to find us
						on Instagram{" "}
						<a
							href="https://www.instagram.com/rishizest/"
							target="new"
							className="link"
						>
							@rishizest
						</a>
						.
					</p>
				</div>
				<div
					className={`flex items-center justify-center ${figtreeBold.className}`}
				>
					<a href="/">
						<button
							className="text-3xl bg-black px-[32px] py-[15px] rounded-full mt-[15px]"
							type="submit"
						>
							DONE
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
