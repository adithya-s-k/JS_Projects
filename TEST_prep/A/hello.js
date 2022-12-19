express = require('express');
router = express.Router(); // important
//console.log(typeof router)

router.get('/', function (req, res) {
  // /hello
  res.send('<h1>in hello page</h1>');
});
router.get('/hello', function (req, res) {
  res.send('<h1>in hello first page</h1>');
});
router.get('/:msg/hello', function (req, res) {
  res.send('<h1>in hello first msg page</h1>');
});
module.exports = router;
// app.listen(3000, function () {
//   console.log('server is up');
// });
