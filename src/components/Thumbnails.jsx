import React from 'react';
import { Link } from 'react-router-dom'

export default class Thumbnails extends React.Component {

	render() {
		return (
			<React.Fragment>
				<p>Thumbnails</p>
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