"use client";
import React, { useState } from "react";
import { Figtree } from "next/font/google";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

const Home = () => {
	const [count, setCount] = useState(0);

	const findCount = async () => {};

	return (
		<div>
			<div className="flex flex-col items-center text-center justify-center h-[calc(100vh-200px)]">
				<h1 className="text-[50px] max-w-[75vw]">
					THANKS FOR RESERVING. WE'LL SEND YOU AN INVOICE FOR YOUR ORDER WHEN
					WE'RE READY.
				</h1>
			</div>
		</div>
	);
};

export default Home;
