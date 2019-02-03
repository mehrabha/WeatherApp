import React from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const KEY = "6c6e5a128e48a672ba7bc5fd4d02ce36";

class App extends React.Component {
	constructor() {
		super();	// workaround

		this.state = {
			temp: undefined,
			city: undefined,
			description: undefined
		}

		this.getWeatherInfo = this.getWeatherInfo.bind(this);	// workaround
	}

	async getWeatherInfo (e) {

		// Prevent page refresh on submit
		e.preventDefault();

		// Store user inputs
		var zip = e.target.elements.Zip.value;

		// Generate url based on inputs
		var url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${KEY}`;
		var info;

		// Make API call
		await fetch(url).then(function(response) {
			return response.json();
		}).then(function(data){
			// Extract data
			info = data;
		})

		console.log(info);

		this.setState({
			temp: info.main.temp,
			city: info.name,
			description: info.weather[0].description
		})
	}

	render() {
		return (

			<div>
				<Title />

				<Form 
					getWeatherInfo = {this.getWeatherInfo}
				/>

				<Weather 
					temperature = {this.state.temp}
					city = {this.state.city}
					description = {this.state.description}
				/>
			</div>

		);
	}
};

export default App;