import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
	setImage,
	selectView
} from './actions.js';

import Loading from '../Loading.jsx';

class Image extends Component {

	componentDidMount() {
		this.props.dispatch( _2ColRight() );
		this.props.dispatch( selectView('original') );

		fetch('/unsplash/image/' + this.props.match.params.id)
		.then( res => res.json() )
		.then( json => {
			this.props.dispatch( setImage(json) );
		})
	}

	selectView(event, view) {
		event.preventDefault();
		this.props.dispatch( selectView(view) );
	}

	render() {
		if ( !this.props.image ) {
			return <Loading />;
		}
		return (
			<Fragment>
				<ul id="output-status">
					<li id="steps"></li>
					<li><button onClick={(e) => this.selectView(e, 'original')}>Original</button></li>
					<li><button onClick={(e) => this.selectView(e, 'raster')}>Raster</button></li>
					<li><button onClick={(e) => this.selectView(e, 'vector')}>Vector</button></li>
				</ul>

				<div id="output">

					<div className="vector" id="vector" 
						style={{ 
							display: this.props.view === 'vector' ? 'block' : 'none'
						}}>
					</div>

					<div className="raster" id="raster" 
						style={{ 
							display: this.props.view === 'raster' ? 'block' : 'none'
						}}>
					</div>

					<div className="original" id="original" 
						style={{ 
							display: this.props.view === 'original' ? 'block' : 'none'
						}}
					>
						<img 
							src={this.props.image.urls.regular} 
							alt={this.props.image.user.name} 
							crossOrigin="anonymous" 
						/>
					</div>

				</div>

				<p className="photographer-name">
					Photo by {this.props.image.user.name}
				</p>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
  dataLayoutCol: state.pangolin.dataLayoutCol,
	dataLayoutPos: state.pangolin.dataLayoutPos,
	image: state.primitive.image,
	view: state.primitive.view
});

export default connect(mapStateToProps)(Image);
