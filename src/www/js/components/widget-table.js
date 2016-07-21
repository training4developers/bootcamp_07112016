import React from 'react';

export class WidgetTableComponent extends React.Component {

	render() {

		console.dir(this.props);

		return <table>
			<tr>
				<th>Name</th>
				<th>Color</th>
			</tr>
			{this.props.widgets.edges.map(edge => <tr key={edge.node.id}>
				<td>{edge.node.name}</td>
				<td>{edge.node.color}</td>
			</tr>)}
		
		</table>;
	}


}