import React from "react";

class Title extends React.Component {
	render() {
		return (
			<div>
				<h1 className="title-main">Weather App</h1>
				<h3 className="desc-main">Find your local weather conditions</h3>
			</div>
		);
	}
};

export default Title;