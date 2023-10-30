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
	return (
		<div>
			<div className="flex flex-col md:justify-center pt-[7.5vh] md:py-[0px] items-center h-[calc(100vh-180px)] pb-[7.5vh] overflow-y-scroll">
				<h1 className="flex text-7xl pb-[4vh] text-center max-w-[75vw]">
					ORDER PLACED
				</h1>
				<div
					className={`md:w-[770px] w-[75vw] text-lg ${figtreeNormal.className}`}
				>
					<p className="indent-[30px] text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
						neque ornare aenean euismod elementum. Id diam vel quam elementum.
						Vitae tempus quam pellentesque nec nam. Nibh nisl condimentum id
						venenatis a condimentum vitae sapien. Consectetur libero id faucibus
						nisl tincidunt eget nullam non. Sit amet est placerat in egestas.
						Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae
						elementum.
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
