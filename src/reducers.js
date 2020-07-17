import {combineReducers} from 'redux';
import {
	ADD_TODO,
	COMPLETE_TODO,
	EDIT_TODO,
	DELETE_TODO,
	SAVE_TODO
} from './constants/ActionTypes';

const initialState = [
	{
		id: 1,
		text: 'Create React App',
		completed: false,
		dateCreated: new Date().toLocaleString('ru'),
		editing: false
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
					dateCreated: new Date().toLocaleString('ru'),
					editing:false
				},
			];

		case EDIT_TODO:
			return state.map(t => (t.id === action.id) ? {...t, editing: true} : t);

		case SAVE_TODO:
			console.log(action.id);
			return state.map(t => (t.id === action.id) ?
				{...t, text: action.text, dateCreated: new Date().toLocaleString('ru'), editing: false}
				: t);

		case COMPLETE_TODO:
			return state.map(t => (t.id === action.id) ? {...t, completed: true} : t);

		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.id);

		default:
			return state;
	}
};


export default combineReducers({
	todos
});