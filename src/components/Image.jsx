import React from 'react';

export default class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null
		}
	}

	componentDidMount() {
		fetch('/unsplash/image/' + this.props.match.params.id)
		.then( res => res.json() )
		.then( json => {
			this.setState({
				image: json
			})
		})
	}

	render() {
		return (
			<React.Fragment>
				{this.state.image && <img 
					src={this.state.image.urls.regular} 
				/>}
			</React.Fragment>
		)
	}	
}