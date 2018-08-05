import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Config from './Routes/Config.jsx';
import Menu from './Menu.jsx';

export default function ColumnL(props) {
	return (
		<React.Fragment>
			<Config />
			{/* <Menu classes="menu menu--vertical" /> */}
		</React.Fragment>
	);
}
