import {loadState, saveState} from './localStorage';
import {createStore} from 'redux';
import rootReducer from './reducers';

const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	saveState({
		todos: store.getState().todos
	});
});

export default store