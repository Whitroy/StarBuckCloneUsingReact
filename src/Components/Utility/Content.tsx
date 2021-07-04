import React from "react";
import H2 from "../Utility/H2";
import P from "../Utility/P";

interface Props {
	title: string;
	color?: "Silver" | "Black";
	className?: string;
	paraSmallTextSize?: boolean;
}

const Content: React.FC<Props> = (props) => {
	const color = props.color === "Silver" ? "text-gray-400" : "";

	return (
		<div className={props.className}>
			<H2 className={color}>{props.title}</H2>
			<P className="mt-1 md:mt-4 ">{props.children}</P>
		</div>
	);
};

Content.defaultProps = {
	color: "Black",
	className: "",
	paraSmallTextSize: false,
};

export default Content;
