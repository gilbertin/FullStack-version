const http = require('http');

const server = http.createServer(function (req, res) {
	const myURL = require('url').parse(req.url);
	console.log(myURL);

	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write(myURL.pathname);
	// res.write('okay')
	res.end();
});

server.listen(9000);