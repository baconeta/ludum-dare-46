var PLATFORM_HEIGHT = 30;
var hasBucket = false;

Crafty.defineScene("Game", function() {
	var floor = Crafty.e("Platform").place(150, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5)
		.attr({
			x: -900,
			y: GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT,
			w: 2700
		});

	var bucketSpawner = Crafty.e("BucketSpawner");

	var platform1 = Crafty.e("Platform").place(150, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var platform2 = Crafty.e("Platform").place(650, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	var tree = Crafty.e("Tree").place(400, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6);

	var bucket1 = Crafty.e("Bucket").place(700,GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6);

	var player = Crafty.e("Player").place(50, GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 5);

	makeCameraTrackEntity(player, 50);
});
