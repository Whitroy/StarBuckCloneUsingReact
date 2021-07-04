import React from "react";
import Content from "./Content";
interface Props {
	title: string;
	src: string;
	className?: string;
}

const ImgContent: React.FC<Props> = (props) => {
	return (
		<div className={props.className + " flex"}>
			<img src={props.src} alt="" className=" h-40"></img>
			<Content title={props.title} className=" ml-6 mt-0 md:max-w-sm">
				{props.children}
			</Content>
		</div>
	);
};

ImgContent.defaultProps = {
	className: "",
};

export default ImgContent;
