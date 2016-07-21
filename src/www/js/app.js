import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import Relay from 'react-relay';	
import ReactDOM from 'react-dom';

import WidgetToolContainer from './containers/widget-tool-container';
import ViewerRoute from './routes/viewer-route';

ReactDOM.render(
	<Relay.RootContainer Component={WidgetToolContainer} route={new ViewerRoute()} />,
	document.querySelector('main')
);

// const newWidget = {
// 	name: 'te\\\"st',
// 	description: 'test',
// 	color: 'red',
// 	size: 'large',
// 	quantity: 23,
// 	owner: {
// 		id: 2,
// 		name: 'Tom'
// 	}
// };

// const query = `mutation {
//   insertWidget(widget: {
//     name: "${newWidget.name}",
//     description: "${newWidget.description}",
//     color: "${newWidget.color}",
//     size: "${newWidget.size}",
//     quantity: ${newWidget.quantity},
//     owner: {
//       id: ${newWidget.owner.id},
//       name: "${newWidget.owner.name}"
//     }}) {
//     id,
//     name,
//     description,
//     color,
//     size,
//     quantity,
//     owner {
//       id,
//       name
//     }
//   }
// }`;

// const requestBody = {
// 	query,
// 	variables: null,
// 	operationName: null
// };

// //fetch('/graphql-original?query={widgets{id,name,description}}')

// fetch('/graphql-original', {
// 	method: 'POST',
// 	body: JSON.stringify(requestBody),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// }).then(res => res.json())
// 	.then(results => console.dir(results.data));
