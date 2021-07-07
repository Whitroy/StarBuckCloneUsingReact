import React from "react";
import H2 from "../Utility/H2";
import P from "../Utility/P";

interface Props {
	title: string;
	color?: "Silver" | "Black" | "Gray";
	className?: string;
	paraLargeTextSize?: boolean;
	children: React.ReactNode[];
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
			<div className="mt-1 md:mt-4 ">
				{props.children.map((value, index) => (
					<P
						className="mt-3"
						LargeTextOnMedium={props.paraLargeTextSize}
						key={index}
					>
						{value}
					</P>
				))}
			</div>
		</div>
	);
};

Content.defaultProps = {
	color: "Black",
	className: "",
	paraLargeTextSize: false,
};

export default Content;
