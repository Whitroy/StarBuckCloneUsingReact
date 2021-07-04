import React from "react";
import H1 from "../Utility/H1";
import P from "../Utility/P";
import InfoBlock from "../Utility/InfoBlock";
import TextLink from "../Utility/TextLink";

interface Props {
	title: string;
	desc: string;
}

const StepSection: React.FC<Props> = (props) => {
	return (
		<section className="my-20 md:my-28 md:px-16">
			<H1 className="text-center">{props.title}</H1>
			<P LargeTextOnMedium={true} className="mt-5 text-center md:text-center">
				{props.desc}
			</P>
			<div className="md:flex md:justify-around md:items-start md:mt-5 md:px-8">
				<InfoBlock step={1} type="number" title="Create an account">
					To get started,{" "}
					<TextLink color="Green" href="#">
						Join now{" "}
					</TextLink>
					{"."}
					You can also{" "}
					<TextLink color="Green" href="#">
						join in the app
					</TextLink>{" "}
					to get access to the full range of Starbucks&reg; Rewards benefits.
				</InfoBlock>
				<InfoBlock step={2} type="number" title="Order and pay how you’d like">
					Use cash, credit/debit card or save some time and pay right through
					the app. You’ll collect Stars all ways.{" "}
					<TextLink color="Green" href="#">
						Learn how{" "}
					</TextLink>
				</InfoBlock>
				<InfoBlock step={3} type="number" title="Earn Stars, get Rewards">
					As you earn Stars, you can redeem them for Rewards—like free food,
					drinks, and more. Start redeeming with as little as 25 Stars!
				</InfoBlock>
			</div>
		</section>
	);
};

StepSection.defaultProps = {};

export default StepSection;
