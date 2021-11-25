// GET ELEMENTS ----------

var startScreen = document.querySelector('.start-screen');
var gameScreen = document.querySelector('.game-screen');
var winScreen = document.querySelector('.win-screen');
var loseScreen = document.querySelector('.lose-screen');
var emoji = document.querySelector('.emoji');
var object1 = document.querySelector('.object1');
var object2 = document.querySelector('.object2');
var object3 = document.querySelector('.object3');
var shot = document.querySelector('.shot');
var explode = document.querySelector('.explode');

// DEFINE VARIABLES ----------

document.querySelector('.btn-left').addEventListener('click', btnLeft);
document.querySelector('.btn-right').addEventListener('click', btnRight);
document.querySelector('.btn-up').addEventListener('click', btnUp);
document.querySelector('.btn-down').addEventListener('click', btnDown);
document.querySelector('.btn-a').addEventListener('click', btnA);
document.querySelector('.btn-start').addEventListener('click', btnStart);
document.querySelector('.btn-reset').addEventListener('click', btnReset);

// EMOJI POSITION ----------

const emojiPositionX = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const emojiPositionY = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let posX = emojiPositionX[2];
let posY = emojiPositionY[6];

let emojiX = 0;
let emojiY = 0;

const moveForward = 'translate(-50%, -50%) rotateY(180deg) rotate(-15deg)';
const moveBackward = 'translate(-50%, -50%) rotateY(180deg) rotate(5deg)';
const moveUp = 'translate(-50%, -50%) rotateY(180deg) rotate(0deg)';
const moveDown = 'translate(-50%, -50%) rotateY(180deg) rotate(0deg)';

// OBJECT POSITION ----------

let objectPosition = 0;

let objectX = 0;
let objectY = 0;

const object1PositionX = [90, 80, 70, 70, 60, 60, 50, 40, 40, 30, 20, 10, -10];
const object1PositionY = [50, 50, 50, 40, 40, 50, 50, 50, 60, 60, 60, 60, 60];

const object2PositionX = [90, 80, 80, 80, 70, 60, 50, 50, 40, 30, 20, 10, -10];
const object2PositionY = [20, 20, 30, 40, 40, 40, 40, 30, 30, 30, 30, 30, 30];

const object3PositionX = [90, 80, 70, 70, 60, 60, 60, 50, 40, 30, 20, 10, -10];
const object3PositionY = [70, 70, 70, 60, 60, 70, 80, 80, 80, 80, 80, 80, 80];

// SHOOT ----------

let actionFrame = 0;
let shotPosition = 0;
let shotX = 0;
let shotY = 0;

// SCORE ----------

let score = 0;
let hitCount = 0;

// RESET FUNCTION ----------

function btnReset() {
	score = 0;
	objectPosition = 43;
	objectX = 0;
	objectY = 0;
	actionFrame = 0;
	shotPosition = 0;
	shotX = 0;
	shotY = 0;
	emoji.classList.add('hide');
	object1.classList.add('hide');
	object2.classList.add('hide');
	object3.classList.add('hide');
	explode.classList.add('hide');
	gameScreen.classList.add('hide');
	winScreen.classList.add('hide');
	loseScreen.classList.add('hide');
	startScreen.classList.remove('hide');
}

// EMOJI HIT FUNCTION ----------

function emojiHit() {
	if (
		objectX === emojiX &&
		objectY === emojiY &&
		object.classList.contains('hide') === false
	) {
		hitCount++;
		emoji.classList.add('hide');
		explode.classList.remove('hide');
		explode.style.left = objectX.toString() + '%';
		explode.style.top = objectY.toString() + '%';
		objectPosition = 42;
	}
}

// OBJECT HIT FUCTION ----------

function objectHit() {
	if (
		shotX === objectX &&
		shotY === objectY &&
		object.classList.contains('hide') === false
	) {
		score++;
		console.log(score);
		object.classList.add('hide');
		explode.classList.remove('hide');
		explode.style.left = objectX.toString() + '%';
		explode.style.top = objectY.toString() + '%';
		shotPosition = 11;
	}
}

// WIN GAME FUCTION ----------

function winGame() {
	if (score === 3) {
		gameScreen.classList.add('hide');
		winScreen.classList.remove('hide');
	}
}

// LOSE GAME FUCTION ----------

function loseGame() {
	if ((objectPosition === 42 && score < 3) || hitCount === 1) {
		gameScreen.classList.add('hide');
		loseScreen.classList.remove('hide');
	}
}

// START "RUN GAME" (OBJECT MOTION) FUNCTION ----------

function btnStart() {
	if (startScreen.classList.contains('hide') === false) {
		objectPosition = 0;
		actionFrame = 0;
		shotPosition = 0;
		startScreen.classList.add('hide');
		gameScreen.classList.remove('hide');
		posX = emojiPositionX[2];
		posY = emojiPositionX[6];
		emoji.style.left = emojiPositionX[2] + '%';
		emoji.style.top = emojiPositionX[6] + '%';
		emoji.style.transform =
			'translate(-50%, -50%) rotateY(180deg) rotate(0deg)';
		emoji.classList.remove('hide');

		var game = setInterval(objectMotion, 500);
		function objectMotion() {
			if (objectPosition === 42) {
				clearInterval(game);
				loseGame();
			} else if (objectPosition === 43) {
				clearInterval(game);
			} else {
				objectPosition++;
				winGame();

				// OBJECT 1 MOTION ---

				if (objectPosition === 1) {
					object1.classList.remove('hide');
					object1.style.left = object1PositionX[0].toString() + '%';
					object1.style.top = object1PositionY[0].toString() + '%';
					objectX = object1PositionX[0];
					objectY = object1PositionY[0];
					object = object1;
					emojiHit();
				} else if (objectPosition === 2) {
					object1.style.left = object1PositionX[1].toString() + '%';
					object1.style.top = object1PositionY[1].toString() + '%';
					objectX = object1PositionX[1];
					objectY = object1PositionY[1];
					object = object1;
					emojiHit();
				} else if (objectPosition === 3) {
					object1.style.left = object1PositionX[2].toString() + '%';
					object1.style.top = object1PositionY[2].toString() + '%';
					objectX = object1PositionX[2];
					objectY = object1PositionY[2];
					object = object1;
					emojiHit();
				} else if (objectPosition === 4) {
					object1.style.left = object1PositionX[3].toString() + '%';
					object1.style.top = object1PositionY[3].toString() + '%';
					objectX = object1PositionX[3];
					objectY = object1PositionY[3];
					object = object1;
					emojiHit();
				} else if (objectPosition === 5) {
					object1.style.left = object1PositionX[4].toString() + '%';
					object1.style.top = object1PositionY[4].toString() + '%';
					objectX = object1PositionX[4];
					objectY = object1PositionY[4];
					object = object1;
					emojiHit();
				} else if (objectPosition === 6) {
					object1.style.left = object1PositionX[5].toString() + '%';
					object1.style.top = object1PositionY[5].toString() + '%';
					objectX = object1PositionX[5];
					objectY = object1PositionY[5];
					object = object1;
					emojiHit();
				} else if (objectPosition === 7) {
					object1.style.left = object1PositionX[6].toString() + '%';
					object1.style.top = object1PositionY[6].toString() + '%';
					objectX = object1PositionX[6];
					objectY = object1PositionY[6];
					object = object1;
					emojiHit();
				} else if (objectPosition === 8) {
					object1.style.left = object1PositionX[7].toString() + '%';
					object1.style.top = object1PositionY[7].toString() + '%';
					objectX = object1PositionX[7];
					objectY = object1PositionY[7];
					object = object1;
					emojiHit();
				} else if (objectPosition === 9) {
					object1.style.left = object1PositionX[8].toString() + '%';
					object1.style.top = object1PositionY[8].toString() + '%';
					objectX = object1PositionX[8];
					objectY = object1PositionY[8];
					object = object1;
					emojiHit();
				} else if (objectPosition === 10) {
					object1.style.left = object1PositionX[9].toString() + '%';
					object1.style.top = object1PositionY[9].toString() + '%';
					objectX = object1PositionX[9];
					objectY = object1PositionY[9];
					object = object1;
					emojiHit();
				} else if (objectPosition === 11) {
					object1.style.left = object1PositionX[10].toString() + '%';
					object1.style.top = object1PositionY[10].toString() + '%';
					objectX = object1PositionX[10];
					objectY = object1PositionY[10];
					object = object1;
					emojiHit();
				} else if (objectPosition === 12) {
					object1.style.left = object1PositionX[11].toString() + '%';
					object1.style.top = object1PositionY[11].toString() + '%';
					objectX = object1PositionX[11];
					objectY = object1PositionY[11];
					object = object1;
					emojiHit();
				} else if (objectPosition === 13) {
					object1.style.left = object1PositionX[12].toString() + '%';
					object1.style.top = object1PositionY[12].toString() + '%';
					objectX = object1PositionX[12];
					objectY = object1PositionY[12];
					object = object1;
					emojiHit();
				} else if (objectPosition === 14) {
					object1.classList.add('hide');

					// OBJECT 2 MOTION ---
				} else if (objectPosition === 15) {
					object2.classList.remove('hide');
					object2.style.left = object2PositionX[0].toString() + '%';
					object2.style.top = object2PositionY[0].toString() + '%';
					objectX = object2PositionX[0];
					objectY = object2PositionY[0];
					object = object2;
					emojiHit();
				} else if (objectPosition === 16) {
					object2.style.left = object2PositionX[1].toString() + '%';
					object2.style.top = object2PositionY[1].toString() + '%';
					objectX = object2PositionX[1];
					objectY = object2PositionY[1];
					object = object2;
					emojiHit();
				} else if (objectPosition === 17) {
					object2.style.left = object2PositionX[2].toString() + '%';
					object2.style.top = object2PositionY[2].toString() + '%';
					objectX = object2PositionX[2];
					objectY = object2PositionY[2];
					object = object2;
					emojiHit();
				} else if (objectPosition === 18) {
					object2.style.left = object2PositionX[3].toString() + '%';
					object2.style.top = object2PositionY[3].toString() + '%';
					objectX = object2PositionX[3];
					objectY = object2PositionY[3];
					object = object2;
					emojiHit();
				} else if (objectPosition === 19) {
					object2.style.left = object2PositionX[4].toString() + '%';
					object2.style.top = object2PositionY[4].toString() + '%';
					objectX = object2PositionX[4];
					objectY = object2PositionY[4];
					object = object2;
					emojiHit();
				} else if (objectPosition === 20) {
					object2.style.left = object2PositionX[5].toString() + '%';
					object2.style.top = object2PositionY[5].toString() + '%';
					objectX = object2PositionX[5];
					objectY = object2PositionY[5];
					object = object2;
					emojiHit();
				} else if (objectPosition === 21) {
					object2.style.left = object2PositionX[6].toString() + '%';
					object2.style.top = object2PositionY[6].toString() + '%';
					objectX = object2PositionX[6];
					objectY = object2PositionY[6];
					object = object2;
					emojiHit();
				} else if (objectPosition === 22) {
					object2.style.left = object2PositionX[7].toString() + '%';
					object2.style.top = object2PositionY[7].toString() + '%';
					objectX = object2PositionX[7];
					objectY = object2PositionY[7];
					object = object2;
					emojiHit();
				} else if (objectPosition === 23) {
					object2.style.left = object2PositionX[8].toString() + '%';
					object2.style.top = object2PositionY[8].toString() + '%';
					objectX = object2PositionX[8];
					objectY = object2PositionY[8];
					object = object2;
					emojiHit();
				} else if (objectPosition === 24) {
					object2.style.left = object2PositionX[9].toString() + '%';
					object2.style.top = object2PositionY[9].toString() + '%';
					objectX = object2PositionX[9];
					objectY = object2PositionY[9];
					object = object2;
					emojiHit();
				} else if (objectPosition === 25) {
					object2.style.left = object2PositionX[10].toString() + '%';
					object2.style.top = object2PositionY[10].toString() + '%';
					objectX = object2PositionX[10];
					objectY = object2PositionY[10];
					object = object2;
					emojiHit();
				} else if (objectPosition === 26) {
					object2.style.left = object2PositionX[11].toString() + '%';
					object2.style.top = object2PositionY[11].toString() + '%';
					objectX = object2PositionX[11];
					objectY = object2PositionY[11];
					object = object2;
					emojiHit();
				} else if (objectPosition === 27) {
					object2.style.left = object2PositionX[12].toString() + '%';
					object2.style.top = object2PositionY[12].toString() + '%';
					objectX = object2PositionX[12];
					objectY = object2PositionY[12];
					object = object2;
					emojiHit();
				} else if (objectPosition === 28) {
					object2.classList.add('hide');

					// OBJECT 3 MOTION ---
				} else if (objectPosition === 29) {
					object3.classList.remove('hide');
					object3.style.left = object3PositionX[0].toString() + '%';
					object3.style.top = object3PositionY[0].toString() + '%';
					objectX = object3PositionX[0];
					objectY = object3PositionY[0];
					object = object3;
					emojiHit();
				} else if (objectPosition === 30) {
					object3.style.left = object3PositionX[1].toString() + '%';
					object3.style.top = object3PositionY[1].toString() + '%';
					objectX = object3PositionX[1];
					objectY = object3PositionY[1];
					object = object3;
					emojiHit();
				} else if (objectPosition === 31) {
					object3.style.left = object3PositionX[2].toString() + '%';
					object3.style.top = object3PositionY[2].toString() + '%';
					objectX = object3PositionX[2];
					objectY = object3PositionY[2];
					object = object3;
					emojiHit();
				} else if (objectPosition === 32) {
					object3.style.left = object3PositionX[3].toString() + '%';
					object3.style.top = object3PositionY[3].toString() + '%';
					objectX = object3PositionX[3];
					objectY = object3PositionY[3];
					object = object3;
					emojiHit();
				} else if (objectPosition === 33) {
					object3.style.left = object3PositionX[4].toString() + '%';
					object3.style.top = object3PositionY[4].toString() + '%';
					objectX = object3PositionX[4];
					objectY = object3PositionY[4];
					object = object3;
					emojiHit();
				} else if (objectPosition === 34) {
					object3.style.left = object3PositionX[5].toString() + '%';
					object3.style.top = object3PositionY[5].toString() + '%';
					objectX = object3PositionX[5];
					objectY = object3PositionY[5];
					object = object3;
					emojiHit();
				} else if (objectPosition === 35) {
					object3.style.left = object3PositionX[6].toString() + '%';
					object3.style.top = object3PositionY[6].toString() + '%';
					objectX = object3PositionX[6];
					objectY = object3PositionY[6];
					object = object3;
					emojiHit();
				} else if (objectPosition === 36) {
					object3.style.left = object3PositionX[7].toString() + '%';
					object3.style.top = object3PositionY[7].toString() + '%';
					objectX = object3PositionX[7];
					objectY = object3PositionY[7];
					object = object3;
					emojiHit();
				} else if (objectPosition === 37) {
					object3.style.left = object3PositionX[8].toString() + '%';
					object3.style.top = object3PositionY[8].toString() + '%';
					objectX = object3PositionX[8];
					objectY = object3PositionY[8];
					object = object3;
					emojiHit();
				} else if (objectPosition === 38) {
					object3.style.left = object3PositionX[9].toString() + '%';
					object3.style.top = object3PositionY[9].toString() + '%';
					objectX = object3PositionX[9];
					objectY = object3PositionY[9];
					object = object3;
					emojiHit();
				} else if (objectPosition === 39) {
					object3.style.left = object3PositionX[10].toString() + '%';
					object3.style.top = object3PositionY[10].toString() + '%';
					objectX = object3PositionX[10];
					objectY = object3PositionY[10];
					object = object3;
					emojiHit();
				} else if (objectPosition === 40) {
					object3.style.left = object3PositionX[11].toString() + '%';
					object3.style.top = object3PositionY[11].toString() + '%';
					objectX = object3PositionX[11];
					objectY = object3PositionY[11];
					object = object3;
					emojiHit();
				} else if (objectPosition === 41) {
					object3.style.left = object3PositionX[12].toString() + '%';
					object3.style.top = object3PositionY[12].toString() + '%';
					objectX = object3PositionX[12];
					objectY = object3PositionY[12];
					object = object3;
					emojiHit();
				}
			}
		}
	}
}

// MOVEMENT FUNCTION & ACTION SEQUENCE ----------

// MOVE LEFT ---

function btnLeft() {
	emoji.style.transform = moveBackward;

	if (posX > 10) {
		posX -= 10;
	} else {
		posX = 10;
	}

	if (posX === 10) {
		emoji.style.left = emojiPositionX[0].toString() + '%';
		emojiX = emojiPositionX[0];
	} else if (posX === 20) {
		emoji.style.left = emojiPositionX[1].toString() + '%';
		emojiX = emojiPositionX[1];
	} else if (posX === 30) {
		emoji.style.left = emojiPositionX[2].toString() + '%';
		emojiX = emojiPositionX[2];
	} else if (posX === 40) {
		emoji.style.left = emojiPositionX[3].toString() + '%';
		emojiX = emojiPositionX[3];
	} else if (posX === 50) {
		emoji.style.left = emojiPositionX[4].toString() + '%';
		emojiX = emojiPositionX[4];
	} else if (posX === 60) {
		emoji.style.left = emojiPositionX[5].toString() + '%';
		emojiX = emojiPositionX[5];
	} else if (posX === 70) {
		emoji.style.left = emojiPositionX[6].toString() + '%';
		emojiX = emojiPositionX[6];
	} else if (posX === 80) {
		emoji.style.left = emojiPositionX[7].toString() + '%';
		emojiX = emojiPositionX[7];
	} else if (posX === 90) {
		emoji.style.left = emojiPositionX[8].toString() + '%';
		emojiX = emojiPositionX[8];
	}
}

// MOVE RIGHT ---

function btnRight() {
	emoji.style.transform = moveForward;

	if (posX < 90) {
		posX += 10;
	} else {
		posX = 90;
	}

	if (posX === 10) {
		emoji.style.left = emojiPositionX[0].toString() + '%';
		emojiX = emojiPositionX[0];
		emojiHit();
	} else if (posX === 20) {
		emoji.style.left = emojiPositionX[1].toString() + '%';
		emojiX = emojiPositionX[1];
		emojiHit();
	} else if (posX === 30) {
		emoji.style.left = emojiPositionX[2].toString() + '%';
		emojiX = emojiPositionX[2];
		emojiHit();
	} else if (posX === 40) {
		emoji.style.left = emojiPositionX[3].toString() + '%';
		emojiX = emojiPositionX[3];
		emojiHit();
	} else if (posX === 50) {
		emoji.style.left = emojiPositionX[4].toString() + '%';
		emojiX = emojiPositionX[4];
		emojiHit();
	} else if (posX === 60) {
		emoji.style.left = emojiPositionX[5].toString() + '%';
		emojiX = emojiPositionX[5];
		emojiHit();
	} else if (posX === 70) {
		emoji.style.left = emojiPositionX[6].toString() + '%';
		emojiX = emojiPositionX[6];
		emojiHit();
	} else if (posX === 80) {
		emoji.style.left = emojiPositionX[7].toString() + '%';
		emojiX = emojiPositionX[7];
		emojiHit();
	} else if (posX === 90) {
		emoji.style.left = emojiPositionX[8].toString() + '%';
		emojiX = emojiPositionX[8];
		emojiHit();
	}
}

// MOVE UP ---

function btnUp() {
	emoji.style.transform = moveUp;

	if (posY > 10) {
		posY -= 10;
	} else {
		posY = 10;
	}

	if (posY === 10) {
		emoji.style.top = emojiPositionY[0].toString() + '%';
		emojiY = emojiPositionY[0];
		emojiHit();
	} else if (posY === 20) {
		emoji.style.top = emojiPositionY[1].toString() + '%';
		emojiY = emojiPositionY[1];
		emojiHit();
	} else if (posY === 30) {
		emoji.style.top = emojiPositionY[2].toString() + '%';
		emojiY = emojiPositionY[2];
		emojiHit();
	} else if (posY === 40) {
		emoji.style.top = emojiPositionY[3].toString() + '%';
		emojiY = emojiPositionY[3];
		emojiHit();
	} else if (posY === 50) {
		emoji.style.top = emojiPositionY[4].toString() + '%';
		emojiY = emojiPositionY[4];
		emojiHit();
	} else if (posY === 60) {
		emoji.style.top = emojiPositionY[5].toString() + '%';
		emojiY = emojiPositionY[5];
		emojiHit();
	} else if (posY === 70) {
		emoji.style.top = emojiPositionY[6].toString() + '%';
		emojiY = emojiPositionY[6];
		emojiHit();
	} else if (posY === 80) {
		emoji.style.top = emojiPositionY[7].toString() + '%';
		emojiY = emojiPositionY[7];
		emojiHit();
	} else if (posY === 90) {
		emoji.style.top = emojiPositionY[8].toString() + '%';
		emojiY = emojiPositionY[8];
		emojiHit();
	}
}

// MOVE DOWN ---

function btnDown() {
	emoji.style.transform = moveDown;

	if (posY < 90) {
		posY += 10;
	} else {
		posY = 90;
	}

	if (posY === 10) {
		emoji.style.top = emojiPositionY[0].toString() + '%';
		emojiY = emojiPositionY[0];
		emojiHit();
	} else if (posY === 20) {
		emoji.style.top = emojiPositionY[1].toString() + '%';
		emojiY = emojiPositionY[1];
		emojiHit();
	} else if (posY === 30) {
		emoji.style.top = emojiPositionY[2].toString() + '%';
		emojiY = emojiPositionY[2];
		emojiHit();
	} else if (posY === 40) {
		emoji.style.top = emojiPositionY[3].toString() + '%';
		emojiY = emojiPositionY[3];
		emojiHit();
	} else if (posY === 50) {
		emoji.style.top = emojiPositionY[4].toString() + '%';
		emojiY = emojiPositionY[4];
		emojiHit();
	} else if (posY === 60) {
		emoji.style.top = emojiPositionY[5].toString() + '%';
		emojiY = emojiPositionY[5];
		emojiHit();
	} else if (posY === 70) {
		emoji.style.top = emojiPositionY[6].toString() + '%';
		emojiY = emojiPositionY[6];
		emojiHit();
	} else if (posY === 80) {
		emoji.style.top = emojiPositionY[7].toString() + '%';
		emojiY = emojiPositionY[7];
		emojiHit();
	} else if (posY === 90) {
		emoji.style.top = emojiPositionY[8].toString() + '%';
		emojiY = emojiPositionY[8];
		emojiHit();
	}
}

// BUTTON A "FIRE" ---

function btnA() {
	emoji.style.transform = 'translate(-50%, -50%) rotateY(180deg) rotate(0deg)';

	const shotPositionX = [
		posX + 10,
		posX + 20,
		posX + 30,
		posX + 40,
		posX + 50,
		posX + 60,
		posX + 70,
		posX + 80,
		posX + 90,
		posX + 100,
	];
	const shotPositionY = posY;

	var actionSeq = setInterval(shotCascade, 50);

	function shotCascade() {
		if (shotPosition === 15) {
			shot.classList.add('hide');
			explode.classList.add('hide');
			shotPosition = 0;
			clearInterval(actionSeq);
		} else {
			shotPosition++;
			shot.classList.remove('hide');

			if (shotPosition === 1) {
				shotX = shotPositionX[0];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 2) {
				shotX = shotPositionX[1];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 3) {
				shotX = shotPositionX[2];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 4) {
				shotX = shotPositionX[3];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 5) {
				shotX = shotPositionX[4];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 6) {
				shotX = shotPositionX[5];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 7) {
				shotX = shotPositionX[6];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 8) {
				shotX = shotPositionX[7];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 9) {
				shotX = shotPositionX[8];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			} else if (shotPosition === 10) {
				shotX = shotPositionX[9];
				shotY = shotPositionY;
				shot.style.left = shotX.toString() + '%';
				shot.style.top = shotY.toString() + '%';
				objectHit();
			}
		}
	}
}

// CONVERT CONTROLS TO KEYBOARD ----------

let keyCode = 0;

document.onkeydown = keyPress;

function keyPress(e) {
	e = e || window.event;

	// MOVE LEFT ---
	if (e.keyCode == '37') {
		btnLeft();

		// MOVE RIGHT ---
	} else if (e.keyCode == '39') {
		btnRight();

		// MOVE UP ---
	} else if (e.keyCode == '38') {
		btnUp();

		// MOVE DOWN ---
	} else if (e.keyCode == '40') {
		btnDown();

		// FIRE ---
	} else if (e.keyCode == '32') {
		btnA();

		// START BUTTON ---
	} else if (e.keyCode == '13') {
		btnStart();

		// RESET BUTTON ---
	} else if (e.keyCode == '16') {
		btnReset();
	}
}
