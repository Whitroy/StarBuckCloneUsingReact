import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	textColor?: "Green" | "black";
	addOnAttributes?: string;
}

const TextLink: React.FC<Props> = (props) => {
	const color = props.textColor === "Green" ? "text-primary-300" : "text-black";

	return (
		<a
			{...props}
			className={
				color + " hover:no-underline underline " + props.addOnAttributes
			}
		>
			{props.children}
		</a>
	);
};

TextLink.defaultProps = {
	textColor: "black",
	addOnAttributes: "",
};

export default TextLink;
