import React from "react";

interface Props {
	className?: string;
}

const H1: React.FC<Props> = (props) => {
	return (
		<h1
			className={
				" font-semibold text-center text-2xl md:text-3xl " + props.className
			}
		>
			{props.children}
		</h1>
	);
};

H1.defaultProps = {
	className: "",
};

export default H1;
