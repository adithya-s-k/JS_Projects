var fs = require('fs');
fs.readFile('lmao.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
const data = fs.readFileSync('lmao.txt', 'utf8');
console.log(data);
