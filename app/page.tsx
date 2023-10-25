// pages/index.js
"use client";
import React, { FormEvent, useState } from "react";
import { Figtree } from "next/font/google";
import Proceed from "./components/procceed";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

const Home = () => {
	const [selected, setSelected] = useState(0);

	//const handleChange = (event: FormEvent<HTMLFormElement>) => {
	//console.log(event.target.value);
	//setSelected(event.target.value);
	//};

	return (
		<div className="h-[calc(100vh-200px)] flex flex-col items-center justify-center overflow-y-scroll">
			<div className="flex items-center justify-center mb-[16px]">
				<h1 className="text-6xl">RESERVE YOUR</h1>
				<img className="ml-4" src="logo.png" width="380px" height="auto" />
			</div>
			<form>
				<fieldset>
					<div className="flex items-center justify-center">
						<div className="border-[6px] inline-block mx-2 rounded-xl border-darkzestygreen text-black bg-white text-xl w-[270px]">
							<input
								checked={selected === 1}
								type="radio"
								id="oneCan"
								name="amount"
								//onChange={handleChange}
							/>
							<label className="text-2xl">ONE CAN</label>
							<img className="cans mx-auto" src="one.png" alt="one can"></img>
						</div>
						<div className="border-[6px] inline-block mx-2 rounded-xl border-darkzestygreen text-black bg-white text-xl w-[270px]">
							<input
								checked={selected === 3}
								type="radio"
								id="twoCans"
								name="amount"
								//onChange={handleChange}
							/>
							<label className="text-2xl">THREE CANS</label>
							<img
								className="cans mx-auto"
								src="three.png"
								alt="three cans"
							></img>
						</div>
						<div className="border-[6px] inline-block mx-2 rounded-xl border-darkzestygreen text-black bg-white text-xl w-[270px]">
							<input
								checked={selected === 5}
								type="radio"
								id="customCans"
								name="amount"
								///onChange={handleChange}
							/>
							<label className="text-2xl">CUSTOM #</label>
							<img
								className="cans mx-auto"
								src="silhouette.png"
								alt="custom"
							></img>
						</div>
					</div>
					<div
						className={`flex items-center justify-center ${figtree.className}`}
					>
						<button
							className="text-3xl bg-black px-[28px] py-[12px] rounded-full mt-[20px]"
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
