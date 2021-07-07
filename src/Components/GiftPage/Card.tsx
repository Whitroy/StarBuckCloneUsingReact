import React from "react";
import StarbuckIcon from "../Utility/StarbuckIcon";

interface Props {
	src: string;
}

const Card: React.FC<Props> = (props) => {
	return (
		<div className="relative w-44 h-28 cursor-pointer border-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform transform duration-300 flex-shrink-0">
			<StarbuckIcon className="absolute top-1.5 right-1.5 z-10 w-5 h-5" />
			<img src={props.src} alt=""></img>
		</div>
	);
};

Card.defaultProps = {};

export default React.memo(Card);
