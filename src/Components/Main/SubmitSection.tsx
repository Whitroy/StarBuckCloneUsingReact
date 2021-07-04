import React from "react";
import H1 from "../Utility/H1";
import P from "../Utility/P";
import TextLink from "../Utility/TextLink";
import Content from "../Utility/Content";

interface Props {}

const SubmitSection: React.FC<Props> = (props) => {
	return (
		<section className="my-20 md:my-28 px-6">
			<div className="max-w-xl m-auto">
				<H1 center={false} className="text-left">
					Star Codes
				</H1>
				<P className="mt-5">
					Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
					add Stars to your account.
				</P>
				<form className="mt-5 ">
					<input
						type="text"
						placeholder="Enter your Star Code"
						className="p-3 border-2 border-gray-400 rounded-xl w-full"
					></input>
					<div className="ml-auto w-20">
						<button
							type="submit"
							className="font-bold border border-black rounded-3xl px-3 py-1 mt-5 hover:bg-gray-200"
						>
							Submit
						</button>
					</div>
				</form>
				<P className="mt-5">Have a receipt but don't have a code?</P>
				<P>
					Go to{" "}
					<TextLink href="#" color="Green">
						starbucks-stars.com
					</TextLink>{" "}
					to upload your receipt and collect your Stars.
				</P>
				<Content title="Question?" className="mt-24">
					We want to help in any way we can. You can ask your barista anytime or
					we’ve answered the most commonly asked questions{" "}
					<TextLink color="Green" href="#">
						right over here
					</TextLink>
					.
				</Content>
			</div>
		</section>
	);
};

SubmitSection.defaultProps = {};

export default SubmitSection;
