import React from 'react';

export default class CityName extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<h4>{this.props.name}</h4>
			</div>
		);
	}
}