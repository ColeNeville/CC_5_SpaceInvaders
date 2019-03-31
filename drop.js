function Drop(x, y) {
	this.x = x;
	this.y = y;
	this.r = 4;
	this.toDelete = false;

	this.move = function () {
		this.y -= 5;
	}

	this.hits = function (alien) {
		var d = dist(this.x, this.y, alien.x, alien.y);

		if (d < this.r + alien.r) {
			return true;
		} else {
			return false;
		}
	}

	this.rem = function () {
		this.toDelete = true;
	}

	this.show = function () {
		fill(50, 0, 255);
		noStroke
		ellipseMode(CENTER);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
}