import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
// import JumpingLettersClass from './JumpingLettersClass';
import JumpingLettersFunc from './JumpingLettersFunc';

ReactDOM.render(
	<React.StrictMode>
			{/* <JumpingLettersClass /> */}
			<JumpingLettersFunc />
	</React.StrictMode>,
	document.getElementById('root')
);
