import React from 'react';
import moment from 'moment-timezone';

export default class AnalogClock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayedTime: moment().tz(this.props.time).format(),
			styles: {

			}
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
        var setHours = (now.hours() > 12 ? now.hours() - 12 : now.hours()) 
        var hour = ((setHours % 12) / 12) * 360 + 180 + (minute / 12); 
 
        this.setState({styles: 
        	{
	        	hourHandStyle : {transform: "rotate(" + hour + "deg)"},  
	        	minuteHandStyle : {transform: "rotate(" + minute + "deg)"},  
	        	secondHandStyle: {transform: "rotate(" + second + "deg)"} 
        	}
        }); 
	  
	}

	render () {
		return (
			<div className="clockarea">
				<div className="clock">
					<div className="hourhand" style={this.state.styles.hourHandStyle}></div>
					<div className="minutehand" style={this.state.styles.minuteHandStyle}></div>
					<div className="secondhand" style={this.state.styles.secondHandStyle}></div>
				</div>
			</div>
		);
	}
}
