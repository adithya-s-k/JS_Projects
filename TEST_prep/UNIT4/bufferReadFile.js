var fs = require('fs');
fs.open('lmao.txt', 'r', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  var buffr = new Buffer(1024);
  console.log('File opened successfully!');
  console.log('Going to truncate the file after 3 bytes');
  // Truncate the opened file.
  fs.ftruncate(fd, 3, function (err) {
    if (err) {
      console.log(err);
    }
    console.log('File truncated successfully.');
    console.log('Going to read the same file');
    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
      if (err) throw err;
      // Print only read bytes to avoid junk.
      if (bytes > 0) {
        console.log(buffr.slice(0, bytes).toString());
      }
      // Close the opened file.
      fs.close(fd, function (err) {
        if (err) throw err;
      });
    });
  });
});
