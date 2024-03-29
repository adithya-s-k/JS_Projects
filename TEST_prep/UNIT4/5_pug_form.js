var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
//Read form saved as form.pug
app.get('/', function (req, res) {
  res.render('form');
});
//Creating a view
app.set('view engine', 'pug');
app.set('views', './');

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//form-urlencoded for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('Request is received!');
});
app.listen(3000);
