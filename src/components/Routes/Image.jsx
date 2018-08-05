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

import Loading from '../Loading.jsx';

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null
		}
	}

	componentDidMount() {
		this.props.dispatch( _2ColRight() );

		fetch('/unsplash/image/' + this.props.match.params.id)
		.then( res => res.json() )
		.then( json => {
			this.setState({
				image: json
			})
		})
	}

	render() {
		if ( !this.state.image ) {
			return <Loading />;
		}
		return (
			<React.Fragment>
				{ this.state.image && <img 
					src={this.state.image.urls.regular} 
				/>}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
  dataLayoutCol: state.pangolin.dataLayoutCol,
  dataLayoutPos: state.pangolin.dataLayoutPos
});

export default connect(mapStateToProps)(Image);
