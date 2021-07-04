import React from "react";
import H2 from "../Utility/H2";
import P from "../Utility/P";

interface Props {
	title: string;
	color?: "Silver" | "Black" | "Gray";
	className?: string;
	paraLargeTextSize?: boolean;
}

const Content: React.FC<Props> = (props) => {
	const color =
		props.color === "Silver"
			? "text-gray-400"
			: props.color === "Gray"
			? "text-gray-500"
			: "";
	return (
		<div className={props.className}>
			<H2 className={color}>{props.title}</H2>
			<P className="mt-1 md:mt-4 " LargeTextOnMedium={props.paraLargeTextSize}>
				{props.children}
			</P>
		</div>
	);
};

Content.defaultProps = {
	color: "Black",
	className: "",
	paraLargeTextSize: false,
};

export default Content;
