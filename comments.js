// Create a web server
// Load the modules
var http = require('http');
var fs = require('fs');

// Create a server
var server = http.createServer(function(req, res) {
	// Get the request
	var url = req.url;
	// Get the file name
	var fileName = 'index.html';
	if (url !== '/') {
		fileName = url.substr(1);
	}
	// Read the file
	fs.readFile(fileName, function(err, data) {
		// If there is an error
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('File not found!');
		} else {
			// Send the data
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
});

// Listen on port 3000
server.listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');