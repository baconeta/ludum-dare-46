Crafty.c("Bucket", {
	init: function() {
        this.addComponent("2D, Canvas, bucket");
        this.w = 60;
        this.h = 60;
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
