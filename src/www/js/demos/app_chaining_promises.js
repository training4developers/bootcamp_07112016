import 'bootstrap-loader';
import '../css/styles.scss';

const youngMan = new Promise(function youngLady(resolve, reject) {

	setTimeout(function() {
		resolve('I really love you Princeton...');
		//reject('she fell in love with his best friend...');
	}, 2000);

});

youngMan.then(function(results) {
	console.log(results);
	console.log('Princeton is getting married!');

	const prenup = new Promise(function(resolve) {
		setTimeout(function() {
			resolve('paid attorney $1000 to protect my $100 assests');
		}, 2000);
	});

	return prenup;

}).then(function(results) {

	console.log(results);
	console.log('time to get wedding clothes...');

}).catch(function(results) {
	console.log(results);
	console.log('is going to sign up with eharmony');
});

console.log('young man is waiting...');