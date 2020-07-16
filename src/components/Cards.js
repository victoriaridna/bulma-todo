import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions';
import {Button, Heading} from 'react-bulma-components/src';
import Card from 'react-bulma-components/lib/components/card';
import Tag from 'react-bulma-components/lib/components/tag';
import {Checkbox} from 'react-bulma-components/lib/components/form';

const Cards = ({todos, actions}) => (
	todos.map((todo, i) => (
		<Card key={todo.id}>
			<Card.Header>
				<Card.Header.Title>
					<Tag color='light'>#{i++}</Tag>
					<Heading>{todo.text}</Heading>
					<Button>
						<Checkbox checked={todo.completed}
											onChange={() => actions.completeTodo(todo.id)}>
						</Checkbox>
					</Button>
				</Card.Header.Title>
			</Card.Header>
			<Card.Content>
				<time>Date created:</time>
			</Card.Content>
			<Card.Footer>
				<Card.Footer.Item>
					<Button color='danger' outlined={true}>
						Delete
					</Button>
				</Card.Footer.Item>
				<Card.Footer.Item>
					<Button color='primary' outlined={true}>
						Edit
					</Button>
				</Card.Footer.Item>
			</Card.Footer>
		</Card>
	))
);

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cards);
