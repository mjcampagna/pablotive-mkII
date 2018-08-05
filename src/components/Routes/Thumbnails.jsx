import React from 'react';
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
} from './actions.js';

import Loading from '../Loading.jsx';

class Thumbnails extends React.Component {

	componentDidMount() {
		this.props.dispatch( _1ColRight() );

		fetch('/unsplash/latest')
		.then( res => res.json() )
		.then( json => {
			this.props.dispatch( updateImages(json) );
		})
	}

	render() {
		if ( !this.props.images ) {
			return <Loading />;
		}
		return (
			<React.Fragment>
				{this.props.images && this.props.images.map( image => (
					<Link key={image.id} to={'image/' + image.id}>
						<img 
							id={image.id} 
							src={image.urls.thumb} 
						/>
					</Link> 
				))}
			</React.Fragment>
		)
	}	
}

const mapStateToProps = state => ({
	images: state.primitive.images
});

export default connect(mapStateToProps)(Thumbnails);
