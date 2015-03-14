var express = require('express');
var bodyParser = require('body-parser');

// create a new instance of an express application 
var app = exports.app = express();

app.use(bodyParser.json());

app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.use(express.static(__dirname + '/public'));

require('./routes/api')(app);
require('./routes/client')(app);


app.listen(8000, function() {
  console.log('Server Listening...');
});
