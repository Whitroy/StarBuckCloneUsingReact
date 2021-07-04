import React from "react";

interface Props {
	className?: string;
	center?: boolean;
}

const H1: React.FC<Props> = (props) => {
	const align = props.center ? "text-center" : "text-left";
	return (
		<h1
			className={
				align + " font-semibold text-2xl md:text-3xl " + props.className
			}
		>
			{props.children}
		</h1>
	);
};

H1.defaultProps = {
	className: "",
	center: true,
};

export default H1;
