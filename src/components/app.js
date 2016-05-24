import React from 'react';
import AddTime from './addTime.jsx'
import moment from 'moment-timezone';
import latest from 'moment-timezone/data/packed/latest.json'
import ClockBlock from './clockBlock.jsx'

const cityData = [
	{
		tz: 'America/Los_Angeles',
		format: 'LLLL'
	},
	{
		tz: 'Asia/Shanghai',
		format: 'LLLL',
	},
	{
		tz: 'America/New_York',
		format: 'LLLL'
	}
];

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
				<AddTime />
				<ClockBlock cityData={this.state.data}/>
			</div>
		);
	}

};









