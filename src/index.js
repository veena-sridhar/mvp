import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';

$('.gotIt').click(function () {
	$('.overlay').fadeOut(500);
});

render(<App />, document.getElementById('app'));

