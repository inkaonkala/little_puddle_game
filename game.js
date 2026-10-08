import { Player } from "./player.js";
import { Input } from "./input.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const backr = new Image();
backr.src = "./assets/backr.png";

const player = new Player(300, 1000);
const input = new Input(player);

function draw() {
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.drawImage( backr, 0, 0, canvas.width, canvas.height);
	player.draw(ctx);
	
}

function update() {
	input.update();

	//keep player on canvas!
	player.x = Math.max( player.width / 2, Math.min(canvas.width - player.width / 2, player.x))

	player.jumpUpdate();
}



function gameLoopy() {
	update();
	draw();
	requestAnimationFrame(gameLoopy);
}

backr.onload = () => {
	gameLoopy();
}