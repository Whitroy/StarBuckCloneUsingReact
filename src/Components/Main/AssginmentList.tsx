import React from "react";
import H1 from "../Utility/H1";
import RoundLink from "../Utility/RoundLink";

interface Props {}

const AssginmentList: React.FC<Props> = (props) => {
	return (
		<div className=" p-6 m-auto text-center space-y-5 bg-secondary-100 max-w-2xl shadow-lg rounded-md mt-36 flex flex-col space-y-5 items-start justify-between">
			<H1>Assigment Links</H1>
			<RoundLink color="Black" routing={true} to="/rewards">
				StarBuck Clone
			</RoundLink>
			<RoundLink color="Green" routing={true} to="/dialog">
				Confirmation Dialog
			</RoundLink>
			<RoundLink color="Black" routing={true} to="/userlist">
				User List
			</RoundLink>
		</div>
	);
};

AssginmentList.defaultProps = {};

export default React.memo(AssginmentList);
