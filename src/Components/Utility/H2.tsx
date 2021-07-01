import React from "react";

interface Props {
	addOnAttributes?: string;
}

const H2: React.FC<Props> = (props) => {
	return (
		<h2 className={"font-semibold text-lg " + props.addOnAttributes}>
			{props.children}
		</h2>
	);
};

H2.defaultProps = {
	addOnAttributes: "",
};

export default H2;
