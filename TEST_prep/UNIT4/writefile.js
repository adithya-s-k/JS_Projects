var fs = require('fs');
console.log('Going to write into existing file');
fs.writeFile('input.txt', 'PES University!', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Data written successfully!');
  console.log("Let's read newly written data");
  data = fs.readFileSync('input.txt', 'utf8');
  console.log(data.toString());
});
