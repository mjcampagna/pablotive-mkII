import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Loader from './Loader.jsx';
import Thumbnails from './Thumbnails.jsx';
import Image from './Image.jsx';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		}
	}

	componentDidMount() {
		fetch('/unsplash/latest')
		.then( res => res.json() )
		.then( json => {
			console.log(json)
			this.setState({
				results: json
			})
		})
	}

	renderLoading() {
		return <Loader />;
	}

	renderPage() {
		return (
			<main>
				<Switch>
					<Route 
						exact path='/' 
						render={props => (<Thumbnails images={this.state.images} />)} 
					/>
					<Route path='/image' component={Image} />
				</Switch>
			</main>
		)
	}

	render() {
		if ( this.state.images === null ) {
			return this.renderLoading();
		} else {
			return this.renderPage();
		}
	}	
}