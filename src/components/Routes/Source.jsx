import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	updateImages,
	setQuery,
} from './actions.js';

class Source extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
		this.getImages = this.getImages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}


	getImages() {
		fetch('/unsplash/latest')
		.then( res => res.json() )
		.then( json => {
			this.props.dispatch( updateImages(json) );
		})
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			query: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch( updateImages(null) );
		this.props.dispatch( setQuery(this.state.query) );

		fetch('/unsplash/search/' + this.state.query)
		.then( res => res.json() )
		.then( json => {
			this.props.dispatch( updateImages(json) );
		})

		this.setState({
			query: ''
		})
	}

	render() {
		return (
			<div id="source">

				<ul>
					<li>
						<button onClick={this.getImages}>Latest</button>
					</li>
				</ul>

				<form id="search" onSubmit={this.handleSubmit}>
					<input type="text" 
						value={this.state.query} 
						onChange={this.handleChange} 
					/>
					<button type="submit">Find</button>
				</form>

			</div>
		);
	}
}

const mapStateToProps = state => ({
	query: state.primitive.query
});

export default connect(mapStateToProps)(Source);
