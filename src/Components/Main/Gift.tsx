import React from "react";
import Card from "../GiftPage/Card";
import CardCollection from "../GiftPage/CardCollection";

interface Props {}

const Gift: React.FC<Props> = (props) => {
	return (
		<>
			<CardCollection title="FEATURED" ImgSrc={["", "", "", ""]} />
			<CardCollection
				title="Thank You"
				ImgSrc={["", "", "", "", "", "", "", ""]}
			/>
		</>
	);
};

Gift.defaultProps = {};

export default React.memo(Gift);
