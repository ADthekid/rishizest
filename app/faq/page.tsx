"use client";
import React, { useState } from "react";
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
	const [one, setOne] = useState("hidden");
	const [two, setTwo] = useState("hidden");
	const [three, setThree] = useState("hidden");
	const [four, setFour] = useState("hidden");
	const [notOne, setnotOne] = useState("flex");
	const [notTwo, setnotTwo] = useState("flex");
	const [notThree, setnotThree] = useState("flex");
	const [notFour, setnotFour] = useState("flex");

	const handleOne = async () => {
		if (one === "hidden") {
			setOne("flex");
			setnotOne("hidden");
		} else {
			setOne("hidden");
			setnotOne("flex");
		}
	};

	const handleTwo = async () => {
		if (two === "hidden") {
			setTwo("flex");
			setnotTwo("hidden");
		} else {
			setTwo("hidden");
			setnotTwo("flex");
		}
	};

	const handleThree = async () => {
		if (three === "hidden") {
			setThree("flex");
			setnotThree("hidden");
		} else {
			setThree("hidden");
			setnotThree("flex");
		}
	};

	const handleFour = async () => {
		if (four === "hidden") {
			setFour("flex");
			setnotFour("hidden");
		} else {
			setFour("hidden");
			setnotFour("flex");
		}
	};

	return (
		<div>
			<div className="flex flex-col items-center h-[calc(100vh-180px)] overflow-y-scroll">
				<h1 className="flex text-7xl pt-[7.5vh] pb-[4vh] text-center">FAQS</h1>
				<div
					className={`md:w-[770px] w-[75vw] min-w-[320px] pb-[calc(90px+7.5vh)] ${figtreeNormal.className}`}
				>
					<div className="faqBox">
						<button onClick={handleOne} className="faq">
							<div className="flex flex-row">
								<p className="mr-[10px] text-left">WHAT'S OUR MISSION?</p>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${notOne}`}
									id="svg"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400, 400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M30.901 122.296 C 23.876 130.760,34.816 144.136,111.386 220.706 L 200.000 309.320 288.614 220.706 C 365.184 144.136,376.124 130.760,369.099 122.296 C 357.251 108.019,359.139 106.863,277.976 178.125 C 236.868 214.219,201.779 243.750,200.000 243.750 C 198.221 243.750,163.132 214.219,122.024 178.125 C 40.861 106.863,42.749 108.019,30.901 122.296 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${one}`}
									id="svg"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400,400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M109.765 180.860 C 34.776 255.992,23.936 269.312,30.926 277.735 C 42.745 291.976,40.883 293.118,122.024 221.875 C 163.132 185.781,198.221 156.250,200.000 156.250 C 201.779 156.250,236.868 185.781,277.976 221.875 C 359.117 293.118,357.255 291.976,369.074 277.735 C 376.250 269.088,215.123 93.750,200.000 93.750 C 198.189 93.750,157.583 132.949,109.765 180.860 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</div>
							<p className={`faqText text-[20px] text-left mt-[10px] ${one}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ultrices neque ornare aenean euismod elementum. Id diam vel quam
								elementum. Vitae tempus quam pellentesque nec nam.
							</p>
						</button>
						<button onClick={handleTwo} className="faq">
							<div className="flex flex-row">
								<p className="mr-[10px] text-left">WHEN CAN I BUY?</p>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${notTwo}`}
									id="svg"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400, 400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M30.901 122.296 C 23.876 130.760,34.816 144.136,111.386 220.706 L 200.000 309.320 288.614 220.706 C 365.184 144.136,376.124 130.760,369.099 122.296 C 357.251 108.019,359.139 106.863,277.976 178.125 C 236.868 214.219,201.779 243.750,200.000 243.750 C 198.221 243.750,163.132 214.219,122.024 178.125 C 40.861 106.863,42.749 108.019,30.901 122.296 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${two}`}
									id="svg"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400,400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M109.765 180.860 C 34.776 255.992,23.936 269.312,30.926 277.735 C 42.745 291.976,40.883 293.118,122.024 221.875 C 163.132 185.781,198.221 156.250,200.000 156.250 C 201.779 156.250,236.868 185.781,277.976 221.875 C 359.117 293.118,357.255 291.976,369.074 277.735 C 376.250 269.088,215.123 93.750,200.000 93.750 C 198.189 93.750,157.583 132.949,109.765 180.860 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</div>
							<p className={`faqText text-[20px] text-left mt-[10px] ${two}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ultrices neque ornare aenean euismod elementum. Id diam vel quam
								elementum. Vitae tempus quam pellentesque nec nam.
							</p>
						</button>
						<button onClick={handleThree} className="faq">
							<div className="flex flex-row">
								<p className="mr-[10px] text-left">
									WHAT MAKES RISHIZEST DIFFERENT?
								</p>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${notThree}`}
									id="svg"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400, 400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M30.901 122.296 C 23.876 130.760,34.816 144.136,111.386 220.706 L 200.000 309.320 288.614 220.706 C 365.184 144.136,376.124 130.760,369.099 122.296 C 357.251 108.019,359.139 106.863,277.976 178.125 C 236.868 214.219,201.779 243.750,200.000 243.750 C 198.221 243.750,163.132 214.219,122.024 178.125 C 40.861 106.863,42.749 108.019,30.901 122.296 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${three}`}
									id="svg"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400,400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M109.765 180.860 C 34.776 255.992,23.936 269.312,30.926 277.735 C 42.745 291.976,40.883 293.118,122.024 221.875 C 163.132 185.781,198.221 156.250,200.000 156.250 C 201.779 156.250,236.868 185.781,277.976 221.875 C 359.117 293.118,357.255 291.976,369.074 277.735 C 376.250 269.088,215.123 93.750,200.000 93.750 C 198.189 93.750,157.583 132.949,109.765 180.860 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</div>
							<p className={`faqText text-[20px] text-left mt-[10px] ${three}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ultrices neque ornare aenean euismod elementum. Id diam vel quam
								elementum. Vitae tempus quam pellentesque nec nam.
							</p>
						</button>
						<button onClick={handleFour} className="faqBottom">
							<div className="flex flex-row">
								<p className="mr-[10px] text-left">CAN I INVEST?</p>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${notFour}`}
									id="svg"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400, 400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M30.901 122.296 C 23.876 130.760,34.816 144.136,111.386 220.706 L 200.000 309.320 288.614 220.706 C 365.184 144.136,376.124 130.760,369.099 122.296 C 357.251 108.019,359.139 106.863,277.976 178.125 C 236.868 214.219,201.779 243.750,200.000 243.750 C 198.221 243.750,163.132 214.219,122.024 178.125 C 40.861 106.863,42.749 108.019,30.901 122.296 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
								<svg
									className={`my-auto ml-auto flex-shrink-0 ${four}`}
									id="svg"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0, 0, 400,400"
								>
									<g id="svgg">
										<path
											id="path0"
											d="M109.765 180.860 C 34.776 255.992,23.936 269.312,30.926 277.735 C 42.745 291.976,40.883 293.118,122.024 221.875 C 163.132 185.781,198.221 156.250,200.000 156.250 C 201.779 156.250,236.868 185.781,277.976 221.875 C 359.117 293.118,357.255 291.976,369.074 277.735 C 376.250 269.088,215.123 93.750,200.000 93.750 C 198.189 93.750,157.583 132.949,109.765 180.860 "
											stroke="none"
											fill="#000000"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</div>
							<p className={`faqText text-[20px] text-left mt-[10px] ${four}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ultrices neque ornare aenean euismod elementum. Id diam vel quam
								elementum. Vitae tempus quam pellentesque nec nam.
							</p>
						</button>
					</div>
				</div>
			</div>
			<div className="fixed bottom-[calc(100px+7.5vh)] left-0 right-0 z-10">
				<div
					className={`flex items-center justify-center ${figtreeBold.className}`}
				>
					<a href="/">
						<button
							className="text-3xl bg-black px-[32px] py-[15px] rounded-full mt-[20px]"
							type="submit"
						>
							RESERVE
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
