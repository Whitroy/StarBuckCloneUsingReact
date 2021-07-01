import React from "react";
import H2 from "../Utility/H2";
interface Props {
	addOnAttributes?: string;
}

const TabHeading: React.FC<Props> = (props) => {
	return <H2 addOnAttributes={props.addOnAttributes}>{props.children}</H2>;
};

TabHeading.defaultProps = { addOnAttributes: "" };

export default TabHeading;
