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

	componentDidMount () {
		var options = latest.zones.map((aZone) => {
			var parts = aZone.split('|');
			var zoneName = parts[0];
			return zoneName;
		});
		var select = document.getElementById('placeSelector');
		select.innerHTML = options.map(function (option) {
			return '<option>' + option + '</option>';
		}).join('');
		console.log('props are:', this.props);
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
		for (var i = 0; i < this.state.cityData.length; i++) {
			if (this.state.cityData[i].tz === clicked) {
				this.state.cityData.splice(i, 1);
			}
		}
	}

	handleClick (event) {
		this.deleteTimeZone(event);
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
								<div key={index} className='container col-md-4'>
									<div className="cityName" onClick={this.handleClick.bind(this)}><CityName name={cityObj.tz} /></div>
									<AnalogClock key={index} time={cityObj.tz}/>
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




