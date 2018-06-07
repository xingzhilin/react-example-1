var path = require('path');

module.exports = {
	entry: "./app/main.js",
	output: {
		path: path.resole(__dirname, "dist"),
		filename: "index.js"
	}
}