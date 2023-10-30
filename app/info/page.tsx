"use client";
import React, { FormEvent, useState } from "react";
import { Figtree } from "next/font/google";
import { useRouter } from "next/navigation";
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
	const router = useRouter();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const storedData = localStorage.getItem("cans");
		const cans = storedData ? JSON.parse(storedData) : null;
		const form = event.currentTarget as HTMLFormElement;
		const first = (form.elements.namedItem("first") as HTMLInputElement).value;
		const last = (form.elements.namedItem("last") as HTMLInputElement).value;
		const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
		const email = (form.elements.namedItem("email") as HTMLInputElement).value;
		const addyOne = (form.elements.namedItem("addyOne") as HTMLInputElement)
			.value;
		const addyTwo = (form.elements.namedItem("addyTwo") as HTMLInputElement)
			.value;
		const city = (form.elements.namedItem("city") as HTMLInputElement).value;
		const state = (form.elements.namedItem("state") as HTMLInputElement).value;
		const zip = (form.elements.namedItem("zip") as HTMLInputElement).value;
		const fullAddy =
			addyOne + addyTwo + ", " + city + ", " + state + ", " + zip;
		const fullName = first + " " + last;

		await addDoc(collection(db, "customers"), {
			address: fullAddy,
			cans: cans,
			email: email,
			name: fullName,
			phone: phone,
		});

		console.log(fullAddy);
		router.push("/legal");
	};

	return (
		<div>
			<div className="flex flex-col items-center h-[calc(100vh-180px)] overflow-y-scroll">
				<h1 className="flex text-7xl pt-[7.5vh] pb-[5vh] text-center max-w-[75vw]">
					ADD SOME INFO
				</h1>
				<div className={`w-[75vw] text-2xl ${figtreeNormal.className}`}>
					<form onSubmit={handleSubmit} className="flex flex-col items-center">
						<div className="max-w-[75vw]">
							<input
								id="first"
								name="first"
								required
								placeholder="FIRST"
								className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mr-[12.5px] lg:w-[377.5px] mb-[12.5px] w-[75vw]"
							></input>
							<input
								id="last"
								name="last"
								required
								placeholder="LAST"
								className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] lg:w-[377.5px] mb-[12.5px] w-[75vw]"
							></input>
						</div>
						<input
							id="phone"
							name="phone"
							required
							placeholder="(---) --- ----"
							className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[12.5px] w-[75vw] max-w-[770px]"
						></input>
						<input
							id="email"
							name="email"
							required
							placeholder="EMAIL"
							className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[12.5px] w-[75vw] max-w-[770px]"
						></input>
						<input
							id="addyOne"
							name="addyOne"
							required
							placeholder="ADDY"
							className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[12.5px] w-[75vw] max-w-[770px]"
						></input>
						<input
							id="addyTwo"
							name="addyTwo"
							placeholder="ADDY LINE TWO"
							className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[12.5px] w-[75vw] max-w-[770px]"
						></input>
						<div className="mb-[63px]">
							<div className="sm:flex w-[75vw] sm:justify-center pb-[2px]">
								<input
									id="city"
									name="city"
									required
									placeholder="CITY"
									className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mr-[12.5px] mb-[12.5px] w-[75vw] sm:w-[calc(25vw-10px)] sm:max-w-[248.3333333333px]"
								></input>
								<input
									id="state"
									name="state"
									required
									placeholder="STATE"
									className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mr-[12.5px] mb-[12.5px] w-[75vw] sm:w-[calc(25vw-10px)] sm:max-w-[248.3333333333px]"
								></input>
								<input
									id="zip"
									name="zip"
									required
									placeholder="ZIP"
									className="infoField border-[6px] rounded-xl border-darkzestygreen text-black bg-white text-xl px-[10px] py-[7px] mb-[12.5px] w-[75vw] sm:w-[calc(25vw-10px)] sm:max-w-[248.3333333333px]"
								></input>
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
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
