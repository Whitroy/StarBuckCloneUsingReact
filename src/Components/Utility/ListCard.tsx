import React from "react";
import H2 from "../Utility/H2";
interface Props {
	title: string;
	data: string[];
}

const ListCard: React.FC<Props> = (props) => {
	const datum = props.data;
	let tags: any[] = [];

	datum.forEach((data, index) => {
		tags.push(
			<a className="mt-5 text-gray-400 hover:text-black" href="#" key={index}>
				{data}
			</a>
		);
	});

	return (
		<div className="lg:ml-3 lg:w-48 my-6 lg:my-0 mx-4">
			<a href="#" className="lg:hidden flex justify-between items-center">
				<H2 className="text-gray-500">{props.title}</H2>
				<div className="hover:bg-gray-200 w-10 h-10 pt-1 pl-1 rounded-full visible lg:hidden">
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						aria-hidden="true"
						focusable="false"
						className=" w-8 h-8 overflow-visible fill-current"
					>
						<path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
						<circle fill="transparent" cx="50%" cy="50%" r="75%"></circle>
					</svg>
				</div>
			</a>
			<H2 className="lg:inline-block hidden">{props.title}</H2>
			<div className="hidden lg:flex lg:flex-col">{tags}</div>
		</div>
	);
};

ListCard.defaultProps = {};

export default ListCard;
