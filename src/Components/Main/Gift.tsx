import React from "react";
import Card from "../GiftPage/Card";
import CardCollection from "../GiftPage/CardCollection";
import H2 from "../Utility/H2";
import P from "../Utility/P";
import RoundLink from "../Utility/RoundLink";

interface Props {}

const Gift: React.FC<Props> = (props) => {
	return (
		<>
			<CardCollection title="FEATURED" className="mt-8 md:ml-20">
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
			</CardCollection>
			<section className="bg-primary-200 p-8 md:pl-24 flex items-center justify-start mt-6">
				<H2 textSize="XL">Got a gift card?</H2>
				<P className="ml-2">
					Earns 2<span className=" text-secondary-200">★</span> per $1
				</P>
				<RoundLink color="Black" className="ml-5" href="#">
					Check balance
				</RoundLink>
				<RoundLink className="ml-5" href="#">
					Add Card
				</RoundLink>
			</section>
			<CardCollection title="FEATURED" className="mt-8 md:ml-20">
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
			</CardCollection>
			<CardCollection title="FEATURED" className="mt-8 md:ml-20">
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
			</CardCollection>
			<CardCollection title="FEATURED" className="mt-8 md:ml-20">
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
			</CardCollection>
			<CardCollection title="FEATURED" className="mt-8 md:ml-20">
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
				<Card src="" href="#"></Card>
			</CardCollection>
		</>
	);
};

Gift.defaultProps = {};

export default React.memo(Gift);
