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
	    }, 1000);
  	}

	tick () {
		moment().tz(this.props.time).format(this.props.format)
		this.setState({time: moment().tz(this.props.time).format(this.props.format)});
	}

	render () {
		return(
			<div className="updatedTime">{this.state.time}</div>
		);
	}
}