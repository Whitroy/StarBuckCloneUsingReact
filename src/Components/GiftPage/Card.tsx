import React from "react";
import { AnchorHTMLAttributes } from "react";
import StarbuckIcon from "../Utility/StarbuckIcon";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	src: string;
}

const Card: React.FC<Props> = ({ src, ...rest }) => {
	return (
		<div className="relative w-60 h-40 cursor-pointer border-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform transform duration-300 flex-shrink-0">
			<StarbuckIcon className="absolute top-1.5 right-1.5 z-10 w-5 h-5" />
			<a {...rest}>
				<img src={src} alt="" />
			</a>
		</div>
	);
};

Card.defaultProps = {};

export default React.memo(Card);
