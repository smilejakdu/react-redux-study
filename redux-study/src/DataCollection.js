import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DataCollection = () => {
	const number = useSelector((state) => state.counter.number);
	const todos = useSelector((state) => state.todos.todos);
	// const dispatch = useDispatch();

	return (
		<div>
			{number}
			{todos.map((todo) => (
				<div>
					<div>{todo.id}</div>
					<div>{todo.text}</div>
				</div>
			))}
		</div>
	);
};

export default DataCollection;
