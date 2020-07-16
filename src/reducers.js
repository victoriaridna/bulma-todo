import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO } from './constants/ActionTypes';

const initialState = [
	{
		id: 0,
		text: 'Create React App',
		completed: false,
		dateCreated: new Date().getUTCDate()
	},
];

const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					completed: false,
					text: action.text,
					dateCreated: new Date()
				},
			];

		case COMPLETE_TODO:
			return state.filter(todo => todo.id !== action.id)

		default:
			return state;
	}
}


export default combineReducers({
	todos
})