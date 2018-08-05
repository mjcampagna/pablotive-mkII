import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {
	_0ColLeft,
	_0ColRight,
	_0ColSplit,
	_1ColLeft,
	_1ColRight,
	_1ColSplit,
	_2ColLeft,
	_2ColRight,
	_2ColSplit,
	_3ColLeft,
	_3ColRight,
	_3ColSplit
} from '../Pangolin/actions.js';

import {
	updateImages,
	setImage,
} from './actions.js';

import Loading from '../Loading.jsx';

class Thumbnails extends Component {

	componentDidMount() {
		this.props.dispatch( _1ColRight() );

		let query = this.props.query;
		let endpoint;
		if ( query === '' ) {
			endpoint = '/unsplash/latest';
		} else {
			endpoint = '/unsplash/search/' + query;
		}

		fetch(endpoint)
		.then( res => res.json() )
		.then( json => {
			this.props.dispatch( updateImages(json) );
			this.props.dispatch( setImage(null) );
		})
	}

	render() {
		if ( !this.props.images ) {
			return <Loading />;
		}
		return (
			<Fragment>
				{this.props.images && this.props.images.map( image => (
					<Link key={image.id} to={'image/' + image.id}>
						<img 
							id={image.id} 
							src={image.urls.thumb} 
						/>
					</Link> 
				))}
			</Fragment>
		)
	}	
}

const mapStateToProps = state => ({
	images: state.primitive.images,
	query: state.primitive.query
});

export default connect(mapStateToProps)(Thumbnails);
