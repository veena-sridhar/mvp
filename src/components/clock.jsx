import React from 'react'

export default class AnalogClock extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<article class="clock">
			  <div class="hours-container">
			    <div class="hours"></div>
			  </div>
			  <div class="minutes-container">
			    <div class="minutes"></div>
			  </div>
			  <div class="seconds-container">
			    <div class="seconds"></div>
			  </div>
			</article>
		);
	}

}