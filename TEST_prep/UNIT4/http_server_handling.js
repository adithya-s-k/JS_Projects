const http = require('http');
const fs = require('fs');
// const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
  const header = {
    'Content-Type': 'text/html',
  };
  if (req.url === '/') {
    res.writeHead(200, header);
    res.write('hello world');
  } else if (req.url === '/api') {
    res.writeHead(200, header);
    res.write('<h1>hello world</h1>');
  } else {
    res.writeHead(400, head);
    res.write('bad request');
  }

  // res.end is really important
  res.end();
});

server.listen(3000);
