import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Pablo from './Routes/Pablo.jsx';
import Menu from './Menu.jsx';

export default function Fedora(props) {
	return (
		<Fragment>
			<ul id="logo">
				<li><Pablo /></li>				
				<li>
					<h1>
						<Link to="/">Pablotive</Link>
					</h1>
				</li>
			</ul>
			<Menu classes="menu" />
		</Fragment>
	);
}
