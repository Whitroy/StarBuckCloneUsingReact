import React from "react";

interface Props {
	color?: "white" | "black";
	addOnAtrributes?: string;
}

const P: React.FC<Props> = (props) => {
	const color = props.color === "white" ? "text-white" : "text-black";
	return (
		<p className={color + " " + props.addOnAtrributes}>{props.children}</p>
	);
};

P.defaultProps = {
	color: "black",
	addOnAtrributes: "",
};

export default P;
