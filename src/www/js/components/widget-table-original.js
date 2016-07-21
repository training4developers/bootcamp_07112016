import React from 'react';

export class WidgetTableComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			widget: {
				id: -1,
				name: 'test',
				description: 'test',
				color: 'red',
				size: 'large',
				quantity: 23,
				ownerId: 2
			}
		};

		this.inputTextChange = this.inputTextChange.bind(this);
		this.saveWidget = this.saveWidget.bind(this);
	}

	saveWidget() {
		const widget = this.state.widget;
		widget.quantity = parseInt(widget.quantity, 10);
		this.props.onSave(Object.assign({}, widget, { owner: {
			id: widget.ownerId,
			name: 'Bob'
		} }));	
	}

	inputTextChange(e) {
		this.setState({
			widget: Object.assign({}, this.state.widget, { [e.target.name]: e.target.value })
		});
	}

	render() {
		return <div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Color</th>
					</tr>
				</thead>
				<tbody>
					{this.props.widgets.edges.map(edge => <tr key={edge.node.id}>
						<td>{edge.node.name}</td>
						<td>{edge.node.color}</td>
					</tr>)}
				</tbody>
			</table>
			<form>
				<div>
					<label>Name: <input type="text" name="name" value={this.state.widget.name} onChange={this.inputTextChange} /></label>
				</div>
				<div>
					<label>Description: <input type="text" name="description" value={this.state.widget.description} onChange={this.inputTextChange} /></label>
				</div>
				<div>
					<label>Color: <input type="text" name="color" value={this.state.widget.color} onChange={this.inputTextChange} /></label>
				</div>
				<div>
					<label>Size: <input type="text" name="size" value={this.state.widget.size} onChange={this.inputTextChange} /></label>
				</div>
				<div>
					<label>Quantity: <input type="text" name="quantity" value={this.state.widget.quantity} onChange={this.inputTextChange} /></label>
				</div>
				<div>
					<label>Owner Id: <input type="text" name="ownerId" value={this.state.widget.ownerId} onChange={this.inputTextChange} /></label>
				</div>
				<button type="button" onClick={this.saveWidget}>Save</button>
			</form>
		</div>;
	}
}