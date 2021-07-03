import React from "react";

interface Props {
	className?: string;
}

const H2: React.FC<Props> = (props) => {
	return (
		<h2 className={"font-semibold text-lg md:text-xl " + props.className}>
			{props.children}
		</h2>
	);
};

H2.defaultProps = {
	className: "",
};

export default H2;
