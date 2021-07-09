import React, { useState } from "react";
import H2 from "../Utility/H2";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

interface Props {
	title: string;
	data: string[];
}

const ListCard: React.FC<Props> = (props) => {
	const datum = props.data;
	let tags: React.ReactElement[] = [];

	const [collapse, SetCollapse] = useState(true);

	datum.forEach((data, index) => {
		tags.push(
			<a className="mt-5 text-gray-400 hover:text-black" href="#" key={index}>
				{data}
			</a>
		);
	});

	return (
		<div className="lg:ml-3 lg:w-48 my-6 lg:my-0 mx-4">
			<div
				role="button"
				className="lg:hidden flex justify-between items-center text-gray-500"
				onClick={() => {
					SetCollapse((open) => !open);
				}}
			>
				<H2 className="">{props.title}</H2>
				<div className="hover:bg-gray-200 w-10 h-10 rounded-full visible lg:hidden">
					<ChevronDownIcon
						className={
							"w-7 h-7 m-auto mt-2 transform-transform transform ease-in-out duration-500"
						}
						style={{
							transform: `rotateZ(${collapse ? 0 : 180}deg)`,
						}}
					/>
				</div>
			</div>
			<H2 className="lg:inline-block hidden">{props.title}</H2>
			<div
				className={
					collapse ? "hidden lg:flex lg:flex-col" : "" + " flex flex-col "
				}
			>
				{tags}
			</div>
		</div>
	);
};

ListCard.defaultProps = {};

export default ListCard;
