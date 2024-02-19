var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
    res.send('About Us');
    });

 app.get('/contact', function (req, res) {
   //i want to show time in vietnam with gmt+7 although my server is in US
    var date = new Date();
    var vietnamTime = date.getTime() + (420*60*1000);
    var vietnamDate = new Date(vietnamTime);
    res.send('Vietnam Time: ' + vietnamDate);

    });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});