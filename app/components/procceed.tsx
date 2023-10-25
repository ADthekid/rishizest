import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

function Proceed() {
	return (
		<div className={`flex items-center justify-center ${figtree.className}`}>
			<button
				className="text-3xl bg-black px-[28px] py-[12px] rounded-full mt-[20px]"
				type="submit"
			>
				PROCEED
			</button>
		</div>
	);
}

export default Proceed;
