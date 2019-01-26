import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form onSubmit = {this.props.getWeatherInfo}>
				<input type="TEXT" name="City"></input>
				<input type="TEXT" name="Country"></input>
				<button>Get Weather Info!</button>
			</form>
		);
	}
};

export default Form;