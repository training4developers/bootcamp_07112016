// import 'bootstrap-loader';
import '../css/styles.scss';

// function mul(x,y) {
// 	return x * y;
// }

// const mul = (x,y) => x * y;

// console.log(mul(1,2));

// (function() {
// 	console.log('do something');
// })();

// import React from 'react';

// import { doIt as somethingElse } from './my-module';

//myVeryFirstFunction();

// console.log(somethingElse);

function Person(fn, ln) {
	this.fn = fn;
	this.ln = ln;

}

var p = new Person('Bob','Martin');

class Person2 {

	constructor(fn, ln) {
		this.fn = fn;
		this.ln = ln;
	}

	getFullName() {
		return this.fn + ' ' + this.ln;
	}

}

class Student extends Person2 {
	constructor(id, fn, ln) {
		super(fn, ln);
		this.id = id;
	}
}

var p = new Person2('Jim','Stevens');
console.log(p.getFullName());

var s = new Student(1, 'Jim','Stevens');
console.log(s.getFullName());

console.log(typeof Person);
console.log(typeof Person2);