app = require('express')();
bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
multer = require('multer');
upload = multer();
app.use(upload.array());
// app.set('view engine', 'pug');
// app.set('views', './views');
app.get('/form', function (req, res) {
  res.render('form');
});
app.post('/', function (req, res) {
  console.log(req.body);
  res.send('u entered ' + JSON.stringify(req.body));
});
app.listen(4000, function () {
  console.log('server is running');
});
