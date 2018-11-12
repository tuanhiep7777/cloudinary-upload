var express = require('express');
var mustacheExpress = require('mustache-express');
var path = require('path');

var app = express();

// Middleware
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.use('/public', express.static('public'));

// Routes
app.get('/upload_image', function(req, res) {
  res.render('index.html');
});

app.get('/upload_video', function(req, res){
  res.render('upload_video.html')
});

app.listen(1337, function() {
  console.log('Running on port 1337');
});
