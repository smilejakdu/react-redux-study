import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
	return (
		<div>
			<input
				type="checkbox"
				onClick={() => onToggle(todo.id)}
				checked={todo.done}
				readOnly={true}
			/>
			<span type={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
				{todo.text}
			</span>
			<button onClick={() => onRemove(todo.id)}>delete</button>
		</div>
	);
};

const Todos = ({
	input,
	todos,
	onChangeInput,
	onInsert,
	onToggle,
	onRemove,
}) => {
	const onSubmit = (e) => {
		e.preventDefault();
		onInsert(input);
		onChangeInput(''); // 등록 후 인풋 초기화
	};
	const onChange = (e) => onChangeInput(e.target.value);
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={input} onChange={onChange} />
				<button type="submit">register</button>
			</form>
			<div>
				{todos.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
						onToggle={onToggle}
						onRemove={onRemove}
					/>
				))}
			</div>
		</div>
	);
};

export default Todos;
