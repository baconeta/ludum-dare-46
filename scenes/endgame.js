Crafty.defineScene("EndScreen", function(attributes) {
	var gameOverBackground = Crafty.e("EndBackground");

	var playAgainGameButton = Crafty.e("2D, DOM, Mouse, restart")
		.attr({x: GAME_SCREEN_WIDTH-250, y: GAME_SCREEN_HEIGHT-150})
		.bind('Click', function(MouseEvent){
        	Crafty.scene('Game');
		});
});
