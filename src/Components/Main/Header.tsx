import React from "react";
import P from "../Utility/P";
import RoundLink from "../Utility/RoundLink";
interface Props {}

const Header: React.FC<Props> = (props) => {
	return (
		<header className=" bg-primary-400 px-4 py-2 text-sm flex justify-between items-center sticky top-0 z-10">
			<P color="white" addOnAtrributes="font-extrabold">
				STARBUCKS&#174; REWARDS
			</P>
			<RoundLink href="#" AddOnAtrribute="hover:bg-gray-500 flex-shrink-0">
				Join in the app
			</RoundLink>
		</header>
	);
};

Header.defaultProps = {};

export default Header;
