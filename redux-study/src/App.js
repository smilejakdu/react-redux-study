import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodosContainer from './containers/TodosContainer';
import DataCollection from './DataCollection';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/counter">
							<CounterContainer />
						</Route>
						<Route exact path="/memo">
							<TodosContainer />
						</Route>
						<Route exact path="/datacollection">
							<DataCollection />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
