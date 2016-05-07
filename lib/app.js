// npm install express --save
var express = require('express');
var app = express();
var ic = require('./appempic');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World '+ ic.getFirstName() + ' ' + ic.getLastName());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});