const path = require('path');
const http = require('http');
const https = require('https');

const express = require('express');
const app = express();

require('es6-promise').polyfill();
require('isomorphic-fetch');
const Unsplash = require('unsplash-js');
const unsplash = new Unsplash.default({
  applicationId: process.env.UNSPLASH_ID,
	secret: process.env.UNSPLASH_SECRET,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Accept-Version': 'v1',
		'Authorization': 'Client-ID ' + process.env.UNSPLASH_ID
	}
});

// const { createCanvas, loadImage } = require('canvas');
const base64 = require('node-base64-image');

app.use( express.static( path.resolve(__dirname, '../dist') ) );

// app.use('/unsplash/*', (req, res, next) => {
// 	res.set('Accept-Version', 'v1');
// 	res.set('Authorization', 'Client-ID ' + process.env.UNSPLASH_ID);

//   res.set('Access-Control-Allow-Origin', '*');
//   res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

// 	next();
// });

app.get('/unsplash/latest', ( req, res ) => {
	unsplash.photos.listPhotos(1, 25)
	.then(Unsplash.toJson)
	.then(json => {
		res.status(200).send(json);
	});
});

app.get('/unsplash/search/:query', ( req, res ) => {
	unsplash.search.photos(req.params.query, 1, 25)
	.then(Unsplash.toJson)
	.then(json => {
		res.status(200).send(json.results);
	});
});

app.get('/unsplash/image/:id', ( req, res ) => {
	unsplash.photos.getPhoto(req.params.id)
	.then(Unsplash.toJson)
	.then(json => {

		// base64.encode( json.urls.regular, { 
		// 	string: true 
		// }, (err, image) => {
		// 	if (err) console.log(err);
		// 	json.base64 = 'data:image/png;base64, ' + image;
		// 	res.status(200).send(json);
		// });

		res.status(200).send(json);
	});
});

app.get('/*', (request, response) => {
	response.sendFile( path.resolve(__dirname, '../dist', 'index.html'), 
	(err) => {
		if (err) {
			res.status(500).send(err);
		}
	});
});

const port = process.env.PORT || 1337;
app.listen(
	port, console.log(`Listing on port ${port}...`));
