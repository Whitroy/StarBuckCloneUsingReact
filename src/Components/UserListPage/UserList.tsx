import {
	ChevronLeftIcon,
	ChevronRightIcon,
	UserIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import H2 from "../Utility/H2";
import P from "../Utility/P";
import User from "./User";

interface Props {}

const UserList: React.FC<Props> = (props) => {
	const [UserData, setUserData] = useState<any>([]);
	const [page, setpage] = useState(1);
	const [pageLimit, setPageLimit] = useState("10");

	useEffect(() => {
		axios
			.get(
				`https://randomuser.me/api/?page=${page}&results=${pageLimit}&inc=gender,name,phone,email,picture`
			)
			.then((response) => {
				setUserData(response.data.results);
			});
	}, [page, pageLimit]);

	return (
		<div className="bg-white p-8 rounded-md shadow-xl">
			<div className="flex items-center justify-between text-red-400 ">
				<div className="flex items-center justify-start flex-1 ">
					<UserIcon className="w-6 h-6 mr-2" />
					<H2 className="mr-12">List of User</H2>
				</div>
				<H2 className="flex-1 hidden lg:inline-block">Gender</H2>
				<H2 className="flex-1 hidden lg:inline-block">Phone</H2>
				<H2 className="flex-1 hidden lg:inline-block">Email</H2>
			</div>
			<hr className="h-0.5 shadow-lg my-5 bg-gray-100" />
			<div>
				{UserData.map((user: any) => (
					<User
						name={user.name.first + " " + user.name.last}
						gender={user.gender}
						phoneNo={user.phone}
						email={user.email}
						profile={user.picture.thumbnail}
						key={user.picture.thumbnail + "@" + user.name.last}
					/>
				))}
			</div>
			<div className="mt-5">
				<div className="flex justify-center items-center">
					<button
						className="w-10 h-10 rounded-full text-gray-600 bg-white shadow-2xl border-gray-200 border"
						onClick={() => setpage((page) => max(page - 1, 1))}
					>
						<ChevronLeftIcon className="w-7 h-7 m-auto" />
					</button>
					<P className="mx-3">Page: {page}</P>
					<button
						className="w-10 h-10 rounded-full text-gray-600 bg-white shadow-2xl border-gray-200 border"
						onClick={() => setpage((page) => page + 1)}
					>
						<ChevronRightIcon className="w-7 h-7 m-auto" />
					</button>
				</div>
				<div className=" max-w-max mt-2  mx-auto  text-sm">
					<label htmlFor="userCount" className=" font-semibold">
						No of User Per Page:{" "}
					</label>
					<select
						name="userCount"
						onChange={(e) => {
							setPageLimit(e.target.value);
						}}
						value={pageLimit}
					>
						<option value={"10"}>10</option>
						<option value={"15"}>15</option>
						<option value={"20"}>20</option>
					</select>
				</div>
			</div>
		</div>
	);
};

UserList.defaultProps = {};

export default React.memo(UserList);

function max(num1: number, num2: number): number {
	return num1 > num2 ? num1 : num2;
}
