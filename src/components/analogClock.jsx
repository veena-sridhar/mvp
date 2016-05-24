import React from 'react';
import moment from 'moment-timezone';

export default class AnalogClock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayedTime: moment().tz(this.props.time).format()
		}
	}

	componentDidMount () {
		var context = this;
		setInterval(function () {
			context.tick()
		}, 1000);
	}

	tick () {
		var now = moment.tz(this.props.time);  
        var second = now.seconds() * 6;  
        var minute = now.minutes() * 6 + second / 60;  
        var hour = ((now.hours() % 12) / 12) * 360 + 90 + (minute / 12); 
 
        $('.hourhand').css("transform", "rotate(" + hour + "deg)");  
        $('.minutehand').css("transform", "rotate(" + minute + "deg)");  
        $('.secondhand').css("transform", "rotate(" + second + "deg)"); 
	  
	}



	render () {
		return (
			<div className="clockarea">
				<div className="clock">
					<div className="hourhand"></div>
					<div className="minutehand"></div>
					<div className="secondhand"></div>
				</div>
			</div>
		);
	}
}
