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
			<div className="flex flex-col items-center min-h-[550px] h-[calc(100vh-180px)] overflow-y-scroll pb-[2px]">
				<h1 className="flex text-7xl pt-[7.5vh] pb-[4vh] text-center max-w-[75vw] ">
					LEGAL STUFF
				</h1>
				<div
					className={`md:w-[770px] w-[75vw] text-lg pb-[calc(60px+7.5vh)] ${figtreeNormal.className}`}
				>
					<p className="legalP pb-[.5vh] indent-[30px]">
						This agreement is entered into between RishiZest, an energy drink
						company owned and operated as a sole proprietorship by Soorya
						Ignatius, and the customer. By participating in a preorder
						arrangement with RishiZest, you explicitly agree to the terms and
						conditions outlined below.
					</p>
					<p className="legalP pb-[.5vh] indent-[30px]">
						RishiZest refers to the preorder as a reservation for the purchase
						of its product. It&apos;s important to note that placing a preorder
						does not create a legal obligation to purchase the product. However,
						upon product readiness, RishiZest will issue an invoice for the
						appropriate amount to the customer.
					</p>
					<p className="legalP pb-[.5vh] indent-[30px]">
						RishiZest reserves the right to make modifications to preorders or
						cancel them entirely. Additionally, the company may need to delay
						the delivery of products beyond the originally projected timeline.
						While we strive for timely delivery, certain circumstances may lead
						to unforeseen delays.
					</p>
					<p className="legalP pb-[.5vh] indent-[30px]">
						Customers should understand that, by participating in the preorder,
						they agree not to hold RishiZest or Soorya Ignatius liable for any
						issues or disputes arising from the preorder. It is essential to
						recognize that all marketing assets, including images, videos, and
						product descriptions, are used for promotional purposes and may not
						precisely represent the final product. Nevertheless, RishiZest will
						make every effort to deliver a product that aligns with these
						marketing materials.
					</p>
					<p className="legalP pb-[.5vh] indent-[30px]">
						The following assets used within RishiZest&apos;s marketing
						materials are attributed as follows:
					</p>
					<ul>
						<li>
							• &quot;Built Titling&quot; is the property of Typodermic Fonts
							and is available for personal use.
						</li>
						<li>
							• &quot;Solvast&quot; is the property of Solvstud and is available
							for personal use.
						</li>
						<li>
							• &quot;Akira Expanded&quot; is the property of Typologic and is
							available for commercial use.
						</li>
						<li>
							• All raw asset templates are the property of GraphicsFuel and are
							available for commercial use.
						</li>
					</ul>
					<p className="legalP pb-[calc(2.5vh+5px)] indent-[30px]">
						This legal notice outlines the terms and conditions governing the
						preorder arrangement with RishiZest. Customers engaging in this
						arrangement are bound by the terms mentioned herein and should fully
						comprehend the implications of this agreement before proceeding with
						their preorder.
					</p>
				</div>
			</div>
			<div className="fixed bottom-[calc(100px+7.5vh)] left-0 right-0 z-10">
				<div
					className={`flex items-center justify-center ${figtreeBold.className}`}
				>
					<a href="/outro">
						<button
							className="text-3xl bg-black px-[32px] py-[15px] rounded-full mt-[20px]"
							type="submit"
						>
							PROCEED
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
