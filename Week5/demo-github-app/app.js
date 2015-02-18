var express = require('express');
var bodyParser = require('body-parser');

// create a new instance of an express application 
var app = express();

// mount middleware using app.use() - mount middleware that only parses json.
app.use(bodyParser.json());

// set the view directory to /views
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

// express.static is responsible for serving the static assets
app.use(express.static(__dirname + '/public'));

// require various route files and pass app as an arg
require('./routes/api')(app);
require('./routes/client')(app);


app.listen(8000, function() {
  console.log('Server Listening...');
});