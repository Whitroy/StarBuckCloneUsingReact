import React from "react";
import H1 from "../Utility/H1";
import P from "../Utility/P";
import RoundLink from "../Utility/RoundLink";
import TextLink from "../Utility/TextLink";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {
	return (
		<section className=" bg-primary-200 aspect-w-4 aspect-h-5 bg-mobile-hero bg-cover">
			<div className=" px-4 py-8 m-auto flex flex-col items-center">
				<H1 addOnAtrributes="w-52">FREE COFFEE IS A TAP AWAY</H1>
				<P addOnAtrributes="mt-5">Join now to start earning Rewards.</P>
				<RoundLink fill_Color="Green" AddOnAtrribute="mt-5" href="#">
					Join in the app
				</RoundLink>
				<TextLink addOnAttributes="mt-5">Or join online</TextLink>
			</div>
		</section>
	);
};

HeroSection.defaultProps = {};

export default HeroSection;
