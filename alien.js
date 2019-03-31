function Alien(x, y) {
	this.x = x;
	this.y = y;
	this.r = 15;
	this.toDelete = false;
	this.xdir = 1;

	this.rem = function () {
		this.toDelete = true;
	}

	this.move = function () {
		this.x += this.xdir;
	}

	this.shiftDown = function () {
		this.y += this.r;
		this.xdir *= -1;
	}

	this.show = function () {
		fill(255, 0, 200);
		noStroke();
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
}