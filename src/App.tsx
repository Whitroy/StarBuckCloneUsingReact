import Nav from "./Components/Main/Nav";
import Header from "./Components/Main/Header";
import HeroSection from "./Components/Main/HeroSection";
import StepSection from "./Components/Main/StepSection";
import CardSection from "./Components/Main/CardSection";
import ImgSection from "./Components/Main/ImgSection";

function App() {
	return (
		<div className=" font-sans">
			<Nav />
			<Header />
			<HeroSection />
			<StepSection
				title="Getting started is easy"
				desc="Earn Stars and get rewarded in a few easy steps."
			></StepSection>
			<CardSection />
			<ImgSection
				title="Endless Extras"
				desc="Joining Starbucks&reg; Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee."
			></ImgSection>
		</div>
	);
}

export default App;
