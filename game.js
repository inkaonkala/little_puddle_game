import { Player } from "./player.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const backr = new Image();
backr.src = "./assets/backr.png";

function draw() {
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.drawImage( backr, 0, 0, canvas.width, canvas.height);
	
}

function gameLoopy() {
	draw();
	requestAnimationFrame(gameLoopy);
}

backr.onload = => {
	gameLoopy();
}