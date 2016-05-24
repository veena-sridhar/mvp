import React from 'react';
import _ from 'underscore';
import CityName from './cityName.jsx';
//import AnalogClock from './clock.jsx';
import DigitalClock from './digitalClock.jsx';

export default class clockBlock extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			cityData: this.props.cityData
		};
	}

	addTimeZone (event) {
		//event.preventDefault();
		console.log('addtimezone is called');
		var newCityData = this.props.cityData.concat([{
			tz: $('#placeSelector').val(),
			format: 'LLLL'
		}]);
		this.setState({
			cityData: newCityData
		});
		return false;
	}

	render () {
		return (
			<div class='clockBlock' onTimeZoneSelect={this.addTimeZone}>
				<div>
		  			<select id='placeSelector'></select>
		  			<button class='submitButton' onClick={this.addTimeZone.bind(this)}>Add</button>
  				</div>
				<div class='timeBlock'>
					{this.state.cityData.map((cityObj) => {
						return (
							<div>
								<div class='cityName'><CityName name={cityObj.tz} /></div>
								<div class='digClock'><DigitalClock time={cityObj.tz} format={cityObj.format} /></div>
							</div>
						);
					})}
				</div>
			</div>
		);
	
	}
}




