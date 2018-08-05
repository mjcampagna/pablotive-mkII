export function updateImages( images ) {
	return {
		type: 'UPDATE_IMAGES',
		payload: images
	}
}

export function setImage( image ) {
	return {
		type: 'SET_IMAGE',
		payload: image
	}
}

export function setQuery( query ) {
	return {
		type: 'SET_QUERY',
		payload: query
	}
}
