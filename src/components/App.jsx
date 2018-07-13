import React from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';

export default class App extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
			</React.Fragment>
		)
	}	
}