import React, { Fragment, useState } from "react";
import HoverLink from "../Utility/HoverLink";
import RoundLink from "../Utility/RoundLink";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import StarbuckIcon from "../Utility/StarbuckIcon";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

interface Props {}

const Nav: React.FC<Props> = (props) => {
	const [isMenuOpen, SetMenuOpen] = useState(false);
	const [isAnimating, SetIsAnimating] = useState(false);

	const navWidth = isMenuOpen ? "103%" : "100%";

	return (
		<>
			<nav
				className=" relative z-30 flex justify-between items-center p-4 md:px-8 md:pb-0 md:pt-2 md:justify-start bg-white shadow-md pr-6 md:sticky md:top-0"
				style={{ width: navWidth }}
			>
				<StarbuckIcon className="w-10 h-10 md:w-14 md:h-14" />
				<button
					className="w-6 h-6 md:hidden relative"
					onClick={() => {
						if (!isAnimating) {
							SetMenuOpen(true);
						}
					}}
				>
					<Transition
						show={!isMenuOpen}
						enter="transition-opacity duration-300 "
						enterFrom="opacity-0"
						enterTo="opacity-50"
						entered="opacity-50"
						leave="transition-opacity duration-300 "
						leaveFrom="opacity-50"
						leaveTo="opacity-0"
					>
						<MenuIcon className="absolute inset-0" />
					</Transition>
					<Transition
						show={isMenuOpen}
						enter="transition-opacity transition-tansform duration-300 "
						enterFrom="opacity-0 rotate-90"
						enterTo="opacity-50 rotate-0"
						entered="opacity-50"
						leave="transition-opacity transition-transform duration-300 "
						leaveFrom="opacity-50 rotate-0"
						leaveTo="opacity-0 rotate-90"
					>
						<XIcon className="absolute inset-0 transform" />
					</Transition>
				</button>
				<div className="hidden md:flex md:justify-between md:w-full md:items-center">
					<div className="flex justify-center items-start pt-8">
						<HoverLink
							className="ml-4"
							routing={true}
							to="/menu"
							activeClassName="border-b-8 border-primary-300 h-14"
						>
							MENU
						</HoverLink>
						<HoverLink
							className="ml-4"
							routing={true}
							to="/rewards"
							activeClassName="border-b-8 border-primary-300 h-14"
						>
							REWARDS
						</HoverLink>
						<HoverLink
							className="ml-4"
							routing={true}
							to="/gifts"
							activeClassName="border-b-8 border-primary-300 h-14"
						>
							GIFT CARDS
						</HoverLink>
						<HoverLink
							className="ml-4"
							routing={true}
							to="/dialog"
							activeClassName="border-b-8 border-primary-300 h-14"
						>
							DIALOG DEMO
						</HoverLink>
					</div>
					<div className="flex justify-center items-center flex-shrink-0">
						<HoverLink href="#" className=" text-sm block ">
							<LocationMarkerIcon className="w-7 h-7 inline-block mr-1" />
							Find a store
						</HoverLink>
						<RoundLink href="#" className="ml-12 hover:bg-gray-100 px-4">
							Sign in
						</RoundLink>
						<RoundLink
							href="#"
							color="Black"
							className="ml-4 hover:bg-gray-700 "
						>
							Join now
						</RoundLink>
					</div>
				</div>
			</nav>

			<Transition.Root
				show={isMenuOpen}
				beforeEnter={() => SetIsAnimating(true)}
				afterLeave={() => SetIsAnimating(false)}
				as={Fragment}
			>
				<Dialog open={isMenuOpen} onClose={SetMenuOpen}>
					<Transition.Child
						enter="transition-transform duration-300 "
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition-transform duration-300 "
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
						as={Fragment}
					>
						<div
							className={
								" top-0 right-0 left-28 fixed bottom-0 transform md:hidden p-8 pt-24 z-20 bg-white "
							}
						>
							<ul className="text-2xl space-y-5">
								<li>
									<a href="#">Menu</a>
								</li>
								<li>Rewards</li>
								<li>Gift Cards</li>
							</ul>
							<hr className="my-8 border" />
							<RoundLink href="#">Sign in</RoundLink>
							<RoundLink color="Black" className="ml-4 " href="#">
								Join now
							</RoundLink>
							<HoverLink href="#" className=" text-xs block mt-6">
								<LocationMarkerIcon className="w-7 h-7 inline-block" />
								Find a store
							</HoverLink>
						</div>
					</Transition.Child>

					<Transition.Child
						enter="transition-opacity duration-300 "
						enterFrom="opacity-0"
						enterTo="opacity-50"
						entered="opacity-50"
						leave="transition-opacity duration-300 "
						leaveFrom="opacity-50"
						leaveTo="opacity-0"
						as={Fragment}
					>
						<Dialog.Overlay className="bg-black fixed inset-0 z-10" />
					</Transition.Child>
				</Dialog>
			</Transition.Root>
		</>
	);
};

Nav.defaultProps = {};

export default React.memo(Nav);
