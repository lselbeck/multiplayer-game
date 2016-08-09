var players = [];


/** PLAYER CLASS **/
var Player = function(gameInstance) {
	this.game = gameInstance;
	this.pos = { x: getRandomInt(game.width), y: getRandomInt(game.height) };
	this.radius = 10;
	this.color = 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')';
	this.id = '';
};

Player.prototype.draw = function() {}
	game.canvas.beginPath();
	game.canvas.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
	game.canvas.fillStyle = this.color;
	game.canvas.fill();
}


/** GAME CLASS **/
var GameCore = function(gameInstance) {
	this.instance = gameInstance;
	this.server = this.instance !== undefined; //is this server or client
	this.canvas = $('#game-canvas').getContext('2d');
	this.width = canvas.canvas.width;
	this.height =  canvas.canvas.height;
	this.playerSpeed = 120;

	/** SERVER CODE **/
	if (this.server) {
		this.players.push(new Player(instance));
	}
}

/** UTILITY FUNCTIONS **/
function getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}