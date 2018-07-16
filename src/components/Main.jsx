import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Loader from './Loader.jsx';
import Thumbnails from './Thumbnails.jsx';
import Image from './Image.jsx';
import Error404 from './Error404.jsx';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			results: null
		}
		this.handleClickOnThumbnail = this.handleClickOnThumbnail.bind(this);
	}

	componentDidMount() {
		fetch('/unsplash/latest')
		.then( res => res.json() )
		.then( json => {
			this.setState({
				results: json
			})
		})
	}

	handleClickOnThumbnail(event) {
		this.setState({
			image: event.target.id
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
						render={(routeProps) => <Thumbnails {...routeProps} 
							images={this.state.results} 
							handleClickOnThumbnail={this.handleClickOnThumbnail} 
						/>} 
					/>
					<Route 
						exact path='/image' 
						render={(routeProps) => <Thumbnails {...routeProps} 
							handleClickOnThumbnail={this.handleClickOnThumbnail} 
						/>} 
					/>

					<Route 
						path='/image/:id' 
						render={(routeProps) => <Image {...routeProps} 
						/>}
					/>
					<Route component={Error404} />
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