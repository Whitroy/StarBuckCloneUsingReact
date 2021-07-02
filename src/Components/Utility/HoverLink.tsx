import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
}

const HoverLink: React.FC<Props> = (props) => {
	return (
		<a
			{...props}
			className={"hover:text-primary-300 font-bold " + props.className}
		>
			{props.children}
		</a>
	);
};

HoverLink.defaultProps = {
	className: "",
};

export default HoverLink;
