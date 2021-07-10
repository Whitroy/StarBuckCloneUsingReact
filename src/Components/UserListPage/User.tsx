import React from "react";
import P from "../Utility/P";

interface Props {
	profile: string;
	name: string;
	gender: "Male" | "Female";
	email: string;
	phoneNo: string;
}

const User: React.FC<Props> = ({ profile, name, gender, email, phoneNo }) => {
	return (
		<div className="flex justify-between lg:items-center mt-5 lg:flex-row flex-col lg:space-y-0 space-y-2 lg:p-0 p-2 shadow-xl lg:shadow-none rounded-lg lg:rounded-none">
			<div className="flex-1 flex items-center justify-start">
				<img
					src={profile}
					className="w-10 h-10 mr-2 rounded-full object-cover"
					alt=""
				></img>
				<P>{name}</P>
			</div>
			<P className="flex-1">
				<span className="lg:hidden font-semibold text-primary-300">
					Gender:{" "}
				</span>
				{gender}
			</P>
			<P className="flex-1">
				<span className="lg:hidden text-primary-300 font-semibold">
					Phone No:{" "}
				</span>
				{phoneNo}
			</P>
			<P className="flex-1 break-words">
				<span className="lg:hidden text-primary-300 font-semibold">
					Email:{" "}
				</span>
				{email}
			</P>
		</div>
	);
};

User.defaultProps = {};

export default React.memo(User);
