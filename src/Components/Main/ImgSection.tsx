import React from "react";
import H1 from "../Utility/H1";
import P from "../Utility/P";
import InfoBlock from "../Utility/InfoBlock";
import TextLink from "../Utility/TextLink";

interface Props {
	title: string;
	desc: string;
}

const ImgSection: React.FC<Props> = (props) => {
	return (
		<section className="my-20 px-2">
			<H1 addOnAtrributes="text-center">{props.title}</H1>
			<P addOnAtrributes="mt-5 text-center">{props.desc}</P>
			<InfoBlock step={1} type="Img" title="Download the Starbucks&reg; app">
				<TextLink textColor="Green" href="#">
					Join in the app{" "}
				</TextLink>{" "}
				to get access to the full range of Starbucks&reg; Rewards benefits. You
				can also
				<TextLink textColor="Green" href="#">
					{" "}
					join online.
				</TextLink>
			</InfoBlock>
			<InfoBlock step={2} type="Img" title="Download the Starbucks&reg; app">
				Use cash, credit/debit card or save some time and pay right through the
				app. You’ll collect Stars all ways.{" "}
				<TextLink textColor="Green" href="#">
					Learn more{" "}
				</TextLink>
			</InfoBlock>
			<InfoBlock step={3} type="Img" title="Earn Stars, get Rewards">
				As you earn Stars, you can redeem them for Rewards—like free food,
				drinks, and more. Start redeeming with as little as 25 Stars!
			</InfoBlock>
		</section>
	);
};

ImgSection.defaultProps = {};

export default ImgSection;
