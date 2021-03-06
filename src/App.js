import React from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const KEY = "6c6e5a128e48a672ba7bc5fd4d02ce36";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			temp: undefined,
			humidity: undefined,
			wind: undefined,
			city: undefined,
			description: undefined
		}

		this.getWeatherInfo = this.getWeatherInfo.bind(this);	// workaround
	}

	componentDidMount() {
		this.makePings();
	}

	// Used to keep heroku apps awake, doesnt impact project functionality
	makePings() {
		var https = require("https");
		let weatherapp = {
			host: "mockup-frontend-capstone.herokuapp.com",
			port: 3000,
			path: '/'
		};
		let campusapp = {
			host: "weather-checker-react.herokuapp.com",
			port: 3000,
			path: '/'
		}
		
		https.get(weatherapp);
		https.get(campusapp);
		setInterval(function() {
			https.get(weatherapp);
			https.get(campusapp);
		}, 10 * 60 * 1000);
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
			humidity: info.main.humidity,
			wind: info.wind.speed,
			city: info.name,
			description: info.weather[0].description
		})
	}

	render() {
		return (

			<div>
			  <div className="wrapper">
			    <div className="main">
			        <div className="row">
			          <div className= "col-xs-5 title-container">
			            <Title />
			          </div>
			          <div className= "col-xs-7 form-container">
						<Form 
							getWeatherInfo = {this.getWeatherInfo}
						/>
						<Weather 
							temperature = {this.state.temp}
							humidity = {this.state.humidity}
							wind = {this.state.wind}
							city = {this.state.city}
							description = {this.state.description}
						/>
			          </div>
			        </div>
			    </div>
			  </div>
			</div>

		);
	}

					


};

export default App;
