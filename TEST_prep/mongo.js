//2 Marks for importing all modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var MongoClient = require('mongodb').MongoClient;
//2 marks for create server and parse URL
http
  .createServer(function (request, response) {
    if (request.method == 'GET') {
      response.writeHead(200, { 'Content-type': 'text/html' });
      var myurl = url.parse(request.url);
      var query = myurl.query;
      var qobj = qs.parse(query);
      //3 Marks for database connectivity and GET/find the data
      MongoClient.connect(
        'mongodb://localhost:27017',
        { useUnifiedTopology: true },
        function (err, client) {
          if (err) throw err;
          const db = client.db('newdb');
          db.collection('any_collection')
            .find({ qobj })
            .toArray(function (err, docs) {
              if (err) throw err;
              response.writeHead(200, { 'Content-type': 'application/json' });
              response.write(JSON.stringify(docs));
              client.close();
              response.end();
            });
        }
      );
      response.end();
    }
    // 4 marks for POST method with error handling
    if (request.method == 'POST') {
      var myurl = url.parse(request.url);
      var pathname = myurl.pathname;
      let body = [];
      request
        .on('data', (chunk) => {
          body.push(chunk);
        })
        .on('end', () => {
          body = Buffer.concat(body).toString();
          MongoClient.connect(
            'mongodb://localhost:27017',
            { useUnifiedTopology: true },
            function (err, client) {
              if (err) throw err;
              const db = client.db('newdb');
              db.collection('any_collection').insertOne(
                JSON.parse(body),
                function (err, res) {
                  if (err) throw err;
                  console.log('document inserted');
                  client.close();
                  response.end();
                }
              );
            }
          );
        });
    }
  })
  .listen(8080); //1 Mark
