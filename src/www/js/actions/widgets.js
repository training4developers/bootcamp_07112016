import { actionTypes } from '../actions';
import { dispatcher } from '../dispatcher';

const widgets = [
	{ id: 1, name: 'Widget 1', color: 'blue' },
	{ id: 2, name: 'Widget 2', color: 'red' }
];

export const showWidgets = () => {

	dispatcher.dispatch({
		type: actionTypes.SHOW_WIDGETS,
		widgets: widgets
	});

};

export const showWidget = id => {

	dispatcher.dispatch({
		type: actionTypes.SHOW_WIDGET,
		widgetId: id
	});
};