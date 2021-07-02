import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	textColor?: "Green" | "black";
	className?: string;
}

const TextLink: React.FC<Props> = (props) => {
	const color = props.textColor === "Green" ? "text-primary-300" : "text-black";

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
	textColor: "black",
	className: "",
};

export default TextLink;
