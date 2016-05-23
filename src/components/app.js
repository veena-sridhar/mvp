import React from 'react';
import moment from 'moment-timezone';
import ClockBlock from './clockBlock.jsx'

const cityData = [
	{
		name: 'Los Angeles',
		tz: 'America/Los_Angeles',
		format: 'LLL'
	},
	{
		name: 'Shanghai',
		tz: 'Asia/Shanghai',
		format: 'LLL',
	},
	{
		name: 'New York',
		tz: 'America/New_York',
		format: 'LLL'
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
			<div>
				<h1>World Clock</h1>
				<ClockBlock cityData={this.state.data}/>
			</div>
		);
	}
};