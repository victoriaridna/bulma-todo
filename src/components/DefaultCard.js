import React, {Component} from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Tag from 'react-bulma-components/lib/components/tag';
import {Button} from 'react-bulma-components/src';
import {Input} from 'react-bulma-components/src/components/form';

class DefaultCard extends Component {
	state = {
		newText: this.props.text
	};

	handleEdit = e => {
		this.setState({
			newText: e.target.value
		});
	};

	handleSave = () => {
		const {id, saveTodo} = this.props;
		if(this.state.newText.length){
			saveTodo(id, this.state.newText);
		}
	}

	handleKeyDown = e => {
		if (e.which === 13) {
			this.handleSave()
		}
	}

	render() {
		const {id, text, completed, editing, dateCreated, deleteTodo, editTodo, completeTodo} = this.props;
		return (
			<Card key={id}
						style={completed ? {
							color: '#eee',
							marginTop: '10px'
						} : {marginTop: '10px'}}>
				<Card.Header>
					{editing
						? <Input type="text"
										 value={this.state.newText}
										 onChange={this.handleEdit}
										 onKeyDown={this.handleKeyDown}/>
						: <Card.Header.Title
							style={completed ? {textDecoration: 'line-through'} : null}>
							{text}
						</Card.Header.Title>
					}
					<Card.Header.Icon>
						<Tag color='light'>#{id}</Tag>
					</Card.Header.Icon>
				</Card.Header>
				<Card.Content>
					<time>Date created: {dateCreated}</time>
				</Card.Content>
				<Card.Footer>
					<Card.Footer.Item>
						<Button color='danger' outlined={true}
										onClick={() => deleteTodo(id)}>
							Delete
						</Button>
					</Card.Footer.Item>
					<Card.Footer.Item>
						{editing
							? <Button color='success' outlined={true}
												onClick={this.handleSave}>
								Save
							</Button>
							: <Button color='info' outlined={true}
												onClick={() => editTodo(id)}>
								Edit
							</Button>
						}
					</Card.Footer.Item>
					<Card.Footer.Item>
						<Button color='primary' outlined={true}
										onClick={() => completeTodo(id)}>
							Done
						</Button>
					</Card.Footer.Item>
				</Card.Footer>
			</Card>
		);
	}
};

export default DefaultCard;