import React from "react";
import P from "../Utility/P";
import RoundLink from "../Utility/RoundLink";
interface Props {}

const Header: React.FC<Props> = (props) => {
	return (
		<header className=" bg-primary-400 px-4 py-2 text-sm flex justify-between items-center sticky top-0 z-10">
			<P color="white" className="font-extrabold md:max-w-md md:ml-20 md:py-1">
				STARBUCKS&#174; REWARDS
			</P>
			<RoundLink
				href="#"
				color="White"
				className="hover:bg-gray-500 flex-shrink-0 md:hidden visible"
			>
				Join in the app
			</RoundLink>
		</header>
	);
};

Header.defaultProps = {};

export default React.memo(Header);
