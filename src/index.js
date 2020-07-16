import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'components/TodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<TodoList />
	</Provider>,
	document.getElementById('root'),
);
