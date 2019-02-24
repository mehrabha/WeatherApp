import React from "react";

class Weather extends React.Component {
	render() {
		return (
			<div className="info-main">
			  <div>
				City: {this.props.city}
			  </div>
			  <div>
				Weather: {this.props.temperature}
			  </div>
			  <div>
				Conditions: {this.props.description}
			  </div>
			</div>
		);
	}
};

export default Weather;