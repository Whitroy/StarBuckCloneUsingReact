import React from "react";
import H2 from "../Utility/H2";
import P from "../Utility/P";

interface Props {
	title: string;
	color?: "Silver" | "Black";
	className?: string;
}

const Content: React.FC<Props> = (props) => {
	const color = props.color === "Silver" ? "text-gray-400" : "";

	return (
		<div className={props.className}>
			<H2 className={color + " md:text-left"}>{props.title}</H2>
			<P className="mt-4">{props.children}</P>
		</div>
	);
};

Content.defaultProps = {
	color: "Black",
	className: "",
};

export default Content;
