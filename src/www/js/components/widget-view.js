import React from 'react';

export const WidgetViewComponent = props => <div>
	<div>Id: {props.widget.id}</div>
	<div>Name: {props.widget.name}</div>
	<div>Color: {props.widget.color}</div>
	<button onClick={props.viewTable.bind(null, undefined)}>Go Home</button>
</div>;