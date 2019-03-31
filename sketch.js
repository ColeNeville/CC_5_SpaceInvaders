var ship;
var aliens = [];
var drops = [];

function setup() {
	createCanvas(600, 400);
	ship = new Ship();
	var ind = 0;
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 4; j++) {
			aliens[ind] = new Alien(i * (15 * 2 + 10) + (width / 4), j * (15 * 2 + 10) + 40);
			ind++;
		}
	}
}

function keyPressed() {
	if (key === ' ') {
		var drop = new Drop(ship.x, height);
		drops.push(drop);
	}

	if (keyCode === LEFT_ARROW) {
		ship.move(-1);
	} else if (keyCode === RIGHT_ARROW) {
		ship.move(1);
	}
}

function draw() {
	background(50);
	for (var i = 0; i < drops.length; i++) {
		drops[i].move();
		drops[i].show();

		for (var j = 0; j < aliens.length; j++) {
			if (drops[i].hits(aliens[j])) {
				drops[i].rem();
				aliens[j].rem();
			}
		}

		if (drops[i].y == 0) {
			drops[i].rem();
		}
	}
	ship.show();

	var right = false;
	var left = false;

	for (var i = 0; i < aliens.length; i++) {
		aliens[i].move();
		aliens[i].show();

		if (aliens[i].x > width - aliens[i].r) {
			right = true;
		} else if (aliens[i].x < 0 + aliens[i].r) {
			left = true
		}
	}

	if (right || left) {
		for (var i = 0; i < aliens.length; i++) {
			aliens[i].shiftDown();
		}
	}

	for (var i = aliens.length - 1; i >= 0; i--) {
		if (aliens[i].toDelete) {
			aliens.splice(i, 1);
		}
	}

	for (var i = drops.length - 1; i >= 0; i--) {
		if (drops[i].toDelete) {
			drops.splice(i, 1);
		}
	}
}