import React from 'react';
import latest from 'moment-timezone/data/packed/latest.json';


export default class AddTime extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			inputDisplayed: false
		}

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

	render () {
		return (
			<div>
  			</div>
    	);
	}

	buttonClicked (event) {
		console.log('buttonclicked called', event);
		this.props.onTimeZoneSelect();
	}

}





