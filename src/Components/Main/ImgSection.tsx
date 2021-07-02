import React from "react";
import H1 from "../Utility/H1";
import P from "../Utility/P";
import InfoBlock from "../Utility/InfoBlock";
import TextLink from "../Utility/TextLink";
import FunFrebies from "../../Img/Fun-freebies.png";
import GetFree from "../../Img/get-to-free-faster.png";
import OrderPay from "../../Img/order-and-pay-ahead.png";

interface Props {
	title: string;
	desc: string;
}

const ImgSection: React.FC<Props> = (props) => {
	return (
		<section className="my-20 px-2">
			<H1 className="text-center">{props.title}</H1>
			<P className="mt-5 text-center">{props.desc}</P>
			<InfoBlock step={FunFrebies} type="Img" title="Fun freebies">
				<P>
					Not only can you earn free coffee, look forward to a birthday treat
					plus coffee and tea refills.
				</P>
				<TextLink textColor="Green" href="#" className="block mt-4">
					Learn More
				</TextLink>
			</InfoBlock>
			<InfoBlock step={OrderPay} type="Img" title="Order & pay ahead">
				<P>
					Enjoy the convenience of in-store, curbside or drive-thru pickup at
					select stores.
				</P>
				<TextLink textColor="Green" href="#" className="block mt-4">
					Learn More
				</TextLink>
			</InfoBlock>
			<InfoBlock step={GetFree} type="Img" title="Get to free faster">
				<P>
					Earn Stars even quicker with Bonus Star challenges, Double Star Days
					and exciting games.
				</P>
				<TextLink textColor="Green" href="#" className="block mt-4">
					Learn More
				</TextLink>
			</InfoBlock>
		</section>
	);
};

ImgSection.defaultProps = {};

export default ImgSection;
