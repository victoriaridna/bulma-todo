import React, { Component } from 'react';
import { Field, Control, Input } from 'react-bulma-components/lib/components/form';
import {Icon} from 'react-bulma-components/src';

class TodoInput extends Component {
	state = {
			todo: '',
	};

	handleSubmit = e => {
		if (e.which === 13) {
			if(this.state.todo.length){
				this.props.addTodo(this.state.todo);
			}
			this.setState({ todo: '' });
		}
	};

	handleChange = e => {
		this.setState({ todo: e.target.value });
	};

	render() {
		return (
				<Field>
					<Control iconRight>
						<Input
							type="text"
							name="task"
							placeholder="Enter a task"
							value={this.state.todo}
							onChange={this.handleChange}
							onKeyDown={this.handleSubmit}
						/>
						<Icon align="right" icon="angle-down" color="info"/>
					</Control>
				</Field>
		);
	}
}

export default TodoInput;