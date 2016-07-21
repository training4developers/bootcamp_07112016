import 'bootstrap-loader';
import '../css/styles.scss';



function outer() {

	console.dir(this);

	//var that = this;

	var inner = () => {
		console.dir(this);
	};

	// function inner() {
	// 	console.dir(that);
	// }

	inner();
}

outer.call({ id: 2 });