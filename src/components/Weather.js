import React from "react";

class Weather extends React.Component {
	render() {
		return (
			<div>
				Weather for {this.props.city}: {this.props.temperature} °F
			</div>
		);
	}
};

export default Weather;