module.exports = function(server) {
	var io = require('socket.io').listen(server);
	var user_name = ''; 
	io.sockets.on('connection', function(socket) {
		// If new user connects, display a message.
		socket.on('new_user_name', function(name) {
			user_name = name; 
			io.emit('new_user_joined', name);
		});

		// Handles the user's messages.
		socket.on('received_new_message', function(data) {
			io.emit('sending_new_message', data);
		});

		// If user disconnects, display a message. 
		socket.on('disconnect', function() {
			io.emit('user_has_left', user_name);
		})
	});
}