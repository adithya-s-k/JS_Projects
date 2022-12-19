express = require('express');
app = express();
hellorouter = require('./hello.js');
app.get('/', function (req, res) {
  res.send('in home page from hellomain');
});
app.use('/hi', hellorouter);
app.use('/hello', hellorouter);
app.use('/:msg', hellorouter);
app.listen(3000, function () {
  console.log('server is running');
});
