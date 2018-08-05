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

class About extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.dispatch( _1ColRight() );
	}

	render() {
		return (
			<Fragment>
				<p>A portmanteau of Pablo Picasso and the word "primitive", <strong>Pablotive</strong> uses primitive shapes to create derivative works from photographs.</p>
				
				<p>Turn photos into logos, create wallpapers for your smart phone, or just have fun.</p>

				<ul>
					<li>React.js</li>
					<li>React Router</li>
					<li>Redux</li>
					<li>Node.js</li>
					<li>Express.js</li>
				</ul>

			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
  dataLayoutCol: state.pangolin.dataLayoutCol,
  dataLayoutPos: state.pangolin.dataLayoutPos
});

export default connect(mapStateToProps)(About);
