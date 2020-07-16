import React, { Component } from 'react';
import { Field, Control, Input } from 'react-bulma-components/lib/components/form';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {Button, Icon} from 'react-bulma-components/src';

class TodoInput extends Component {
	state = {
			todo: '',
	};

	handleSubmit = e => {
		if (e.which === 13) {
			this.state.todo && addTodo(this.state.todo);
			this.setState({ todo: '' });
		}
	};

	handleChange = e => {
		this.setState({ todo: e.target.value });
	};

	handleButtonTapped = e => {
		this.props.onSave(this.state.todo)
	}

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
						<Icon align="right" icon="add" color="info"/>
					</Control>
				</Field>
		);
	}
}

export default connect(null, {addTodo})(TodoInput)