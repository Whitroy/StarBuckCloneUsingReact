import Nav from "./Components/Main/Nav";
import Header from "./Components/Main/Header";
import HeroSection from "./Components/Main/HeroSection";
import StepSection from "./Components/Main/StepSection";
import CardSection from "./Components/Main/CardSection";
import ImgSection from "./Components/Main/ImgSection";
import InfoSection from "./Components/Main/InfoSection";
import SubmitSection from "./Components/Main/SubmitSection";

function App() {
	return (
		<div className=" font-sans">
			<Nav />
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
		</div>
	);
}

export default App;
