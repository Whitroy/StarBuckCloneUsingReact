import React from "react";
import UserList from "../UserListPage/UserList";

interface Props {}

const Users: React.FC<Props> = (props) => {
	return (
		<>
			<section className=" bg-gray-50 h-full p-12">
				<UserList />
			</section>
		</>
	);
};

Users.defaultProps = {};

export default React.memo(Users);
