import React from "react";

interface Props {
	className?: string;
	textSize?: "Small" | "Large";
}

const H2: React.FC<Props> = (props) => {
	const size = props.textSize === "Large" ? " text-lg " : " text-md ";
	return (
		<h2 className={size + " font-semibold " + props.className}>
			{props.children}
		</h2>
	);
};

H2.defaultProps = {
	className: "",
	textSize: "Large",
};

export default H2;
