import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import Counter from './Counter';
import Todos from './Todos';

const Navigation = () => {
	return (
		<>
			<div>
				<Link to="/memo">todos</Link>
			</div>
			<div>
				<Link to="/counter">counter</Link>
			</div>
		</>
	);
};

export default Navigation;
