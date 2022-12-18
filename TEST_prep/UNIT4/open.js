const fs = require('fs');

fs.open('lmao.txt', 'r+', (err, res) => {
  if (err) throw err;
  console.log(res);
});
