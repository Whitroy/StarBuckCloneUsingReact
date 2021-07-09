import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import H1 from "../Utility/H1";

interface Props {
	children: React.ReactElement[];
}

const Tabs: React.FC<Props> = ({ children }) => {
	const [selectedTab, SetSelectedTab] = useState(0);

	const tabWidth = 100 / children.length;
	return (
		<>
			<div className=" bg-primary-100 pt-12">
				<H1>Get your favorites for free</H1>
				<div className="max-w-md mx-auto ">
					<div className="flex text-xl font-bold">
						{children.map((child, index) => (
							<div
								className="flex-1 px-2 py-4 text-center cursor-pointer"
								onClick={() => SetSelectedTab(index)}
							>
								{child.props.title}
							</div>
						))}
					</div>
					<div
						className="h-1 bg-primary-300 ease-in-out transform-transition duration-300"
						style={{
							width: tabWidth + "%",
							transform: `translateX(${100 * selectedTab}%)`,
						}}
					></div>
				</div>
			</div>
			<div className="bg-primary-200 flex overflow-x-hidden">
				{children.map((child, index) => (
					<Transition
						show={index === selectedTab}
						as={Fragment}
						enter="transition-opacity duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						entered="opacity-100"
						leave="transition-opacity duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="flex-none w-full">{child}</div>
					</Transition>
				))}
			</div>
		</>
	);
};

Tabs.defaultProps = {};

export default React.memo(Tabs);
