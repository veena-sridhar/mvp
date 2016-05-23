import React from 'react';
import CityName from './cityName.jsx';
import _ from 'underscore';

export default class clockBlock extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div class='clockBlock'>
				<div class='cityTitle'>
					{props.map(function (cityObj) {
						<CityName name='cityObj.name'/>	
					}
					)}
				</div>
			</div>
		);
	}
}