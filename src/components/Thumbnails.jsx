import React from 'react';

export default class Thumbnails extends React.Component {

	render() {
		return (
			<React.Fragment>
				<p>{this.props.images}</p>
			</React.Fragment>
		)
	}	
}