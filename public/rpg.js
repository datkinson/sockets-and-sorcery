Game = {};

var w = 880,
	h = 660;

var width = $(window).width();
var height = $(window).height();

Game.Play = function (game) { };

Game.Play.prototype = {
	preload: function () {
    game.load.image("background", "/img/Rimefrost.png");
    game.stage.backgroundColor = '#000000';
    game.load.image("player", "/img/player.png");
  },
  create: function() {
    game.add.tileSprite(0, 0, width, height, 'background');
//    player = this.game.add.sprite(100, 100, 'player');

    board = game.add.group();
//    board.add(game.add.text(20, 20, "player", { font: "20px Arial", fill: "#fff" }));
    player = board.add(game.add.sprite(100, 100, 'player'));
    player.scale.x = 0.1;
    player.scale.y = 0.1;


    function itemDragStop (item) {
      var player1 = {};
      player1.key = item.key;
      player1.x = item.world.x;
      player1.y = item.world.y;
      socket.emit('send', { message: 'player1', player1: player1 });
    };

    board.forEach(function (item) {
      item.inputEnabled = true;
      item.input.enableDrag(true, true);
      item.events.onDragStop.add(itemDragStop);
    });
	}
};



var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-container');

game.state.add('Play', Game.Play);
game.state.start('Play');



var socket = io.connect(window.location.host);
socket.on('message', function (data) {
    if(typeof(data.player1) !== 'undefined') {
	player.x = data.player1.x;
	player.y = data.player1.y;
    }
});
