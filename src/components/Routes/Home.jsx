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
	updateImages,
	setImage,
} from './actions.js';

import Search from './Search.jsx';
import Thumbnails from './Thumbnails.jsx';

class Home extends Component {

	componentDidMount() {
		this.props.dispatch( _1ColRight() );
	}

	render() {
		return (
			<Fragment>
				<Search />
				<Thumbnails />
			</Fragment>
		)
	}	
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Home);
