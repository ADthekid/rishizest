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
			<div className="flex flex-col items-center h-[calc(100vh-180px)] overflow-y-scroll pb-[2px]">
				<h1 className="flex text-7xl pt-[7.5vh] pb-[4vh] text-center max-w-[75vw]">
					LEGAL STUFF
				</h1>
				<div
					className={`md:w-[770px] w-[75vw] text-lg pb-[calc(60px+7.5vh)] ${figtreeNormal.className}`}
				>
					<p className="legalP pb-[2.5vh] indent-[30px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
						neque ornare aenean euismod elementum. Id diam vel quam elementum.
						Vitae tempus quam pellentesque nec nam. Nibh nisl condimentum id
						venenatis a condimentum vitae sapien. Consectetur libero id faucibus
						nisl tincidunt eget nullam non. Sit amet est placerat in egestas.
						Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae
						elementum. Vel facilisis volutpat est velit egestas dui id ornare.
						Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
						Eget nunc scelerisque viverra mauris in aliquam. Turpis egestas
						integer eget aliquet nibh praesent tristique magna sit. Nunc mattis
						enim ut tellus elementum sagittis.
					</p>
					<p className="legalP pb-[2.5vh] indent-[30px]">
						Elementum tempus egestas sed sed risus pretium quam vulputate
						dignissim. Consectetur adipiscing elit ut aliquam purus. Ultrices
						dui sapien eget mi proin sed libero. Ornare arcu odio ut sem nulla
						pharetra diam sit. Ac tortor dignissim convallis aenean et tortor.
						Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi.
						Pretium fusce id velit ut tortor pretium viverra suspendisse
						potenti. Quam pellentesque nec nam aliquam sem et. Tellus mauris a
						diam maecenas sed enim. Quam pellentesque nec nam aliquam.
					</p>
					<p className="legalP pb-[2.5vh] indent-[30px]">
						Senectus et netus et malesuada fames ac. Odio eu feugiat pretium
						nibh ipsum consequat nisl vel. At erat pellentesque adipiscing
						commodo elit at. Mauris pharetra et ultrices neque ornare. Morbi leo
						urna molestie at elementum eu. Posuere sollicitudin aliquam ultrices
						sagittis orci a scelerisque purus semper. At augue eget arcu dictum
						varius duis at consectetur. Rutrum quisque non tellus orci ac. Orci
						eu lobortis elementum nibh tellus molestie nunc non. Tincidunt id
						aliquet risus feugiat in ante metus dictum. Tellus orci ac auctor
						augue mauris. Sit amet massa vitae tortor condimentum lacinia quis.
						Quam vulputate dignissim suspendisse in est ante. Sodales neque
						sodales ut etiam sit amet nisl. Lorem ipsum dolor sit amet
						consectetur adipiscing.
					</p>
					<p className="legalP pb-[2.5vh] indent-[30px]">
						Mi proin sed libero enim sed. Elit duis tristique sollicitudin nibh
						sit amet commodo nulla. Pretium quam vulputate dignissim suspendisse
						in est ante in nibh. Magna eget est lorem ipsum dolor sit amet.
						Ultrices dui sapien eget mi proin sed libero enim. Duis at tellus at
						urna condimentum mattis pellentesque id. Donec ac odio tempor orci
						dapibus ultrices in iaculis nunc. Leo integer malesuada nunc vel
						risus commodo viverra maecenas accumsan. Cras ornare arcu dui
						vivamus arcu felis bibendum ut. Quisque non tellus orci ac auctor
						augue. Convallis aenean et tortor at risus viverra adipiscing at.
						Sed blandit libero volutpat sed cras. Sed enim ut sem viverra
						aliquet eget sit. Malesuada fames ac turpis egestas sed. Dictum non
						consectetur a erat nam at lectus urna. Risus commodo viverra
						maecenas accumsan lacus. Feugiat nibh sed pulvinar proin gravida.
					</p>
					<p className="legalP pb-[calc(2.5vh+5px)] indent-[30px]">
						In aliquam sem fringilla ut morbi tincidunt augue interdum. Donec
						enim diam vulputate ut. Mattis enim ut tellus elementum sagittis
						vitae et leo duis. Et ligula ullamcorper malesuada proin libero nunc
						consequat. A condimentum vitae sapien pellentesque. Augue mauris
						augue neque gravida. Integer feugiat scelerisque varius morbi enim
						nunc faucibus a pellentesque. Eu sem integer vitae justo eget.
						Ornare suspendisse sed nisi lacus sed. Libero volutpat sed cras
						ornare arcu dui vivamus. Sit amet nisl purus in mollis nunc sed id.
						Turpis egestas integer eget aliquet nibh praesent tristique magna
						sit. Tristique nulla aliquet enim tortor at auctor urna nunc id.
						Tortor aliquam nulla facilisi cras fermentum odio eu. Arcu bibendum
						at varius vel pharetra vel turpis. Mattis vulputate enim nulla
						aliquet porttitor lacus luctus accumsan. Lobortis elementum nibh
						tellus molestie nunc non blandit massa. Quisque non tellus orci ac
						auctor augue mauris. Tincidunt vitae semper quis lectus nulla at
						volutpat diam ut. Id neque aliquam vestibulum morbi blandit.
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
