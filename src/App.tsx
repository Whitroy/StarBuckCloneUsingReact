import Nav from "./Components/Main/Nav";
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

import { useState } from "react";
import AssginmentList from "./Components/Main/AssginmentList";
import Users from "./Components/Main/Users";

function App() {
	const [isShowing, SetIsShowing] = useState(false);
	return (
		<div className=" font-sans">
			<Router>
				<Switch>
					<Redirect from="/" to="/assigments" exact />
					<Route path="/rewards">
						<Nav />
						<Reward />
						<Footer />
					</Route>
					<Route path="/gift">
						<Nav />
						<Gift />
						<Footer />
					</Route>
					<Route path="/dialog">
						<div className="p-6 m-auto text-center space-y-5 bg-red-100 max-w-2xl shadow-lg rounded-md mt-36">
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
						<ConfirmationDialog
							onClose={SetIsShowing}
							desc="Do you really want to delete these records? This process cannot be undone."
							open={isShowing}
						/>
					</Route>
					<Route path="/assigments">
						<AssginmentList />
					</Route>
					<Route path="/userlist">
						<Users />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
