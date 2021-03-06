function Ship() {
	this.x = width / 2;
	this.xdir = 0;

	this.move = function (dir) {
		this.x += this.xdir * 3;
	}

	this.setDir = function (dir) {
		this.xdir = dir;
	}

	this.show = function () {
		fill(255);
		rectMode(CENTER);
		rect(this.x, height - 20, 20, 20);
	}
}