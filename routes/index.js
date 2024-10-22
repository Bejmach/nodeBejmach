var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/kontakt', function(req, res, next) {
  fs.readFile('./public/contact.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
});
router.get('/oferta', function(req, res, next) {
  fs.readFile('./public/offer.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
});
router.get('/o-nas', function(req, res, next) {
  fs.readFile('./public/anout.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
});
router.post('/kontakt', function(req, res, next){
  console.log(req.body);
  res.redirect("http://localhost:3000/");
});

module.exports = router;
