import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
export default combineReducers({
	counter,
	todos,
	//다른 리듀서를 만들게 되면 여기에 import
});
