import React from "react";
import Content from "./Content";

interface Props {
	step: number | string;
	title: string;
	type: "number" | "Img";
}

const InfoBlock: React.FC<Props> = (props) => {
	let blockStart: any;
	if (props.type === "Img") {
		blockStart = (
			<img className=" w-28 h-28" src={props.step as string} alt="" />
		);
	} else {
		blockStart = (
			<h2 className=" rounded-full text-center text-primary-300 border-primary-300 border-2.5 inline py-2 px-4 font-semibold text-xl">
				{props.step}
			</h2>
		);
	}

	return (
		<div className="flex items-start justify-start p-2 mt-4 md:flex-col md:items-center md:p-6">
			{blockStart}
			<div className="flex flex-col items-start mx-4 md:mt-6 md:items-center md:text-center">
				<Content title={props.title} className="md:mt-5 ">
					{props.children}
				</Content>
			</div>
		</div>
	);
};

InfoBlock.defaultProps = {};

export default InfoBlock;
