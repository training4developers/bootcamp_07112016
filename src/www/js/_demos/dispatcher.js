import { Dispatcher } from 'flux';

export const dispatcher = new Dispatcher();


// class Dispatcher {

// 	constructor() {
// 		this.callbacks = [];
// 	}

// 	dispatch(action) {
// 		this.callbacks.forEach(cb => cb(action));
// 	}

// 	register(cb) {
// 		this.callbacks.push(cb);
// 	}

// }