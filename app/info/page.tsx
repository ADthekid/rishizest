"use client";
import React, { FormEvent } from "react";
import { Figtree } from "next/font/google";
import Proceed from "../components/procceed";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

const figtreeNormal = Figtree({
	weight: "600",
	subsets: ["latin"],
});

const Home = () => {
	const initState = {
		email: "",
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//const { cans } = data;

		await addDoc(collection(db, "customers"), {
			//cans: email,
		});
	};

	return (
		<div>
			<div className="flex flex-col items-center h-[calc(100vh-200px)] overflow-y-scroll">
				<h1 className="flex text-6xl pt-[7.5vh] pb-[5vh]">ADD SOME INFO</h1>
				<div className={`w-[75vw] text-2xl ${figtreeNormal.className}`}>
					<form onSubmit={handleSubmit} className="flex flex-col items-center">
						<div className="">
							<input
								required
								placeholder="FIRST"
								className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mr-[15px] w-[377.5px] mb-[25px]"
							></input>
							<input
								required
								placeholder="LAST"
								className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] w-[377.5px] mb-[25px]"
							></input>
						</div>
						<input
							required
							placeholder="(---) --- ----"
							className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[25px] w-[75vw] max-w-[770px]"
						></input>
						<input
							required
							placeholder="EMAIL"
							className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[25px] w-[75vw] max-w-[770px]"
						></input>
						<input
							required
							placeholder="ADDY"
							className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[25px] w-[75vw] max-w-[770px]"
						></input>
						<input
							placeholder="ADDY LINE TWO"
							className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[25px] w-[75vw] max-w-[770px]"
						></input>
						<div className="mb-[7.5vh]">
							<div className="">
								<input
									required
									placeholder="CITY"
									className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mr-[15px] w-[246.7px] mb-[25px]"
								></input>
								<input
									required
									placeholder="STATE"
									className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mr-[15px] w-[246.7px] mb-[25px]"
								></input>
								<input
									required
									placeholder="ZIP"
									className="border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] w-[246.7px] mb-[25px]"
								></input>
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
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
