import React from "react";
import img25 from "../../Img/25_TAB_IMAGE.webp";
import img50 from "../../Img/50_TAB_IMAGE.webp";
import img150 from "../../Img/150_TAB_IMAGE.webp";
import img200 from "../../Img/200_TAB_IMAGE.webp";
import img400 from "../../Img/400_TAB_IMAGE.webp";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabContent from "./TabContent";

interface Props {}

const tabContent = [
	{
		src: img25,
		title: (
			<span>
				25<span className=" text-secondary-200 text-sm">&#9733;</span>
			</span>
		),
		content:
			"Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
		ContentTitle: "Customize your drink",
	},
	{
		src: img50,
		title: (
			<span>
				50<span className=" text-secondary-200 text-sm">&#9733;</span>
			</span>
		),
		content:
			"Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
		ContentTitle: "Brewed hot coffee, bakery item or hot tea",
	},
	{
		src: img150,
		title: (
			<span>
				150<span className=" text-secondary-200 text-sm">&#9733;</span>
			</span>
		),
		content:
			"Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
		ContentTitle: "Handcrafted drink, hot breakfast or parfait",
	},
	{
		src: img200,
		title: (
			<span>
				200<span className=" text-secondary-200 text-sm">&#9733;</span>
			</span>
		),
		content:
			"Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
		ContentTitle: "Salad, sandwich or protein box",
	},
	{
		src: img400,
		title: (
			<span>
				400<span className=" text-secondary-200 text-sm">&#9733;</span>
			</span>
		),
		content:
			"Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
		ContentTitle: "Select merchandise or at-home coffee",
	},
];

const CardSection: React.FC<Props> = (props) => {
	return (
		<section>
			<Tabs>
				{tabContent.map((tab) => (
					<Tab title={tab.title}>
						<TabContent
							title={tab.ContentTitle}
							src={tab.src}
							desc={tab.content}
						/>
					</Tab>
				))}
			</Tabs>
		</section>
	);
};

CardSection.defaultProps = {};

export default React.memo(CardSection);
