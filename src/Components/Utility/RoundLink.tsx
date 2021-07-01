import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	fill_Color?: "Green" | "None";
	AddOnAtrribute?: string;
}

const RoundLink: React.FC<Props> = (props) => {
	const borderOrColor =
		props.fill_Color === "Green"
			? "bg-primary-300"
			: "font-bold border border-white";
	return (
		<a
			{...props}
			className={
				borderOrColor +
				" rounded-full text-white py-2 px-3 font-semibold " +
				props.AddOnAtrribute
			}
		>
			{props.children}
		</a>
	);
};

RoundLink.defaultProps = {
	fill_Color: "None",
	AddOnAtrribute: "",
};

export default RoundLink;
