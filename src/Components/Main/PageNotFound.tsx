import React from "react";

interface Props {}

const PageNotFound: React.FC<Props> = (props) => {
	return <>Page Not Found</>;
};

PageNotFound.defaultProps = {};

export default React.memo(PageNotFound);
