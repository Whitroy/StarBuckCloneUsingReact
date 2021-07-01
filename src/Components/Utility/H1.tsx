import React from "react";

interface Props {
	addOnAtrributes?: string;
}

const H1: React.FC<Props> = (props) => {
	return (
		<h1
			className={" font-semibold text-center text-2xl " + props.addOnAtrributes}
		>
			{props.children}
		</h1>
	);
};

H1.defaultProps = {
	addOnAtrributes: "",
};

export default H1;
