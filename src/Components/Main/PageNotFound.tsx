import React from "react";

interface Props {}

const PageNotFound: React.FC<Props> = (props) => {
	return (
		<div className="p-6 m-auto text-center space-y-5 bg-red-100 max-w-2xl shadow-lg rounded-md mt-36">
			<h1 className="text-2xl font-bold">404 Page Not Found!</h1>
		</div>
	);
};

PageNotFound.defaultProps = {};

export default React.memo(PageNotFound);
