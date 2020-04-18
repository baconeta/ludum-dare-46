Crafty.c("Grass", {
	init: function() {
        this.addComponent("2D, DOM, Image, solid");
        this.x = -1000;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT / 2 - 20,
        this.w = 2700;
        this.h = 20;
        this.image("assets/images/grass.png", "repeat");
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
