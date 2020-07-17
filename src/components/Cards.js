import React from 'react';
import DefaultCard from './DefaultCard';

const Cards = ({todos, completeTodo, deleteTodo, editTodo, saveTodo}) => (
	todos.map((todo, i) => (
		<DefaultCard
			key={i}
			id={todo.id}
			text={todo.text}
			completed={todo.completed}
			editing={todo.editing}
			dateCreated={todo.dateCreated}
			deleteTodo={deleteTodo}
			completeTodo={completeTodo}
			editTodo={editTodo}
			saveTodo={saveTodo}
		/>
	))
);

export default Cards;