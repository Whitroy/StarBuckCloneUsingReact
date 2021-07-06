import React, { AnchorHTMLAttributes } from "react";
import { JsxElement } from "typescript";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: "Green" | "black";
	className?: string;
}

const TextLink: React.FC<Props> = (props) => {
	const color = props.color === "Green" ? "text-primary-300" : "text-black";

	return (
		<a
			{...props}
			className={color + " hover:no-underline underline " + props.className}
		>
			{props.children}
		</a>
	);
};

TextLink.defaultProps = {
	color: "black",
	className: "",
};

export default TextLink;
