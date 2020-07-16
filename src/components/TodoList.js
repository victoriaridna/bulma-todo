import React, {Component} from "react";
import Hero from "react-bulma-components/lib/components/hero";
import Cards from './Cards';
import TodoInput from './TodoInput';
import {Heading} from 'react-bulma-components/src';

class TodoList extends Component {
	render() {
		return (
			<Hero color="info" size='large'>
				<Hero.Head>
					<Heading>Bulma Todo List</Heading>
				</Hero.Head>
				<Hero.Body>
					<TodoInput/>
					<Cards/>
				</Hero.Body>
			</Hero>
		);
	}
}

export default TodoList;