import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Routes/Home.jsx';
import Thumbnails from './Routes/Thumbnails.jsx';
import Image from './Routes/Image.jsx';
import About from './Routes/About.jsx';
import Error404 from './Routes/Error404.jsx';

export default function Main(props) {
	return (
		<React.Fragment>
			<Switch>

				<Route 
					exact path='/' 
					render={(routeProps) => (
						<Thumbnails {...routeProps} />
					)}
				/>

				<Route 
					exact path='/image' 
					render={(routeProps) => (
						<Thumbnails {...routeProps} />
					)} 
				/>

				<Route 
					path='/image/:id' 
					render={(routeProps) => (
						<Image {...routeProps} />
					)}
				/>

				<Route 
					exact path='/about' 
					render={(routeProps) => (
						<About />
					)}
				/>

				<Route component={Error404} />

			</Switch>
		</React.Fragment>
	);
}
