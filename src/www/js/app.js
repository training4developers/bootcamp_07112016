import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','saffron','blue'];

const cars = [
	{ id: 1, make: 'Ford', model: 'Fusion', year: 2003, color:'hot pink', mileage: 20 },
	{ id: 2, make: 'Toyota', model: 'Sienna', year: 2014, color:'fuschia', mileage: 300 }
];

// class ColorList extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			colorsItems: props.colorsItems.concat(),
// 			newColor: ''
// 		};

// 		this.onChange = this.onChange.bind(this);
// 	}

// 	onChange(e) {
// 		this.setState({
// 			newColor: e.target.value
// 		});
// 	}

// 	render() {

// 		//console.dir(this.props.colors);

// 		// const colorItems = [];

// 		// this.props.colorsItems.forEach(function(color) {
// 		// 	colorItems.push(<li key={color}>{color}</li>);
// 		// });

// 		return <div>
// 			<ul>
// 				{this.state.colorsItems.map(color => <li key={color}>{color}</li>)}
// 			</ul>
// 			<label>
// 				New Color
// 				<input type="text" name="newColor"
// 					value={this.state.newColor} onChange={this.onChange} />
// 			</label>
// 		</div>;
// 	}

// }

class CarManager extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			cars: props.cars.concat(),
		};

		this.addCar = this.addCar.bind(this);
	}

	addCar(newCar) {
		this.setState({
			cars: this.state.cars.concat(newCar)
		});
	}

	render() {
		return <div>
			<CarTable cars={this.state.cars} />
			<CarForm addCar={this.addCar} />
		</div>;
	}

}

const CarTable = props => <table>
				<thead>
					<tr>
						<th>Make</th>
						<th>Model</th>
						<th>Year</th>
						<th>Color</th>
						<th>Mileage</th>
					</tr>
				</thead>
				<tbody>
					{props.cars.map(car => <tr key={car.id}>
						<td>{car.make}</td>
						<td>{car.model}</td>
						<td>{car.year}</td>
						<td>{car.color}</td>
						<td>{car.mileage}</td>
					</tr>)}
				</tbody>
			</table>;

class CarForm extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			newCar: {
				make: '', model: '', year: 0, color: '', mileage: 0
			}
		};

		this.onChange = this.onChange.bind(this);
		this.addCar = this.addCar.bind(this);		

	}

	onChange(e) {
		this.setState({
			newCar: Object.assign({}, this.state.newCar, { [e.target.name]: e.target.value })
		});
	}

	addCar() {
		this.props.addCar(this.state.newCar);
		this.setState({
			newCar: {
				make: '', model: '', year: 0, color: '', mileage: 0
			}
		});
	}	

	render() {

		return <form>
			<label>Make <input type="text" name="make"
				value={this.state.newCar.make} onChange={this.onChange} />
			</label>
			<label>Model <input type="text" name="model"
				value={this.state.newCar.model} onChange={this.onChange} />
			</label>
			<label>Year <input type="text" name="year"
				value={this.state.newCar.year} onChange={this.onChange} />
			</label>
			<label>Color <input type="text" name="color"
				value={this.state.newCar.color} onChange={this.onChange} />
			</label>
			<label>Mileage <input type="text" name="mileage"
				value={this.state.newCar.mileage} onChange={this.onChange} />
			</label>
			<button type="button" onClick={this.addCar}>Add Car</button>
		</form>;

	}

}

// class HelloWorld extends React.Component {

// 	render() {
// 		return <h1>Hola Mundo!</h1>;
// 		//return React.createElement('h1', null, 'Hola Mundo!');
// 	}

// }

ReactDOM.render(<CarManager cars={cars} />, document.querySelector('main'));

