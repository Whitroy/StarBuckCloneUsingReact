import React from "react";
import H1 from "../Utility/H1";
import TabHeading from "./TabHeading";
import img150 from "../../Img/150_TAB_IMAGE.webp";
import Content from "../Utility/Content";

interface Props {}

const CardSection: React.FC<Props> = (props) => {
	return (
		<section>
			<div className=" bg-primary-100 pt-12">
				<div className="md:max-w-xl md:m-auto">
					<H1>Get your favorites for free</H1>
					<div className="flex justify-around items-start text-center mt-4 md:mt-12">
						<TabHeading className="w-full">
							25<span className=" text-secondary-200">&#9733;</span>
						</TabHeading>
						<TabHeading className="w-full">
							50<span className=" text-secondary-200">&#9733;</span>
						</TabHeading>
						<TabHeading className="w-full border-b-4 pb-4 border-primary-300">
							150<span className=" text-secondary-200">&#9733;</span>
						</TabHeading>
						<TabHeading className="w-full">
							200<span className=" text-secondary-200">&#9733;</span>
						</TabHeading>
						<TabHeading className="w-full">
							400<span className=" text-secondary-200">&#9733;</span>
						</TabHeading>
					</div>
				</div>
			</div>
			<div className=" bg-primary-200 text-center px-4 py-8">
				<div className="md:max-w-2xl md:m-auto md:flex">
					<img className="md:max-h-52" src={img150} alt=""></img>
					<Content
						title="Handcrafted drink, hot breakfast or parfait"
						className="mt-4 md:ml-6 text-center md:text-left"
					>
						Have a really good morning with a breakfast sandwich, oatmeal or
						your favorite drink.
					</Content>
				</div>
			</div>
		</section>
	);
};

CardSection.defaultProps = {};

export default React.memo(CardSection);
