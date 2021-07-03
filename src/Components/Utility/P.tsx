import React from "react";

interface Props {
	color?: "white" | "black";
	className?: string;
	largeTextOnMedium?: boolean;
}

const P: React.FC<Props> = (props) => {
	const color = props.color === "white" ? "text-white" : "text-black";
	const largeText = props.largeTextOnMedium ? "md:text-xl" : "md:text-base";
	return (
		<p className={color + " " + largeText + " text-sm " + props.className}>
			{props.children}
		</p>
	);
};

P.defaultProps = {
	color: "black",
	className: "",
	largeTextOnMedium: false,
};

export default P;
