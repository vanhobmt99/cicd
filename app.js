var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
    res.send('About Us');
    });

app.get('/contact', function (req, res) {
    //return server information ip address, port, protocol
    res.send(req.protocol + '://' + req.get('host') + req.originalUrl);
    }
);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});