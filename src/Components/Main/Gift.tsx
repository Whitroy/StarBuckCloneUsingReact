import React from "react";

interface Props {}

const Gift: React.FC<Props> = (props) => {
	return <>Gift Page</>;
};

Gift.defaultProps = {};

export default React.memo(Gift);
