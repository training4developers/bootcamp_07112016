import 'bootstrap-loader';
import '../css/styles.scss';


const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(() => console.log('p1 resolved'));
p2.then(() => console.log('p2 resolved'));
p3.then(() => console.log('p3 resolved'));
p4.then(() => console.log('p4 resolved'));

const p5 = Promise.all([p1, p2]);

p5.then(function() {
	console.log('p5 done');
});

Promise.all([p5, p3, p4]).then(results => {
	console.log(results);
	console.log('all done');
}).catch(function(results) {
	console.log(results);
	console.log('one failed');
});