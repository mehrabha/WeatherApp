import React from "react";

class Weather extends React.Component {
	render() {
		return (
			<div className="info-main">
			  <div className="element">
				City: {this.props.city}
			  </div>
			  <div className="element">
				Temperature (F°): {this.props.temperature}
			  </div>
			  <div className="element">
				Humidity: {this.props.humidity}
			  </div>
			  <div className="element">
				Wind (mph): {this.props.wind}
			  </div>
			  <div className="element">
				Conditions: {this.props.description}
			  </div>
			</div>
		);
	}
};

export default Weather;