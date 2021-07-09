import React from "react";

interface Props {
	className?: string;
	textSize?: "Small" | "Large" | "XL";
}

const H2: React.FC<Props> = (props) => {
	const size =
		props.textSize === "Large"
			? " text-lg "
			: props.textSize === "XL"
			? "text-xl"
			: "text-md ";
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
