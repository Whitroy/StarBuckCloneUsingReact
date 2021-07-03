import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	fill_Color?: "Green" | "Black" | "White" | "None";
	className?: string;
}

const RoundLink: React.FC<Props> = (props) => {
	const borderOrColor =
		props.fill_Color === "Green"
			? "bg-primary-300 text-white"
			: props.fill_Color === "Black"
			? "bg-black text-white"
			: props.fill_Color === "White"
			? "text-white font-bold border border-white"
			: "font-bold border border-black";
	return (
		<a
			{...props}
			className={
				borderOrColor +
				" rounded-full py-2 px-3 font-semibold " +
				props.className
			}
		>
			{props.children}
		</a>
	);
};

RoundLink.defaultProps = {
	fill_Color: "None",
	className: "",
};

export default RoundLink;
