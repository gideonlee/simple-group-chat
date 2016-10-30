var express = require('express');
var path = require('path');
var port = 8000; 

var app = express();

// Static Content
app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/static', express.static(path.join(__dirname, '/node_modules')));

// Handles the routes
var routes = require('./routes/routes.js')(app); 

var server = app.listen(port, function() {
	console.log(`Listening on port: ${port}`);
});

// Handles the sockets
require('./static/js/socket.js')(server);