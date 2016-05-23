import React from 'react';
import _ from 'underscore';
import CityName from './cityName.jsx';
import AnalogClock from './clock.jsx';

export default class clockBlock extends React.Component {
	constructor (props) {
		super(props);
	}

	runClock () {
		//generate clock animations
    	var now   = new Date(),
        hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
        minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
        secondDeg = now.getSeconds() / 60 * 360,
        stylesDeg = [
            "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
            "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
            "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
            "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
            "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
            "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
        ].join("");

        document.getElementById("clock-animations").innerHTML = stylesDeg;
	}
	render () {
		return (
			<div class='clockBlock'>
				<div class='cityTitle'>
					{this.props.cityData.map((cityObj) => {
						return <CityName name={cityObj.name} />
					})}
				</div>
				<div class='clock-container'>
					{this.props.cityData.map((item, index) => {
						return <AnalogClock key={index}/>
					})}
				</div>
			</div>
		);
	
	}
}




