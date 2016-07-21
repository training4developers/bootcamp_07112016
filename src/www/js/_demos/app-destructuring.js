import 'bootstrap-loader';
import '../css/styles.scss';

// var o = {
// 	fn: 'Emma',
// 	ln: 'Stone',
// 	//age: 27
// };

//const { fn, ln, age } = o;

// const t = ({ fn = 'Aubrey', ln = 'Plaza', age = 23 }) => {
// 	console.log(fn);
// 	console.log(ln);
// 	console.log(age);
// };


// const t = ({ address: { city } }) => {
// 	console.log(city);
// };

// t({ address: { city: 'Miami', state: 'FL' } });

//t({ fn:'Emma', ln: 'Poe' });

// const q = (g = 2, h = 4) => {
// 	console.log(g);
// 	console.log(h);
// };
// q(6);


const items = ['bed','fridge','lights','internet'];

const [first, ...leftOver] = items;

console.log(first);
console.log(leftOver);

function doIt(p1, p2, ...allTheOtherPs) {
	console.log(p1);
	console.log(p2);
	console.log(allTheOtherPs);
}

doIt(1,2,3,4,5,6,7,8);

function doIt2(p1,p2,p3) {
	console.log(p1);
	console.log(p2);	
	console.log(p3);	
}

doIt2(...[1,2,3]);