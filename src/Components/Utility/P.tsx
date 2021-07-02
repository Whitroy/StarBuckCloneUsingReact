import React from "react";

interface Props {
	color?: "white" | "black";
	className?: string;
}

const P: React.FC<Props> = (props) => {
	const color = props.color === "white" ? "text-white" : "text-black";
	return (
		<p className={color + " text-sm " + props.className}>{props.children}</p>
	);
};

P.defaultProps = {
	color: "black",
	className: "",
};

export default P;
