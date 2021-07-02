import React from "react";
import H1 from "../Utility/H1";
import TabHeading from "./TabHeading";
import H2 from "../Utility/H2";
import P from "../Utility/P";
import img150 from "../../Img/150_TAB_IMAGE.webp";

interface Props {}

const CardSection: React.FC<Props> = (props) => {
	return (
		<section>
			<div className=" bg-primary-100 pt-12">
				<H1>Get your favorites for free</H1>
				<div className="flex justify-around items-start text-center mt-4">
					<TabHeading className="w-full">
						25<span className=" text-gray-500">&#9733;</span>
					</TabHeading>
					<TabHeading className="w-full">
						50<span className=" text-gray-500">&#9733;</span>
					</TabHeading>
					<TabHeading className="w-full border-b-4 pb-4 border-primary-300">
						100<span className=" text-gray-500">&#9733;</span>
					</TabHeading>
					<TabHeading className="w-full">
						200<span className=" text-gray-500">&#9733;</span>
					</TabHeading>
					<TabHeading className="w-full">
						400<span className=" text-gray-500">&#9733;</span>
					</TabHeading>
				</div>
			</div>
			<div className=" bg-primary-200 text-center px-4 py-8">
				<img src={img150} alt=""></img>
				<div className="mt-4 px-4">
					<H2>Handcrafted drink, hot breakfast or parfait</H2>
					<P className="mt-4">
						Have a really good morning with a breakfast sandwich, oatmeal or
						your favorite drink.
					</P>
				</div>
			</div>
		</section>
	);
};

CardSection.defaultProps = {};

export default CardSection;
