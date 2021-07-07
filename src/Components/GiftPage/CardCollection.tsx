import React from "react";
import H2 from "../Utility/H2";
import Card from "./Card";

interface Props {
	title: string;
	ImgSrc: string[];
	className?: string;
}

const CardCollection: React.FC<Props> = (props) => {
	let cardTag: React.ReactElement[] = [];

	props.ImgSrc.forEach((value) => {
		cardTag.push(<Card src={value}></Card>);
	});

	return (
		<div className="py-3 mt-6">
			<div className="flex justify-between items-center px-4">
				<H2 textSize="Small">{props.title}</H2>
				<a href="#" className="text-primary-300 font-bold text-md">
					See all
				</a>
			</div>
			<div className="px-3 relative flex space-x-5 mt-5 overflow-x-scroll">
				{cardTag}
			</div>
		</div>
	);
};

CardCollection.defaultProps = {
	className: "",
};

export default React.memo(CardCollection);
