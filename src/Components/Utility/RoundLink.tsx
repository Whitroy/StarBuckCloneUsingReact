import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: "Green" | "Black" | "White" | "None";
	className?: string;
}

const RoundLink: React.FC<Props> = (props) => {
	const borderOrColor =
		props.color === "Green"
			? "bg-primary-300 text-white"
			: props.color === "Black"
			? "bg-black text-white"
			: props.color === "White"
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
	color: "None",
	className: "",
};

export default RoundLink;
