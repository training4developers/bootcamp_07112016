import { createStore, combineReducers } from 'redux';

const INCREMENT = 'INCREMENT';

const incrementAction = () => ({ type: INCREMENT });

// code from the store for handling actions
const reducer = (state = { i: 0 }, action) => {

	switch (action.type) {

		case INCREMENT: 
			state = Object.assign({}, state, { i: ++state.i });
			break;
	}

	return state;
};

const reducer2 = (state = { i: 0 }, action) => {

	switch (action.type) {

		case INCREMENT: 
			state = Object.assign({}, state, { i: ++state.i });
			break;
	}

	return state;
};


// store object itself
const store = createStore(combineReducers(reducer, reducer2));

// flux add change listener
const unsubscribe = store.subscribe(() => {
	console.log(store.getState().i);
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());


// flux remove change listener
unsubscribe();

