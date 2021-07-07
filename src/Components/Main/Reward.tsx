import React from "react";
import CardSection from "../RewardPage/CardSection";
import HeroSection from "../RewardPage/HeroSection";
import ImgSection from "../RewardPage/ImgSection";
import InfoSection from "../RewardPage/InfoSection";
import StepSection from "../RewardPage/StepSection";
import SubmitSection from "../RewardPage/SubmitSection";
import TermAndCondSection from "../RewardPage/TermAndCondSection";
import Header from "./Header";

interface Props {}

const Reward: React.FC<Props> = (props) => {
	return (
		<>
			<Header />
			<HeroSection />
			<StepSection
				title="Getting started is easy"
				desc="Earn Stars and get rewarded in a few easy steps."
			/>
			<CardSection />
			<ImgSection
				title="Endless Extras"
				desc="Joining Starbucks&reg; Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee."
			/>
			<InfoSection
				title="Cash or card, you earn Stars"
				desc="No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards."
			/>
			<SubmitSection />
			<TermAndCondSection />
		</>
	);
};

Reward.defaultProps = {};

export default React.memo(Reward);
