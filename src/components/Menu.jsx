import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
	return (
		<ul className={props.classes}>
			<li className="menu-item">
				<Link to="/">
					Browse
				</Link>
			</li>
			<li className="menu-item">
				<Link to="/about">
					About
				</Link>
			</li>
		</ul>
	);
}
