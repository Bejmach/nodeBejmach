const http = require('http');
const url = require('url');
const fs = require('fs');
const mime = require('mime-types');

const port = 8080;

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	if(q.pathname === '/'){
		console.log('/');
		res.write('Strona Glowna');
	}
	if(q.pathname === '/json'){
		console.log('/json');
		res.write('{"json":{"servers":{"users"{"user"{"name":"test","id":1}}}}}');
	}
	if(q.pathname === '/htmlGen'){
		console.log('/htmlGen');
		var html = '<H1>Test page</H1><div>node js from code</div>'
		res.write(html);
	}
	if(q.pathname === '/htmlFile'){

		console.log('/htmlFile');
		fs.readFile('index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		})
	}
	if(q.pathname === '/get_params'){
		console.log('/get_params');
		var query = q.query;
		for(i=0;i<Object.keys(query).length; i++){
			console.log(Object.keys(query)[i]+": "+query[Object.keys(query)[i]]);
		}
		var path = "./params_"+Date.now()+".json";
		fs.writeFile(path, JSON.stringify(query, null, 4), err =>{
			if(err){
				console.error(err);
			}
		});
		res.write('{"ok": "ok"}');
	}
	else{
		console.log('assets'+q.pathname);
		console.log(mime.lookup('assets'+q.pathname));
		fs.readFile('assets'+q.pathname, function(err, data){
			if(err){
				res.writeHead(200, {'Content-Type': 'application/json'})
				res.statusCode = 404;
				res.write(JSON.stringify({error: 404}));
			}
			else{
				var mimeVar = mime.lookup('assets'+q.pathname);
				res.setHeader('Content-Type', mimeVar);
				if(mimeVar == 'application/json'){
					res.write(JSON.stringify(data));
				}
				else{
					res.write(data);
				}
			}
			return res.end();
		})
	}
	res.end();
}).listen(port);
