import 'bootstrap-loader';
import '../css/styles.scss';

// const nums = [1, 2, 3, 4, 5];

// // for (let x=0; x<nums.length; x++) {
// // 	nums[x] = nums[x] * 2;
// // 	if (nums[x] > 5) {
// // 		console.log(nums[x]);
// // 	}
// // }

// // for (let x=0; x<nums.length; x++) {

// // }

// const myNums = {
// 	nums: [1, 2, 3, 4, 5],
// 	[Symbol.iterator]: function* getNums() {
// 		for (let x = 0; x < nums.length; x++) {
// 			console.log('iterated getNums');
// 			yield nums[x] * 2;
// 		}
// 	}
// };

// const masterIdProp = Symbol();

// myNums[masterIdProp] = 3;


// for (let n of myNums) {
// 	//console.log('iterated of loop');
// 	//setTimeout(function() {
// 	console.log('timeout expired');
// 	if (n > 5) {
// 		console.log(n);
// 	}
// 	//},0);

// }


fetch('/api/widgets', {
	method: 'GET'
}).then(res => res.json()).then(widgets => console.log(widgets));