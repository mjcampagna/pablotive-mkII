import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {
	updateImages,
} from './actions.js';

import Loading from '../Loading.jsx';
import { bindActionCreators } from '../../../node_modules/redux';

class Thumbnails extends React.Component {

	componentDidMount() {
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
							onClick={(e) => this.props.handleClickOnThumbnail(e)} 
						/>
					</Link> 
				))}
			</React.Fragment>
		)
	}	
}

const mapStateToProps = state => ({
	images: state.unsplash.images
});

export default connect(mapStateToProps)(Thumbnails);
