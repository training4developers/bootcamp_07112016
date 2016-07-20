import 'bootstrap-loader';
import '../css/styles.scss';

import { createStore } from 'redux';
import keyMirror from 'key-mirror';
import React from 'react';
import ReactDOM from 'react-dom';

const actionTypes = keyMirror({
	REQUEST_WIDGETS: null,
	RECEIVE_WIDGETS: null
});

const requestWidgets = () => ({
	type: actionTypes.REQUEST_WIDGETS,
});

const receiveWidgets = widgets => ({
	type: actionTypes.RECEIVE_WIDGETS,
	widgets,
	receivedAt: Date.now()
});

const fetchWidgets = dispatch => {
	dispatch(requestWidgets());
	fetch('/api/widgets')
		.then(res => res.json())
		.then(results => dispatch(receiveWidgets(results)));
};

const widgets = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.REQUEST_WIDGETS:
			return {
				widgets: []
			};
		case actionTypes.RECEIVE_WIDGETS:
			return {
				widgets: action.widgets
			};
		default:
			return state;
	}

};

const store = createStore(widgets);



class WidgetListComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			widgets: []
		};
	}

	componentDidMount() {
		this.storeUnsubscribe = this.props.store.subscribe(() => {
			this.setState(this.props.store.getState());
		});

		fetchWidgets(this.props.store.dispatch.bind(this.props.store));
	}

	componentWillUnmount() {
		this.storeUnsubscribe();
	}

	render() {
		return <div><h1>Widget List</h1><ul>{this.state.widgets.map(widget => <li key={widget._id}>{widget.name}</li>)}</ul></div>;
	}
}

ReactDOM.render(<WidgetListComponent store={store} />, document.querySelector('main'));