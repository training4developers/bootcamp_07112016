import React from 'react';

import { showWidgets, showWidget } from '../actions/widgets';
import { widgetsStore } from '../stores/widgets';

import { WidgetTableComponent } from './widget-table';
import { WidgetViewComponent } from './widget-view';

export class WidgetManagerComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			widgets: [],
			widgetId: undefined
		};

		this._changeView = this._changeView.bind(this);
		this.selectWidget = this.selectWidget.bind(this);
	}

	componentDidMount() {
		widgetsStore.addViewListener(this._changeView);
	}

	componentWillUnmount() {
		widgetsStore.removeViewListener(this._changeView);
	}

	_changeView() {
		this.setState({
			widgetId: widgetsStore.getWidgetId(),
			widgets: widgetsStore.getWidgets()
		});
	}

	selectWidget(widgetId) {

		if (widgetId) {
			showWidget(widgetId);
		} else {
			showWidgets();
		}

	}

	render() {

		return this.state.widgetId
			? <WidgetViewComponent widget={this.state.widgets.find(widget => widget.id === this.state.widgetId)} viewTable={this.selectWidget} />
			: <WidgetTableComponent widgets={this.state.widgets} viewWidget={this.selectWidget} />;

	}


}