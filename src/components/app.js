import React from 'react';
import moment from 'moment-timezone';
import latest from 'moment-timezone/data/packed/latest.json'
import ClockBlock from './clockBlock.jsx'

const cityData = [];

export default class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			data: cityData
		}
	}

	render () {
		return (
			<div onTimeZoneSelect={this.addTimeZone}>
				<h1>World Clock</h1>
				<ClockBlock cityData={this.state.data}/>
			</div>
		);
	}

};









