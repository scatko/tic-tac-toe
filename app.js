var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening to port ' + port);
});
