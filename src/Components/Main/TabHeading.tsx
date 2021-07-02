import React from "react";
import H2 from "../Utility/H2";
interface Props {
	className?: string;
}

const TabHeading: React.FC<Props> = (props) => {
	return <H2 className={props.className}>{props.children}</H2>;
};

TabHeading.defaultProps = { className: "" };

export default TabHeading;
