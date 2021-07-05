import Nav from "./Components/Main/Nav";
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Reward from "./Components/Main/Reward";
import Gift from "./Components/Main/Gift";
import PageNotFound from "./Components/Main/PageNotFound";

function App() {
	return (
		<div className=" font-sans">
			<Router>
				<Nav />
				<Header />
				<Switch>
					<Redirect from="/" to="/rewards" exact />
					<Route path="/rewards">
						<Reward />
					</Route>
					<Route path="/gifts">
						<Gift />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
