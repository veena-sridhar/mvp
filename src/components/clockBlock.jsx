import React from 'react';
import _ from 'underscore';
import CityName from './cityName.jsx';
import AnalogClock from './analogClock.jsx';
import DigitalClock from './digitalClock.jsx';

export default class clockBlock extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			cityData: this.props.cityData,
			isShowing: true
		};
	}

	addTimeZone (event) {
		event.preventDefault();
		var newCityData = this.state.cityData.concat([{
			tz: $('#placeSelector').val(),
			format: 'dddd, MMMM Do YYYY, h:mm:ss a'
		}]);
		this.setState({
			cityData: newCityData,
			isShowing: true
		});
	}

	deleteTimeZone (event) {
		var clicked = event.target.innerText;
		
		console.log('getting into the if statement');
		for (var i = 0; i < this.state.cityData.length; i++) {
			debugger;
			if (this.state.cityData[i].tz === clicked) {
				this.state.cityData.splice(i, 1);
			}
		}
		
		this.setState({isShowing: !this.state.isShowing});
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
						{this.state.cityData.map((cityObj, index) => {
							return (
								<div className='container col-md-4'>
									<div className="cityName" onClick={this.deleteTimeZone.bind(this)}><CityName name={cityObj.tz} /></div>
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




