import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<Link to="/">
			<h1>Pablotive</h1>
		</Link>
	);
}
