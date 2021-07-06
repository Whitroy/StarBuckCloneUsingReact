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
import ConfirmationDialog from "./Components/Utility/ConfirmationDialog";

import React, { useState } from "react";

function App() {
	const [isShowing, SetIsShowing] = useState(false);
	return (
		<div className=" font-sans">
			<Router>
				<ConfirmationDialog
					onClose={SetIsShowing}
					desc="Do you really want to delete these records? This process cannot be undone."
					open={isShowing}
				/>
				<Nav />
				<Header />
				<div className="p-6 m-auto text-center space-y-5 bg-red-100">
					<h1 className="text-2xl font-bold">Dialog Demo Section</h1>
					<button
						className=" bg-primary-300 rounded-xl px-4 py-1.5 font-bold  text-white shadow-xl hover:bg-red-400"
						onClick={() => {
							SetIsShowing((open) => !open);
						}}
					>
						Demo Button
					</button>
				</div>
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
