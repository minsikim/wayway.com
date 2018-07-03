var express = require('express');
var app = express();
var path = require('path');

app.listen(3000, function(){
  console.log('connected 3000 port!');
});

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname));

app.get('/', (req,res) => {
  res.render('/index.html');
});

app.get('/about', (req,res) => {
    res.render('../about.html');
  });

// app.post('/', urlencodedParser, (req,res) => {

// });
