Crafty.c("Player", {
	init: function() {
        this.addComponent("2D, DOM, Color, Image, Twoway, Gravity, Collision, player");
        this.x = 50;
        this.y = GAME_SCREEN_HEIGHT - PLATFORM_HEIGHT * 6;
        this.w = 314 / 5;
        this.h = 429 / 5;
		this.gravity("solid");
		this.twoway(200, 390);
		this.onHit("Bucket", function(collectBucket) {
			collectBucket[0].obj.destroy();
			if (facing == "right") {
				this.image("assets/images/bear_bucket_right.png");
			}
			else if (facing == "left") {
				this.image("assets/images/bear_bucket_left.png");
			}
			hasBucket = true;
			Crafty.trigger("collectBucket");
		});
		this.bind("KeyDown", function(arrow) {
				if (arrow.key == Crafty.keys.LEFT_ARROW) {
					facing = "left";
					if (hasBucket == true) {
						this.image("assets/images/bear_bucket_left.png");
					}
					else {
						this.image("assets/images/bear_left.png");
					}
				} else if (arrow.key == Crafty.keys.RIGHT_ARROW) {
					facing = "right";
					if (hasBucket == true) {
						this.image("assets/images/bear_bucket_right.png");
					}
					else {
						this.image("assets/images/bear_right.png");
					}
				}
			})
		this.onHit("Tree", function(giveBucket) {
			if (hasBucket == true) {
				if (facing == "right") {
					this.image("assets/images/bear_right.png");
				}
				else if (facing == "left") {
					this.image("assets/images/bear_left.png");
				}
				hasBucket = false;
				Crafty.trigger("waterTree");
			}
		});
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
})
