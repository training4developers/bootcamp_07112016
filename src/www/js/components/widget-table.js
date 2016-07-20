import React from 'react';

export const WidgetTableComponent = props => <div>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Color</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{props.widgets.map(widget => <tr key={widget.id}>
				<td>{widget.name}</td>
				<td>{widget.color}</td>
				<td><button onClick={props.viewWidget.bind(null, widget.id)}>View</button></td>
			</tr>)}
		</tbody>
	</table>
</div>;