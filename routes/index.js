var express = require('express');
var mysql = require('mysql');
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
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express'
  })
  connection.connect();
  connection.query(`INSERT INTO messages (name, surname, email, text) values (${req.body.name}, ${req.body.surname}, ${req.body.email}, ${req.body.textArea})`, (err,rows,fields)=>{
    if(err) throw err;
  })
  console.log(req.body);
  res.redirect("http://localhost:3000/");
});
router.get('/api/contact-messages', function(req, res, next){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express'
  })
  connection.connect();

  connection.query('SELECT * FROM messages', (err,rows, fields) =>{
    if (err) throw err;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(rows));
  })
});
router.get('/api/contact-messages/:*', function(req, res, next){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express'
  })
  connection.connect();
  var url = req.url;
  var position = url.search(":");
  var urlParsed = url.substring(position+1);

  connection.query(`SELECT * FROM messages WHERE id=${urlParsed}`, (err,rows, fields) =>{
    if (err) throw err;
    else if(!rows.length){
      res.sendStatus(404);
    }
    else{
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(rows));
    }
  })
});

module.exports = router;
