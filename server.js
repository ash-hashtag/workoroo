const liveServer = require('live-server');

const parameters = {
	root: './public',
	file: 'index.html',
	port: 8080,
	host: '0.0.0.0',
};

liveServer.start(parameters);
