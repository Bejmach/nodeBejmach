const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080;

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	if(q.pathname == '/'){
		res.write('Strona Glowna');
	}
	if(q.pathname == '/json'){
		res.write('{"json":{"servers":{"users"{"user"{"name":"test","id":1}}}}}');
	}
	if(q.pathname == '/htmlGen'){
		var html = '<H1>Test page</H1><div>node js from code</div>'
		res.write(html);
	}
	if(q.pathname == '/htmlFile'){
		fs.readFile('index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		})
	}
	if(q.pathname == '/get_params'){
		var query = q.query;
		for(i=0;i<Object.keys(query).length; i++){
			res.write(Object.keys(query)[i]+": "+query[Object.keys(query)[i]]+"\n");
		}
		var path = "./params_"+Date.now()+".json";
		fs.writeFile(path, JSON.stringify(query, null, 4), err =>{
			if(err){
				console.error(err);
			}
		});
	}
	res.end();
}).listen(port);
