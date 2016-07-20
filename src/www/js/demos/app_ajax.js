import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

function ajax(options) {

	return new Promise(resolve => {

		const xhr = new XMLHttpRequest();

		xhr.addEventListener('readystatechange', () => {

			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}

		});

		xhr.open(options.method, options.url);
		xhr.send();

	});


}

ajax({
	method: 'GET',
	url: '/api/widgets',
	//success: 
}).then(function(results) {
	console.log(results);
	ReactDOM.render(<WidgetTable widgets={results} />, document.querySelector('main'));
});

const WidgetTable = props => <table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Color</th>
			<th>Size</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		{props.widgets.map(widget => <ViewRow key={widget._id} widget={widget} />)}
	</tbody>
</table>;


const ViewRow = props => {

	const onEditClick = () => {
		console.log(props.widget._id);
	};
	
	return <tr>
		<td>{props.widget.name}</td>
		<td>{props.widget.color}</td>
		<td>{props.widget.size}</td>
		<td><button onClick={onEditClick}>Edit</button></td>
	</tr>;
};