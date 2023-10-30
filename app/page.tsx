// pages/index.js
"use client";
import React, { FormEvent, useState } from "react";
import { Figtree } from "next/font/google";
import { useRouter } from "next/navigation";

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

	return (
		<div className="h-[calc(100vh-180px)] flex flex-col items-center justify-center">
			<div className="flex flex-col md:flex-row items-center">
				<h1 className="reserve md:text-[60px] text-[40px] text-center">
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
			<form onSubmit={handleSubmit} id="form">
				<fieldset>
					<div className="flex items-center justify-center overflow-x-scroll w-[100vw]] h-[100%]">
						<label htmlFor="oneCan" className="rectangle-container">
							<input
								className="radioButton"
								required
								onChange={handleRadioChange}
								type="radio"
								id="oneCan"
								name="amount"
							/>
							<label className="radioLabel">ONE CAN</label>
							<img className="cans" src="one.png" alt="one can"></img>
						</label>
						<label htmlFor="threeCans" className="rectangle-container">
							<input
								className="radioButton"
								required
								onChange={handleRadioChange}
								type="radio"
								id="threeCans"
								name="amount"
							/>
							<label className="radioLabel">THREE CANS</label>
							<img className="cans" src="three.png" alt="three cans"></img>
						</label>
						<label htmlFor="customCans" className="rectangle-container">
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
							<label className="radioLabel">CANS</label>
							<img className="cans" src="silhouette.png" alt="custom"></img>
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
	);
};

export default Home;
