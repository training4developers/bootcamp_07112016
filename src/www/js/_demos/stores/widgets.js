import { actionTypes } from '../actions';
import { dispatcher } from '../dispatcher';
import { EventEmitter } from 'events';

let widgets = [];
let widgetId = undefined;

const EVENT_CHANGE = 'change';
const EVENT_VIEW = 'view';

class WidgetsStore extends EventEmitter {

	emitChange() {
		this.emit(EVENT_CHANGE);
	}

	addChangeListener(cb) {
		this.on(EVENT_CHANGE, cb);
	}

	removeChangeListener(cb) {
		this.removeListener(EVENT_CHANGE, cb);
	}

	emitView() {
		this.emit(EVENT_VIEW);
	}

	addViewListener(cb) {
		this.on(EVENT_VIEW, cb);
	}

	removeViewListener(cb) {
		this.removeListener(EVENT_VIEW, cb);
	}

	getWidgets() {
		return widgets;
	}

	getWidgetId() {
		return widgetId;
	}
}

export const widgetsStore = new WidgetsStore();

dispatcher.register(action => {

	switch (action.type) {
		case actionTypes.SHOW_WIDGETS:
			widgets = action.widgets.concat();
			widgetId = undefined;
			widgetsStore.emitView();
			break;
		case actionTypes.SHOW_WIDGET:
			widgetId = action.widgetId;
			widgetsStore.emitView();
			break;
	}

});