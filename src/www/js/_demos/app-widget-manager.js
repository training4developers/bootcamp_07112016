import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { showWidgets } from './actions/widgets';

import { WidgetManagerComponent } from './components/widget-manager';

ReactDOM.render(<WidgetManagerComponent />, document.querySelector('main'));

showWidgets();