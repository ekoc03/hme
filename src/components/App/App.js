import React from 'react';
import './App.css';
import MainPage from '../MainPage';
import MenuPage from '../MenuPage';
import TimerPage from '../TimerPage';
import GamePage from '../GamePage';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage}/>
					<Route path="/menu" component={MenuPage}/>
					<Route path="/game" component={GamePage}/>
					<Route path="/setTimer" component={TimerPage}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
