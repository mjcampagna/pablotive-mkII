import React from 'react';
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
} from './actions.js';

import Loading from '../Loading.jsx';

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'original',
		}
	}

	componentDidMount() {
		this.props.dispatch( _2ColRight() );

		fetch('/unsplash/image/' + this.props.match.params.id)
		.then( res => res.json() )
		.then( json => {
			this.props.dispatch( setImage(json) );
		})
	}

	render() {
		if ( !this.props.image ) {
			return <Loading />;
		}
		return (
			<React.Fragment>
				<div id="output">

					<div className="vector" id="vector" 
						style={{ 
							display: 'block'
							// display: this.state.view === 'vector' ? 'block' : 'none'
						}}>
					</div>

					<div className="raster" id="raster" 
						style={{ 
							display: 'block'
							// display: this.state.view === 'raster' ? 'block' : 'none'
						}}>
					</div>

					<div className="original" id="original" 
						style={{ 
							display: 'block'
							// display: this.state.view === 'original' ? 'block' : 'none'
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
			</React.Fragment>
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
