$(document).ready(function() {
	var socket = io.connect();
	// User must have a name.
	while (name === undefined || name === null) {
		var name = prompt('Welcome to the Chatroom! Please enter your name:');
	}

	$('.container').show();
	socket.emit('new_user_name', name);	
	socket.emit('disconnect', name);

	// Allows the user to display a message when the enter key is pressed. 
	$('.message').keydown(function(e) {
		if (e.keyCode === 13) {
			var message = $('input[name=message]').val();
			$('input[name=message]').val('');
			socket.emit('received_new_message', {message: message, name: name});
			return false;
		}
	});

	// Show new user has joined.
	socket.on('new_user_joined', function(name_from_server) {
		$('.chatbox').append('<p class="grey">'+name_from_server+' has joined the room.</p>')
	});

	// Show user's message.
	socket.on('sending_new_message', function(data) {
		$('.chatbox').append('<p><b>'+data.name+'</b>: '+data.message+'</p>');
	});

	// Show that a user has signed off. 
	socket.on('user_has_left', function(name) {
		$('.chatbox').append('<p class="grey">'+name+' has signed off.</p>');
	})
});