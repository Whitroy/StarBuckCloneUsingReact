import React from "react";
import Content from "../Utility/Content";

interface Props {
	src: string;
	title: string;
	desc: string;
}

const TabContent: React.FC<Props> = ({ src, title, desc }) => {
	return (
		<div className=" bg-primary-200 text-center px-4 py-8">
			<div className="md:max-w-2xl md:m-auto md:flex">
				<img className="md:max-h-52" src={src} alt=""></img>
				<Content
					title={title}
					className="mt-4 md:ml-6 text-center md:text-left"
				>
					{[desc]}
				</Content>
			</div>
		</div>
	);
};

TabContent.defaultProps = {};

export default React.memo(TabContent);
