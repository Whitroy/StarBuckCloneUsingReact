import React from "react";
import H1 from "../Utility/H1";
import ImgContent from "../Utility/ImgContent";
import P from "../Utility/P";
import TextLink from "../Utility/TextLink";
import A1Img from "../../Img/InfoSectionImg/1A.png";
import A2Img from "../../Img/InfoSectionImg/2A.png";
import B1Img from "../../Img/InfoSectionImg/1B.png";
import B2Img from "../../Img/InfoSectionImg/2B.png";
import C1Img from "../../Img/InfoSectionImg/1C.png";

interface Props {
	title: string;
	desc: string;
}

const InfoSection: React.FC<Props> = (props) => {
	return (
		<section className="py-20 px-4 md:py-28 md:px-16 bg-secondary-100">
			<H1 className="text-center">{props.title}</H1>
			<P LargeTextOnMedium={true} className="mt-5 text-center">
				{props.desc}
			</P>
			<div className="mt-5 md:mt-16">
				<div className="lg:flex lg:justify-between lg:items-start">
					<div className=" md:w-80">
						<P className="text-lg font-bold md:text-2xl">1&#9733; per dollar</P>
						<P className="mt-1">Pay as you go</P>
					</div>
					<div className="mt-5 lg:mt-0 md:flex md:justify-between md:items-start md:w-full">
						<ImgContent
							src={A1Img}
							title="Scan and pay separately"
							className=" md:w-full"
						>
							Use cash or credit/debit card at the register.
						</ImgContent>
						<ImgContent
							src={A2Img}
							title="Save payment in the app"
							className="mt-5 md:mt-0 md:w-full"
						>
							Check-out faster by saving a credit/debit card or PayPal to your
							account. You’ll be able to order ahead or scan and pay at the
							register in one step.
						</ImgContent>
					</div>
				</div>
				<hr className=" bg-gray-300 mt-5 md:mt-16" />
				<div className="mt-5 md:mt-16 lg:flex lg:justify-between ;lg:items-start">
					<div className=" md:w-80">
						<P className="text-lg font-bold md:text-2xl">2&#9733; per dollar</P>
						<P className="mt-1">Add funds in the app</P>
					</div>
					<div className="mt-5 lg:mt-0 md:flex md:justify-between md:items-start md:w-full">
						<ImgContent src={B1Img} title="Preload">
							To save time and earn Stars twice as fast, add money to your
							digital Starbucks Card using any payment option. Scan and pay in
							one step or order ahead in the app.
						</ImgContent>
						<ImgContent
							src={B2Img}
							title="Register your gift card"
							className="mt-5 md:mt-0"
						>
							Then use it to pay through the app. You can even consolidate
							balances from multiple cards in one place.
						</ImgContent>
					</div>
				</div>
				<hr className=" bg-gray-300 mt-5 md:mt-16" />
				<div className="mt-5 md:mt-16 lg:flex lg:justify-between lg:items-start">
					<div className=" md:w-80">
						<P className="text-lg font-bold md:text-2xl">
							Up to 3&#9733; per dollar
						</P>
						<P className="mt-1">With Starbucks® Rewards Visa® Card</P>
					</div>
					<div className="mt-5 lg:mt-0 md:flex md:justify-between md:items-start md:w-full">
						<ImgContent
							src={C1Img}
							title="Earn Stars even faster"
							className="mt-5"
						>
							Earn Stars on all purchases you make with our{" "}
							<TextLink textColor="Green" href="#">
								credit card
							</TextLink>{" "}
							in and outside of Starbucks. Earn 1 Star per $1 when you digitally
							preload your Starbucks Card with your Starbucks® Rewards Visa®
							Card, and earn 2 Stars per $1 when you pay with that preloaded
							Starbucks Card.
						</ImgContent>
					</div>
				</div>
			</div>
		</section>
	);
};

InfoSection.defaultProps = {};

export default InfoSection;
