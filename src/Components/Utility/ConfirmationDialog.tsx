import React, { Fragment } from "react";
import H1 from "./H1";
import P from "./P";
import { ExclamationIcon, XCircleIcon as XIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
	open?: boolean;
	title?: string;
	confirmText?: string;
	cancelText?: string;
	desc?: string;
	onClose: (open: boolean) => void;
}

const ConfirmationDialog: React.FC<Props> = ({
	title,
	confirmText,
	cancelText,
	desc,
	onClose,
	open,
}) => {
	console.log(open);
	return (
		<Transition.Root show={open}>
			<Dialog open={open} onClose={onClose}>
				<Transition.Child
					enter="transition-transform duration-300 ease-in"
					enterFrom="-translate-y-full scale-50 rotate-45"
					enterTo="translate-y-0 scale-100 rotate-0"
					leave="transition-transform duration-300 ease-out"
					leaveFrom="translate-y-0 scale-100 rotate-0"
					leaveTo="-translate-y-full scale-50 rotate-45"
					as={Fragment}
				>
					<div className="fixed z-50 top-1/4 bg-gray-50 left-1/20 right-1/20 md:left-1/10 md:right-1/10 transform rounded-lg p-8 text-center lg:left-1/4 lg:right-1/4 ">
						<button
							className="absolute top-2 right-2 z-50 w-8 h-8"
							onClick={() => {
								onClose(false);
							}}
						>
							<XIcon className="text-red-400" />
						</button>
						<ExclamationIcon className="w-16 h-16 m-auto text-red-600" />
						<H1 className="mt-2">{title}</H1>
						{desc && <P className="mt-5">{desc}</P>}
						<div className="mt-5 space-x-5">
							<button className="bg-primary-200 w-24 p-1 rounded-lg shadow-lg font-semibold">
								{confirmText}
							</button>
							<button
								className="bg-red-400 w-24 p-1 rounded-lg shadow-lg font-semibold"
								onClick={() => {
									onClose(false);
								}}
							>
								{cancelText}
							</button>
						</div>
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
					<Dialog.Overlay className="fixed inset-0 bg-black z-40"></Dialog.Overlay>
				</Transition.Child>
			</Dialog>
		</Transition.Root>
	);
};

ConfirmationDialog.defaultProps = {
	title: "Are you sure?",
	confirmText: "Ok",
	cancelText: "Cancel",
	open: false,
};

export default React.memo(ConfirmationDialog);
