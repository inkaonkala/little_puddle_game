export class Player {

	constructor(x, y) {

		this.x = x;
		this.y = y;

		//for sprite holder
		this.width = 50;
		this.height = 70;

		this.speed = 5;

		//jump!
		this.isJumping = false;
		this.jumpHeig = 0;
		this.jumpVelo = 0;
		this.gravity = 0.6;
		this.jumpPower = 12;

		this.jumpCooldown = 0;
	}

	move_left() {
		this.x -= this.speed;

	}

	move_right() {
		this.x += this.speed;

	}

	jump() {
		if (this.isJumping || this.jumpCooldown > 0) 
			return;

		this.isJumping = true;
		this.jumpVelo = this.jumpPower;

	}

	jumpUpdate() {
    	if (this.isJumping) {
       		this.jumpHeig += this.jumpVelo;
   		    this.jumpVelo -= this.gravity;

        	if (this.jumpHeig <= 0) {
        	    this.jumpHeig = 0;
        	    this.jumpVelo = 0;
            	this.isJumping = false;
            	this.jumpCooldown = 15;
        	}
    	}

    	if (this.jumpCooldown > 0) {
        	this.jumpCooldown--;
    	}
	}

	draw(ctx) {
		ctx.fillStyle = "pink";

		ctx.fillRect(
			this.x - this.width / 2,
			this.y - this.height - this.jumpHeig,
			this.width,
			this.height
		)
	}
}