import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	routing?: boolean;
	to?: string;
	activeClassName?: string;
}

const HoverLink: React.FC<Props> = ({
	className,
	children,
	routing,
	...rest
}) => {
	let tag: React.ReactElement;

	const classes: string = "hover:text-primary-300 font-bold ";

	if (routing) {
		tag = (
			<NavLink
				to={rest.to as string}
				activeClassName={rest.activeClassName}
				className={classes + className}
			>
				{children}
			</NavLink>
		);
	} else {
		tag = (
			<a {...rest} className={classes + className}>
				{children}
			</a>
		);
	}

	return <>{tag}</>;
};

HoverLink.defaultProps = {
	className: "",
	routing: false,
};

export default React.memo(HoverLink);
