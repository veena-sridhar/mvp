import React from 'react';
import _ from 'underscore';
import CityName from './cityName.jsx';
import AnalogClock from './analogClock.jsx';
import DigitalClock from './digitalClock.jsx';

export default class clockBlock extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			cityData: this.props.cityData
		};
	}

	addTimeZone (event) {
		event.preventDefault();
		var newCityData = this.state.cityData.concat([{
			tz: $('#placeSelector').val(),
			format: 'dddd, MMMM Do YYYY, h:mm:ss a'
		}]);
		this.setState({
			cityData: newCityData
		});
	}


	render () {
		return (
			<div>
				<div className="selectContainer">
		  			<select id='placeSelector'></select>
		  			<button className='submitButton' onClick={this.addTimeZone.bind(this)}>Add</button>
				</div>
				<div className='clockBlock'>
					<div className='timeBlock'>
						{this.state.cityData.map((cityObj) => {
							return (
								<div className='container col-md-4'>
									<div className="cityName"><CityName name={cityObj.tz} /></div>
									<AnalogClock time={cityObj.tz}/>
									<div className="digClock"><DigitalClock time={cityObj.tz} format={cityObj.format} /></div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	
	}
}




