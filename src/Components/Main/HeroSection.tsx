import React from "react";
import H1 from "../Utility/H1";
import P from "../Utility/P";
import RoundLink from "../Utility/RoundLink";
import TextLink from "../Utility/TextLink";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {
	return (
		<section className=" bg-primary-200 aspect-w-3 aspect-h-4 bg-mobile-hero bg-cover md:aspect-w-16 md:aspect-h-9 overflow-hidden md:bg-desktop-hero md:bg-right-40">
			<div className=" px-4 py-8 m-auto flex flex-col items-center md:items-start md:ml-6 md:top-1/2">
				<H1 className="w-52 md:text-left md:w-64">FREE COFFEE IS A TAP AWAY</H1>
				<P largeTextOnMedium={true} className="mt-5">
					Join now to start earning Rewards.
				</P>
				<RoundLink fill_Color="Green" className="mt-5" href="#">
					Join <span className="hidden md:inline">now</span>{" "}
					<span className="visible md:hidden">in the app</span>
				</RoundLink>
				<div className="mt-5">
					<TextLink className="md:text-xl">
						Or <span className="md:hidden visible">join online</span>
						<span className="md:inline hidden">join in the app</span>
					</TextLink>{" "}
					<P largeTextOnMedium={true} className="md:inline hidden">
						for the best experience
					</P>
				</div>
			</div>
		</section>
	);
};

HeroSection.defaultProps = {};

export default HeroSection;
