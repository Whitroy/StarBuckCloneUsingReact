import React from "react";
import H2 from "../Utility/H2";
import Card from "./Card";
import CardHolder from "./CardHolder";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface Props {
	title: string;
	className?: string;
	children: React.ReactElement[];
}

const CardCollection: React.FC<Props> = ({ title, className, children }) => {
	children.forEach((card) => {
		if (card.type !== CardHolder) throw "CardHolder must be passed Only";
	});

	return (
		<div className={"py-3 " + className}>
			<div className="flex justify-between items-center px-4">
				<H2 textSize="Small">{title}</H2>
				<a href="#" className="text-primary-300 font-bold text-md">
					See all
				</a>
			</div>

			<div className="px-3 relative flex space-x-5 mt-5 max-w-full overflow-x-hidden">
				<button className=" absolute z-20 top-1/3 w-10 h-10 left-4 rounded-full text-gray-600 bg-white shadow-2xl border-gray-100 border">
					<ChevronLeftIcon className="w-7 h-7 m-auto" />
				</button>
				<button className="absolute w-10 h-10 top-1/3 z-20 right-4 rounded-full text-gray-600 bg-white shadow-2xl border-gray-100 border">
					<ChevronRightIcon className="w-7 h-7 m-auto" />
				</button>
				{children.map((card, index) => (
					<Card
						src={card.props.src}
						href={card.props.href}
						key={card.props.src + index}
					/>
				))}
			</div>
		</div>
	);
};

CardCollection.defaultProps = {
	className: "",
};

export default React.memo(CardCollection);
