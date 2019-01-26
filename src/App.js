import React from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const KEY = "6c6e5a128e48a672ba7bc5fd4d02ce36";

class App extends React.Component {
	async getWeatherInfo (e) {

		// Prevent page refresh on submit
		e.preventDefault();

		// Store user inputs
		var city = e.target.elements.City.value;
		var country = e.target.elements.Country.value;

		// Make API call
		var api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}`);

		// Convert info to readable format
		var info = api_call.json();

		console.log(info);
	}

	render() {
		return (

			<div>
				<Title />
				<Form getWeatherInfo = {this.getWeatherInfo}/>
				<Weather />
			</div>

		);
	}
};

export default App;