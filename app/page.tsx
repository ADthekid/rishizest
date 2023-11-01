// pages/index.js
"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { Figtree } from "next/font/google";
import { useRouter } from "next/navigation";
import ScrollingBar from "./components/scrollingBar";
import ScrollLeft from "./components/scrollLeft";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

const figtreeNormal = Figtree({
	weight: "700",
	subsets: ["latin"],
});

const Home = () => {
	const [cans, setCans] = useState(0);
	const [selectedValue, setSelectedValue] = useState(5);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(cans);
		localStorage.setItem("cans", JSON.stringify(cans));
		router.push("/info");
	};

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		switch (event.target.id) {
			case "oneCan":
				setCans(1);
				break;
			case "threeCans":
				setCans(3);
				break;
			case "customCans":
				setCans(selectedValue);
				break;
		}
	};

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(parseInt(event.target.value));
	};

	const numbers: number[] = [];
	for (let i = 6; i <= 69; i++) {
		numbers.push(i);
	}

	useEffect(() => {
		const container: HTMLElement | null =
			document.querySelector(".scrollContainer");
		const middleColumn: HTMLElement | null = document.querySelector(
			".rectangle-container:nth-child(2)"
		);

		if (container && middleColumn) {
			container.scrollLeft =
				middleColumn.offsetLeft -
				container.clientWidth / 2 +
				middleColumn.clientWidth / 2;
		}
	}, []);

	return (
		<div className="h-[100dvh] flex-col justify-center items-center">
			<div className="flxed bg-darkzestygreen">
				<ScrollingBar />
			</div>
			<div
				className={`grad h-[calc(100dvh)] sm:h-[calc(100dvh-140px)] md:h-[calc(100vh-180px)] ${figtree.className}`}
			>
				<div className="sect">
					<div>
						<div className="h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] max-w-[100vw] flex flex-col items-center justify-center overflow-hidden w-[100%]">
							<div className="flex flex-col md:flex-row items-center">
								<h1 className="reserve md:text-[60px] text-[30px] text-center">
									RESERVE YOUR
								</h1>
								<img className="reserveImage" src="logo.png" />
							</div>
							<a
								className={`link text-[15px] md:text-[20px] leading-[15px] md:leading-[20px] text-center py-[5px] ${figtreeNormal.className}`}
								href="/faq"
							>
								(or get answers to some frequently asked questions)
							</a>
							<form onSubmit={handleSubmit} id="form" className="">
								<fieldset className="">
									<div className="flex items-center w-[100%] overflow-x-auto scrollContainer px-[20%] md:px-[0%]">
										<label htmlFor="oneCan" className="rectangle-container">
											<div className="flex items-center">
												<input
													className="radioButton"
													required
													onChange={handleRadioChange}
													type="radio"
													id="oneCan"
													name="amount"
												/>
												<label className="radioLabel" htmlFor="oneCan">
													ONE CAN
												</label>
											</div>
											<img className="cans" src="one.png" alt="one can"></img>
										</label>
										<label htmlFor="threeCans" className="rectangle-container">
											<div className="flex items-center">
												<input
													className="radioButton"
													required
													onChange={handleRadioChange}
													type="radio"
													id="threeCans"
													name="amount"
												/>
												<label className="radioLabel" htmlFor="threeCans">
													THREE CANS
												</label>
											</div>
											<img
												className="cans"
												src="three.png"
												alt="three cans"
											></img>
										</label>
										<label htmlFor="customCans" className="rectangle-container">
											<div className="flex items-center">
												<input
													className="radioButton"
													required
													onChange={handleRadioChange}
													type="radio"
													id="customCans"
													name="amount"
												/>
												<select
													id="mySelect"
													value={selectedValue}
													onChange={handleSelectChange}
												>
													<option value="5">5</option>
													{numbers.map((number: number) => (
														<option key={number} value={number}>
															{number}
														</option>
													))}
												</select>
												<label className="radioLabel" htmlFor="customCans">
													CANS
												</label>
											</div>
											<img
												className="cans"
												src="silhouette.png"
												alt="custom"
											></img>
										</label>
									</div>
									<div
										className={`flex items-center justify-center ${figtree.className}`}
									>
										<button
											className="text-3xl bg-black px-[32px] py-[15px] rounded-full"
											type="submit"
										>
											PROCEED
										</button>
									</div>
								</fieldset>
							</form>
						</div>
						<div className="sm:hidden block bg-darkzestygreen">
							<ScrollLeft />
						</div>
					</div>
				</div>
			</div>
			<div className="sm:block hidden fixed bottom-0 left-0 right-0 bg-darkzestygreen">
				<ScrollLeft />
			</div>
		</div>
	);
};

export default Home;
