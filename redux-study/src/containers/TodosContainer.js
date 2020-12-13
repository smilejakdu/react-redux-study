import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../Todos';
import DataCollection from '../DataCollection';
import Navigation from '../Navigation';
const TodosContainer = () => {
	const { input, todos } = useSelector(({ todos }) => ({
		input: todos.input,
		todos: todos.todos,
	}));
	const dispatch = useDispatch();
	return (
		<div>
			<Navigation />
			<Todos
				input={input}
				todos={todos}
				onChangeInput={() => dispatch(changeInput())}
				onInsert={() => dispatch(insert())}
				onToggle={() => dispatch(toggle())}
				onRemove={() => dispatch(remove())}
			/>
			<DataCollection />
		</div>
	);
};

export default React.memo(TodosContainer);
