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
		<section className="my-20 px-2 md:my-28 md:px-16">
			<H1 className="text-center">{props.title}</H1>
			<P LargeTextOnMedium={true} className="mt-5 text-center">
				{props.desc}
			</P>
			<div className="md:flex md:justify-around md:items-start md:mt-5 md:px-8">
				<InfoBlock step={FunFrebies} type="Img" title="Fun freebies">
					Not only can you earn free coffee, look forward to a birthday treat
					plus coffee and tea refills.
					<TextLink color="Green" href="#" className="block mt-4">
						Learn More
					</TextLink>
				</InfoBlock>
				<InfoBlock step={OrderPay} type="Img" title="Order & pay ahead">
					Enjoy the convenience of in-store, curbside or drive-thru pickup at
					select stores.
					<TextLink color="Green" href="#" className="block mt-4">
						Learn More
					</TextLink>
				</InfoBlock>
				<InfoBlock step={GetFree} type="Img" title="Get to free faster">
					Earn Stars even quicker with Bonus Star challenges, Double Star Days
					and exciting games.
					<TextLink color="Green" href="#" className="block mt-4">
						Learn More
					</TextLink>
				</InfoBlock>
			</div>
		</section>
	);
};

ImgSection.defaultProps = {};

export default React.memo(ImgSection);
