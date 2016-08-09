$(document).ready(function(){
	var socket = io();
	var id;
	
	socket.on('connect', function() {
		id = socket.io.engine.id;
	});

	$('form').submit(function(){
		socket.emit('chat message', $('#m').val());
		$('#m').val('');
		return false;
	});

	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	});
});