import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 2; // insert 가 호출될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, (text) => ({
	id: id++,
	text,
	done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
	input: '',
	todos: [
		{
			id: 1,
			text: 'test',
			done: true,
		},
	],
};

const todos = handleActions(
	{
		[CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
		[INSERT]: (state, { payload: todo }) => ({
			...state,
			todos: state.todos.concat(todo),
		}),
		[TOGGLE]: (state, { payload: id }) => ({
			...state,
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			),
		}),
		[REMOVE]: (state, { payload: id }) => ({
			...state,
			todos: state.todos.filter((todo) => todo.id !== id),
		}),
	},
	initialState
);

export default todos;