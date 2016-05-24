import React from 'react';
import moment from 'moment-timezone';

export default class DigitalClock extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			time: moment().tz(this.props.time).format(this.props.format)
		}
	}

	componentDidMount () {
		var context = this;
	    setInterval(function () {
	    	context.tick();
	    }, 10000);

    	//this.setInterval(this.tick, 1000); 
  	}

	tick () {
		console.log('tick called', this.props.time);
		moment().tz(this.props.time).format(this.props.format)
		this.setState({time: moment().tz(this.props.time).format(this.props.format)});
	}

	render () {
		return(
			<div class='updatedTime'>{this.state.time}</div>
		);
	}
}