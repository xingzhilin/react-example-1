var path = require('path');

module.exports = {
	entry: "./app/main.js",
	output: {
		path: path.resole(__dirname, "dist"),
		filename: "index.js"
	}，
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['es2015','react']
	        }
	      }
	    }
	  ]
	}
}
