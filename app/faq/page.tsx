"use client";
import React, { useState } from "react";
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
	const [one, setOne] = useState("hidden");
	const [two, setTwo] = useState("hidden");
	const [three, setThree] = useState("hidden");
	const [four, setFour] = useState("hidden");
	const [five, setFive] = useState("hidden");
	const [six, setSix] = useState("hidden");
	const [seven, setSeven] = useState("hidden");
	const [eight, setEight] = useState("hidden");
	const [notOne, setnotOne] = useState("flex");
	const [notTwo, setnotTwo] = useState("flex");
	const [notThree, setnotThree] = useState("flex");
	const [notFour, setnotFour] = useState("flex");
	const [notFive, setnotFive] = useState("flex");
	const [notSix, setnotSix] = useState("flex");
	const [notSeven, setnotSeven] = useState("flex");
	const [notEight, setnotEight] = useState("flex");

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

	const handleFive = async () => {
		if (five === "hidden") {
			setFive("flex");
			setnotFive("hidden");
		} else {
			setFive("hidden");
			setnotFive("flex");
		}
	};

	const handleSix = async () => {
		if (six === "hidden") {
			setSix("flex");
			setnotSix("hidden");
		} else {
			setSix("hidden");
			setnotSix("flex");
		}
	};

	const handleSeven = async () => {
		if (seven === "hidden") {
			setSeven("flex");
			setnotSeven("hidden");
		} else {
			setSeven("hidden");
			setnotSeven("flex");
		}
	};

	const handleEight = async () => {
		if (eight === "hidden") {
			setEight("flex");
			setnotEight("hidden");
		} else {
			setEight("hidden");
			setnotEight("flex");
		}
	};

	return (
		<div className="h-[100dvh] flex-col justify-center items-center">
			<div className="flxed bg-darkzestygreen">
				<ScrollingBar />
			</div>
			<div
				className={`grad h-[calc(83.333333334dvh)] md:h-[calc(100vh-180px)] ${figtreeBold.className}`}
			>
				<div className="sect">
					<div>
						<div className="flex flex-col items-center h-[calc(83.333333334dvh)] md:h-[calc(100vh-180px)] overflow-y-scroll">
							<h1 className="flex text-7xl pt-[7.5dvh] pb-[4dvh] text-center text-white">
								FAQ
							</h1>
							<div
								className={`md:w-[770px] w-[75vw] min-w-[320px] pb-[calc(7.5dvh)] ${figtreeNormal.className}`}
							>
								<div className="faqBox">
									<button onClick={handleOne} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">WHAT IS RISHIZEST?</p>
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${one}`}
										>
											We&apos;re trying to shake things up as an independent
											energy drink company and make the most intense energy
											drink we legally can. Our flagship flavor, Ecological
											Terrorism, will be the first to launch, totaling 0
											calories and packed with all the energizing compounds we
											can get our hands on.
										</p>
									</button>
									<button onClick={handleEight} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												WHAT DOES ECOLOGICAL TERRORISM TASTE LIKE?
											</p>
											<svg
												className={`my-auto ml-auto flex-shrink-0 ${notEight}`}
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
												className={`my-auto ml-auto flex-shrink-0 ${eight}`}
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${eight}`}
										>
											We&apos;re not going to let on too much just yet, but
											it&apos;s a proprietary flavor with smooth, sweet
											undertones and a bit of a citrusy kick. Our goal is to
											blow everyone else out of the water with our perfectly
											balanced carbonation, flavor notes, and energizing
											compounds.
										</p>
									</button>
									<button onClick={handleTwo} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												HOW MUCH DOES EACH CAN COST?
											</p>
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${two}`}
										>
											The lowest value we&apos;re able to offer is $5 USD per
											can, tax and shipping included. We break even at that
											price point, but we&apos;re more than happy to do so if it
											means you&apos;ll be drinking Ecological Terrorism.
										</p>
									</button>
									<button onClick={handleThree} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												WHEN WILL I GET MY PREORDER?
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${three}`}
										>
											Approximately 3-6 months. That might sound like a while,
											but it&apos;s important that we take our time to ensure a
											high-quality product.
										</p>
									</button>
									<button onClick={handleFour} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												WILL RISHIZEST BE SAFE FOR CONSUMPTION?
											</p>
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${four}`}
										>
											Short answer, yes. RishiZest is being developed by a team
											of qualified food scientists, and not a single can will
											leave the production line without government quality
											assurance. Just make sure to drink responsibly. This level
											of extreme isn&apos;t for everybody.
										</p>
									</button>
									<button onClick={handleFive} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												WHO OWNS RISHIZEST? CAN I GET INVOLVED?
											</p>
											<svg
												className={`my-auto ml-auto flex-shrink-0 ${notFive}`}
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
												className={`my-auto ml-auto flex-shrink-0 ${five}`}
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${five}`}
										>
											RishiZest is legally a sole proprietorship of Soorya
											Ignatius. Any inquiries regarding involvement can be sent
											to support{"@"}rishizest{"."}
											&zwnj;com.
										</p>
									</button>
									<button onClick={handleSix} className="faq">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												WHERE CAN I FIND RISHIZEST?
											</p>
											<svg
												className={`my-auto ml-auto flex-shrink-0 ${notSix}`}
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
												className={`my-auto ml-auto flex-shrink-0 ${six}`}
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${six}`}
										>
											We&apos;re not in stores yet, but follow our Instagram
											@rishizest to stay in the loop.
										</p>
									</button>
									<button onClick={handleSeven} className="faqBottom">
										<div className="flex flex-row">
											<p className="mr-[10px] text-left">
												I HAVE A QUESTION THAT ISN&apos;T HERE.
											</p>
											<svg
												className={`my-auto ml-auto flex-shrink-0 ${notSeven}`}
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
												className={`my-auto ml-auto flex-shrink-0 ${seven}`}
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
										<p
											className={`faqText text-[20px] text-left mt-[10px] ${seven}`}
										>
											No worries! Contact us at support{"@"}rishizest{"."}
											&zwnj;com and we&apos;ll get back to you as soon as we
											can. All questions are welcome.
										</p>
									</button>
								</div>
							</div>
							<div className="relative bottom-[calc(7.5dvh)] sm:bottom-[calc(7.5dvh)] left-0 right-0 z-10">
								<div
									className={`flex items-center justify-center ${figtreeBold.className}`}
								>
									<a href="/">
										<button
											className="text-3xl bg-black px-[32px] py-[15px] rounded-full mt-[20px]  text-white"
											type="submit"
										>
											RESERVE
										</button>
									</a>
								</div>
							</div>
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
