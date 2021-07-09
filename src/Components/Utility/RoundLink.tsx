import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: "Green" | "Black" | "White" | "None";
	className?: string;
	routing?: boolean;
	to?: string;
	activeClassName?: string;
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

	let tag: React.ReactElement;

	if (props.routing) {
		tag = (
			<NavLink
				to={props.to as string}
				activeClassName={props.activeClassName}
				className={
					borderOrColor +
					" rounded-full py-2 px-3 font-semibold " +
					props.className
				}
			>
				{props.children}
			</NavLink>
		);
	} else {
		tag = (
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
	}
	return <>{tag}</>;
};

RoundLink.defaultProps = {
	color: "None",
	className: "",
	activeClassName: "",
	to: "",
	routing: false,
};

export default RoundLink;
