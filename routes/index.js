var express = require('express');
const fs = require('fs');
const url = require('url');
const mime = require('mime');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.end('Strona Glowna');
});
router.get('/json', function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"json":{"servers":{"users"{"user"{"name":"test","id":1}}}}}');
});
router.get('/htmlGen', function(req, res){
  var html = '<H1>Test page</H1><div>node js from code</div>'
	res.end(html);
});
router.get('/htmlFile', function(req, res){
  fs.readFile('file.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
});
router.get('/get_params', function(req, res){
  var q = url.parse(req.url, true);
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
		res.end('{"ok": "ok"}');
});
router.get('/*/', function(req,res){
  var q = url.parse(req.url, true);
  fs.readFile('./assets'+q.pathname, 'utf8', function(err, data){
    if(err){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.statusCode = 404;
      res.end(JSON.stringify({error: 404}));
    }
    else{
      var mimeVar = mime.lookup('./assets'+q.pathname);
      res.writeHead(200, {'Content-Type': mimeVar});
      if(mimeVar == 'application/json'){
        res.end(JSON.stringify(data));
      }
      else{
        res.end(data);
      }
    }
  })
})

module.exports = router;
