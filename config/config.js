var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/test',
		port: process.env.PORT || 27017
	},
	production: {
		rootPath: rootPath,
		db: process.env.MONGO_LAB,
		port: process.env.PORT || 80
	}
};