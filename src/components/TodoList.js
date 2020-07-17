import React, {Component} from "react";
import {connect} from 'react-redux';
import Hero from "react-bulma-components/lib/components/hero";
import Cards from './Cards';
import TodoInput from './TodoInput';
import {Container, Heading} from 'react-bulma-components/src';
import {
	completeTodo,
	deleteTodo,
	editTodo,
	saveTodo,
	addTodo
} from '../actions';

class TodoList extends Component {
	render() {
		const {todos, completeTodo, deleteTodo, editTodo, saveTodo, addTodo} = this.props;
		return (
			<Hero color="info" size='large'>
				<Hero.Body>
					<Container>
						<Heading>TODO LIST</Heading>
						<p>Bulma React Redux</p>
						<TodoInput
							addTodo={addTodo}
						/>
						<Cards
							todos={todos}
							completeTodo={completeTodo}
							deleteTodo={deleteTodo}
							editTodo={editTodo}
							saveTodo={saveTodo}
						/>
					</Container>
				</Hero.Body>
			</Hero>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(
	mapStateToProps,
	{addTodo, completeTodo, deleteTodo, editTodo, saveTodo}
)(TodoList);
