const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 5000;

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	if(q.pathname == '/'){
		res.write('Strona Glowna');
		res.end();
	}
	if(q.pathname == '/json'){
		res.write('{"json":{"servers":{"users"{"user"{"name":"test","id":1}}}}}');
		res.end();
	}
	if(q.pathname == '/htmlGen'){
		var html = '<H1>Test page</H1><div>node js from code</div>'
		res.write(html);
		res.end();
	}
	if(q.pathname == '/htmlFile'){
		fs.readFile('index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	}
}).listen(8080);
